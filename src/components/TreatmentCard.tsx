
import { Leaf, Beaker, Clock, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Treatment {
  type: 'organic' | 'chemical';
  name: string;
  description: string;
  application: string;
}

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard = ({ treatment }: TreatmentCardProps) => {
  const isOrganic = treatment.type === 'organic';

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-xl ${
      isOrganic ? 'border-green-200 hover:border-green-300' : 'border-blue-200 hover:border-blue-300'
    }`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${
          isOrganic ? 'bg-green-100' : 'bg-blue-100'
        }`}>
          {isOrganic ? (
            <Leaf className={`w-6 h-6 ${isOrganic ? 'text-green-600' : 'text-blue-600'}`} />
          ) : (
            <Beaker className={`w-6 h-6 ${isOrganic ? 'text-green-600' : 'text-blue-600'}`} />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-lg font-semibold text-gray-800">
              {treatment.name}
            </h4>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              isOrganic 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {isOrganic ? 'Organic' : 'Chemical'}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            {treatment.description}
          </p>
          
          <div className="flex items-start gap-2 mb-4">
            <Clock className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Application:</p>
              <p className="text-sm text-gray-600">{treatment.application}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <Droplets className="w-3 h-3" />
            <span>Follow safety guidelines when applying</span>
          </div>
          
          <Button 
            size="sm" 
            variant="outline"
            className={`w-full ${
              isOrganic 
                ? 'border-green-200 text-green-600 hover:bg-green-50' 
                : 'border-blue-200 text-blue-600 hover:bg-blue-50'
            }`}
          >
            View Detailed Instructions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
