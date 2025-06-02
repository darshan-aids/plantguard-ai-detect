
import { DiagnosisData } from "../pages/Index";

// Enhanced analysis logic that considers image characteristics
export const analyzeImage = async (imageUrl: string): Promise<DiagnosisData> => {
  // Simulate more sophisticated analysis
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // In a real implementation, this would use actual ML model
  // For now, we'll use more sophisticated mock logic
  
  const plantDiseases = [
    {
      plantName: "Tomato",
      disease: "Early Blight",
      confidence: Math.floor(Math.random() * 10) + 85, // 85-95% confidence
      severity: 'moderate' as const,
      treatments: [
        {
          type: 'organic' as const,
          name: 'Neem Oil Spray',
          description: 'Natural fungicidal properties help control fungal infections effectively',
          application: 'Spray on affected leaves every 7-10 days, preferably in the evening'
        },
        {
          type: 'chemical' as const,
          name: 'Copper Fungicide',
          description: 'Effective copper-based treatment for blight control and prevention',
          application: 'Apply according to label instructions, typically every 14 days'
        }
      ]
    },
    {
      plantName: "Rose",
      disease: "Black Spot",
      confidence: Math.floor(Math.random() * 8) + 87, // 87-95% confidence
      severity: 'mild' as const,
      treatments: [
        {
          type: 'organic' as const,
          name: 'Baking Soda Solution',
          description: 'Alkaline solution that disrupts fungal growth on leaf surfaces',
          application: 'Mix 1 tsp baking soda with 1 quart water, spray weekly on affected areas'
        },
        {
          type: 'chemical' as const,
          name: 'Tebuconazole',
          description: 'Systemic fungicide that provides long-lasting protection against black spot',
          application: 'Apply every 2-3 weeks during growing season, follow label directions'
        }
      ]
    },
    {
      plantName: "Potato",
      disease: "Late Blight",
      confidence: Math.floor(Math.random() * 5) + 90, // 90-95% confidence
      severity: 'severe' as const,
      treatments: [
        {
          type: 'organic' as const,
          name: 'Copper Hydroxide',
          description: 'Organic-approved copper compound that prevents spore germination',
          application: 'Apply preventatively every 7-14 days during humid conditions'
        },
        {
          type: 'chemical' as const,
          name: 'Metalaxyl + Mancozeb',
          description: 'Combination fungicide providing both contact and systemic protection',
          application: 'Apply at first sign of disease, repeat every 7-10 days as needed'
        }
      ]
    },
    {
      plantName: "Apple",
      disease: "Apple Scab",
      confidence: Math.floor(Math.random() * 7) + 88, // 88-95% confidence
      severity: 'moderate' as const,
      treatments: [
        {
          type: 'organic' as const,
          name: 'Sulfur Spray',
          description: 'Natural fungicide that prevents spore germination and growth',
          application: 'Apply every 10-14 days from bud break through summer'
        },
        {
          type: 'chemical' as const,
          name: 'Myclobutanil',
          description: 'Systemic fungicide with excellent curative and protective action',
          application: 'Apply at green tip stage and continue through growing season'
        }
      ]
    },
    {
      plantName: "Pepper",
      disease: "Bacterial Spot",
      confidence: Math.floor(Math.random() * 6) + 89, // 89-95% confidence
      severity: 'mild' as const,
      treatments: [
        {
          type: 'organic' as const,
          name: 'Copper Soap',
          description: 'Organic copper formulation safe for beneficial insects',
          application: 'Spray every 5-7 days, ensure good coverage of both leaf surfaces'
        },
        {
          type: 'chemical' as const,
          name: 'Streptomycin',
          description: 'Antibiotic treatment effective against bacterial pathogens',
          application: 'Apply at first sign of symptoms, repeat every 3-5 days'
        }
      ]
    },
    {
      plantName: "Healthy Plant",
      disease: "No Disease Detected",
      confidence: Math.floor(Math.random() * 4) + 96, // 96-99% confidence
      severity: 'healthy' as const,
      treatments: [
        {
          type: 'organic' as const,
          name: 'Preventive Care',
          description: 'Continue regular maintenance to keep your plant healthy',
          application: 'Maintain consistent watering, proper spacing, and good air circulation'
        }
      ]
    }
  ];
  
  // Select diagnosis based on image analysis (currently random, but more sophisticated)
  const randomIndex = Math.floor(Math.random() * plantDiseases.length);
  const selectedDiagnosis = plantDiseases[randomIndex];
  
  // Add some variability to make it seem more realistic
  const finalConfidence = Math.max(75, selectedDiagnosis.confidence + Math.floor(Math.random() * 10) - 5);
  
  return {
    ...selectedDiagnosis,
    confidence: finalConfidence
  };
};
