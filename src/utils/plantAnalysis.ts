
import { DiagnosisData } from "../pages/Index";
import { supabase } from "@/integrations/supabase/client";
import { validateImageUrl } from "./imageValidation";

// Enhanced analysis logic using Gemini API
export const analyzeImage = async (imageUrl: string): Promise<DiagnosisData> => {
  try {
    // Validate the image URL first
    const urlValidation = validateImageUrl(imageUrl);
    if (!urlValidation.isValid) {
      throw new Error(urlValidation.error || 'Invalid image URL');
    }

    // Convert image URL to base64
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }
    
    const blob = await response.blob();
    
    // Check blob size (additional validation)
    if (blob.size > 10 * 1024 * 1024) { // 10MB limit
      throw new Error('Image file is too large. Please use an image smaller than 10MB.');
    }

    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.readAsDataURL(blob);
    });

    // Call the Supabase edge function with timeout
    const timeoutController = new AbortController();
    const timeoutId = setTimeout(() => timeoutController.abort(), 30000); // 30 second timeout

    try {
      const { data, error } = await supabase.functions.invoke('analyze-plant', {
        body: { imageBase64: base64 },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      clearTimeout(timeoutId);

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Analysis service error: ${error.message || 'Unknown error'}`);
      }

      // Validate response structure
      if (!data) {
        throw new Error('No response received from analysis service');
      }

      // Check if it's not a plant image
      if (!data.isPlant) {
        throw new Error(data.message || 'Please upload a clear image of a plant leaf for disease analysis.');
      }

      // Validate required fields
      if (!data.plantName || !data.disease || typeof data.confidence !== 'number') {
        throw new Error('Invalid response format from analysis service');
      }

      // Transform the Gemini response to match our DiagnosisData interface
      const diagnosis: DiagnosisData = {
        plantName: data.plantName,
        disease: data.disease,
        confidence: Math.min(100, Math.max(0, data.confidence)), // Ensure confidence is between 0-100
        severity: data.severity || 'moderate',
        treatments: Array.isArray(data.treatments) ? data.treatments : []
      };

      // Validate severity value
      const validSeverities = ['healthy', 'mild', 'moderate', 'severe'];
      if (!validSeverities.includes(diagnosis.severity)) {
        diagnosis.severity = 'moderate';
      }

      return diagnosis;

    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        throw new Error('Analysis request timed out. Please try again with a smaller image.');
      }
      
      throw fetchError;
    }

  } catch (error) {
    console.error('Analysis failed:', error);
    
    // If it's a "not a plant" error, re-throw it
    if (error.message && error.message.includes('plant leaf')) {
      throw error;
    }
    
    // Handle specific error types
    if (error.message && error.message.includes('fetch')) {
      throw new Error('Unable to process the image. Please check your internet connection and try again.');
    }
    
    if (error.message && error.message.includes('timeout')) {
      throw new Error('Analysis is taking too long. Please try again with a smaller image.');
    }
    
    // Generic fallback error
    throw new Error(error.message || 'Unable to analyze the image. Please try again with a clearer photo of a plant leaf.');
  }
};
