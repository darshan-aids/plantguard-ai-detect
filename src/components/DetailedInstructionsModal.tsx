
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Droplets, Shield, AlertTriangle, CheckCircle } from "lucide-react";

interface Treatment {
  type: 'organic' | 'chemical';
  name: string;
  description: string;
  application: string;
}

interface DetailedInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Treatment;
}

const DetailedInstructionsModal = ({ isOpen, onClose, treatment }: DetailedInstructionsModalProps) => {
  const isOrganic = treatment.type === 'organic';

  const getDetailedInstructions = () => {
    const baseInstructions = {
      'Neem Oil Spray': {
        preparation: 'Mix 2 tablespoons of neem oil with 1 gallon of water and a few drops of mild dish soap',
        timing: 'Apply early morning or evening to avoid leaf burn',
        frequency: 'Every 7-10 days until symptoms improve',
        safety: 'Wear gloves and avoid spraying during flowering period',
        storage: 'Store in cool, dry place away from children and pets'
      },
      'Copper Fungicide': {
        preparation: 'Follow manufacturer instructions for dilution ratio',
        timing: 'Apply when weather conditions are dry with no rain expected for 24 hours',
        frequency: 'Every 14 days, maximum 4 applications per season',
        safety: 'Wear protective clothing, mask, and gloves. Avoid inhaling spray',
        storage: 'Store in original container in locked cabinet'
      },
      'Baking Soda Solution': {
        preparation: 'Mix 1 teaspoon baking soda with 1 quart water and 2-3 drops dish soap',
        timing: 'Apply during cooler parts of the day',
        frequency: 'Weekly application until disease is controlled',
        safety: 'Test on small area first to check for plant sensitivity',
        storage: 'Prepare fresh solution for each application'
      },
      'Tebuconazole': {
        preparation: 'Use exact concentration specified on product label',
        timing: 'Apply preventatively before disease symptoms appear',
        frequency: 'Every 2-3 weeks during growing season',
        safety: 'Use full protective equipment. Do not apply before harvest period',
        storage: 'Store in original container away from food and water sources'
      },
      'Preventive Care': {
        preparation: 'Maintain consistent watering schedule and good air circulation',
        timing: 'Monitor daily, especially during humid conditions',
        frequency: 'Ongoing maintenance routine',
        safety: 'Use clean gardening tools to prevent disease spread',
        storage: 'Keep gardening tools clean and sanitized'
      }
    };

    return baseInstructions[treatment.name as keyof typeof baseInstructions] || {
      preparation: 'Follow product label instructions',
      timing: 'Apply according to manufacturer guidelines',
      frequency: 'As recommended on product packaging',
      safety: 'Use appropriate protective equipment',
      storage: 'Store according to label instructions'
    };
  };

  const instructions = getDetailedInstructions();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isOrganic ? 'bg-green-100' : 'bg-blue-100'}`}>
              {isOrganic ? (
                <CheckCircle className={`w-5 h-5 ${isOrganic ? 'text-green-600' : 'text-blue-600'}`} />
              ) : (
                <Shield className={`w-5 h-5 ${isOrganic ? 'text-green-600' : 'text-blue-600'}`} />
              )}
            </div>
            Detailed Instructions: {treatment.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Overview</h3>
            <p className="text-gray-600 text-sm">{treatment.description}</p>
          </div>

          <div className="grid gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <h4 className="font-semibold text-gray-800">Preparation</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.preparation}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <h4 className="font-semibold text-gray-800">Timing</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.timing}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-green-500" />
                <h4 className="font-semibold text-gray-800">Frequency</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.frequency}</p>
            </div>

            <div className="p-4 border border-amber-200 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Safety Precautions</h4>
              </div>
              <p className="text-amber-700 text-sm">{instructions.safety}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-purple-500" />
                <h4 className="font-semibold text-gray-800">Storage</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.storage}</p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Additional Tips</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Always read and follow the complete product label</li>
              <li>• Test treatment on a small area first</li>
              <li>• Keep detailed records of treatments and results</li>
              <li>• Consult local agricultural extension for region-specific advice</li>
            </ul>
          </div>

          <div className="flex justify-end">
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedInstructionsModal;
