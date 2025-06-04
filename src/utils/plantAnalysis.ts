
import { DiagnosisData } from "../pages/Index";
import { supabase } from "@/integrations/supabase/client";

// Enhanced analysis logic using Gemini API
export const analyzeImage = async (imageUrl: string): Promise<DiagnosisData> => {
  try {
    // Convert image URL to base64
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    const base64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });

    // Call the Supabase edge function
    const { data, error } = await supabase.functions.invoke('analyze-plant', {
      body: { imageBase64: base64 }
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw new Error('Failed to analyze image');
    }

    // Check if it's not a plant image
    if (!data.isPlant) {
      throw new Error(data.message || 'Please upload a clear image of a plant leaf for disease analysis.');
    }

    // Transform the Gemini response to match our DiagnosisData interface
    const diagnosis: DiagnosisData = {
      plantName: data.plantName,
      disease: data.disease,
      confidence: data.confidence,
      severity: data.severity,
      treatments: data.treatments || []
    };

    return diagnosis;

  } catch (error) {
    console.error('Analysis failed:', error);
    
    // If it's a "not a plant" error, re-throw it
    if (error.message.includes('plant leaf')) {
      throw error;
    }
    
    // Fallback for other errors
    throw new Error('Unable to analyze the image. Please try again with a clearer photo of a plant leaf.');
  }
};
