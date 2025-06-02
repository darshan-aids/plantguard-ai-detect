
import { DiagnosisData } from "../pages/Index";
import TreatmentCard from "./TreatmentCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

interface DiagnosisResultProps {
  diagnosis: DiagnosisData;
  imageUrl: string;
  onReset: () => void;
}

const DiagnosisResult = ({ diagnosis, imageUrl, onReset }: DiagnosisResultProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'mild': return 'text-yellow-600 bg-yellow-100';
      case 'moderate': return 'text-orange-600 bg-orange-100';
      case 'severe': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'healthy': return <CheckCircle className="w-5 h-5" />;
      case 'mild': return <AlertTriangle className="w-5 h-5" />;
      case 'moderate': return <AlertCircle className="w-5 h-5" />;
      case 'severe': return <AlertCircle className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src={imageUrl} 
              alt="Analyzed plant" 
              className="w-full max-w-sm mx-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Analysis Complete
              </h2>
              <p className="text-gray-600">
                Here's what our AI found in your plant image
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-1">Plant Type</h3>
                <p className="text-blue-700 text-lg font-medium">{diagnosis.plantName}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">Diagnosis</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(diagnosis.severity)}`}>
                    {getSeverityIcon(diagnosis.severity)}
                    {diagnosis.disease}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Confidence: <span className="font-semibold">{diagnosis.confidence}%</span>
                </p>
              </div>
            </div>

            <Button
              onClick={onReset}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Analyze Another Plant
            </Button>
          </div>
        </div>
      </div>

      {/* Treatment Recommendations */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Treatment Recommendations
          </h3>
          <p className="text-gray-600">
            Choose from organic or chemical treatment options
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {diagnosis.treatments.map((treatment, index) => (
            <TreatmentCard key={index} treatment={treatment} />
          ))}
        </div>
      </div>

      {diagnosis.severity !== 'healthy' && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-2">Important Note</h4>
              <p className="text-amber-700 text-sm">
                This AI diagnosis is for guidance only. For severe issues or if symptoms persist, 
                please consult with a local agricultural expert or plant pathologist for professional advice.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisResult;
