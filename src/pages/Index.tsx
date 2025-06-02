
import { useState } from "react";
import Header from "../components/Header";
import ImageUpload from "../components/ImageUpload";
import DiagnosisResult from "../components/DiagnosisResult";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Camera, Sparkles } from "lucide-react";

export interface DiagnosisData {
  plantName: string;
  disease: string;
  confidence: number;
  severity: 'healthy' | 'mild' | 'moderate' | 'severe';
  treatments: {
    type: 'organic' | 'chemical';
    name: string;
    description: string;
    application: string;
  }[];
}

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<DiagnosisData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setDiagnosis(null);
  };

  const handleAnalyze = () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic delay
    setTimeout(() => {
      // Mock diagnosis data - in real app this would come from your AI model
      const mockDiagnoses: DiagnosisData[] = [
        {
          plantName: "Tomato",
          disease: "Early Blight",
          confidence: 94,
          severity: 'moderate',
          treatments: [
            {
              type: 'organic',
              name: 'Neem Oil Spray',
              description: 'Natural fungicidal properties help control fungal infections',
              application: 'Spray on affected leaves every 7-10 days'
            },
            {
              type: 'chemical',
              name: 'Copper Fungicide',
              description: 'Effective copper-based treatment for blight control',
              application: 'Apply according to label instructions, typically every 14 days'
            }
          ]
        },
        {
          plantName: "Rose",
          disease: "Black Spot",
          confidence: 89,
          severity: 'mild',
          treatments: [
            {
              type: 'organic',
              name: 'Baking Soda Solution',
              description: 'Mix 1 tsp baking soda with 1 quart water',
              application: 'Spray weekly on affected areas'
            },
            {
              type: 'chemical',
              name: 'Tebuconazole',
              description: 'Systemic fungicide for black spot control',
              application: 'Apply every 2-3 weeks during growing season'
            }
          ]
        },
        {
          plantName: "Healthy Plant",
          disease: "No Disease Detected",
          confidence: 96,
          severity: 'healthy',
          treatments: [
            {
              type: 'organic',
              name: 'Preventive Care',
              description: 'Continue regular watering and monitoring',
              application: 'Maintain consistent care routine'
            }
          ]
        }
      ];
      
      const randomDiagnosis = mockDiagnoses[Math.floor(Math.random() * mockDiagnoses.length)];
      setDiagnosis(randomDiagnosis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setDiagnosis(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              PlantGuard
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            AI-powered plant disease detection. Simply upload a photo of your plant's leaf to get instant diagnosis and treatment recommendations.
          </p>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Camera className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Upload</h3>
              <p className="text-gray-600 text-sm">Take a photo or upload existing images</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">Advanced AI identifies diseases instantly</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Treatment Guide</h3>
              <p className="text-gray-600 text-sm">Get organic and chemical treatment options</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {!uploadedImage && !diagnosis && (
            <ImageUpload onImageUpload={handleImageUpload} />
          )}

          {uploadedImage && !diagnosis && !isAnalyzing && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
              <img 
                src={uploadedImage} 
                alt="Uploaded plant" 
                className="max-w-md max-h-96 mx-auto rounded-xl shadow-lg mb-6 object-cover"
              />
              <div className="space-y-4">
                <Button 
                  onClick={handleAnalyze}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Analyze Plant Health
                </Button>
                <div>
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="ml-4"
                  >
                    Upload Different Image
                  </Button>
                </div>
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center">
              <div className="animate-spin w-16 h-16 border-4 border-green-200 border-t-green-500 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Analyzing Your Plant...</h3>
              <p className="text-gray-600">Our AI is examining the image for disease indicators</p>
            </div>
          )}

          {diagnosis && (
            <DiagnosisResult 
              diagnosis={diagnosis} 
              imageUrl={uploadedImage!}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
