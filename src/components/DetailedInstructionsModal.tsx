
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Droplets, Shield, AlertTriangle, CheckCircle, Leaf, Beaker } from "lucide-react";

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
    // Generate comprehensive instructions based on treatment type and name
    const baseOrganic = {
      preparation: 'Mix according to package directions or prepare fresh solution. Always use clean water and measuring tools.',
      timing: 'Apply early morning (6-8 AM) or late evening (6-8 PM) when temperatures are cooler and beneficial insects are less active.',
      frequency: 'Apply every 7-14 days or as needed. Monitor plant response and adjust frequency accordingly.',
      safety: 'While generally safe, wear gloves and avoid getting solution in eyes. Test on small area first.',
      storage: 'Store in cool, dry place away from children and pets. Prepare fresh solutions when possible.'
    };

    const baseChemical = {
      preparation: 'Follow manufacturer\'s label instructions exactly. Never exceed recommended concentrations.',
      timing: 'Apply when weather conditions are dry with no rain expected for 24-48 hours. Avoid windy conditions.',
      frequency: 'Follow label recommendations strictly. Do not exceed maximum applications per season.',
      safety: 'Wear full protective equipment including gloves, long sleeves, eye protection, and mask. Keep children and pets away during and after application.',
      storage: 'Store in original container in locked cabinet away from food, water sources, and living areas.'
    };

    // Check for specific treatments or use general guidelines
    if (treatment.name.toLowerCase().includes('neem')) {
      return {
        preparation: 'Mix 2 tablespoons of neem oil with 1 gallon of water and add 2-3 drops of mild liquid soap as emulsifier.',
        timing: 'Apply in early morning or evening to prevent leaf burn. Avoid application during flowering period.',
        frequency: 'Apply every 7-10 days until symptoms improve, then reduce to every 14 days for prevention.',
        safety: 'Generally safe but may cause skin irritation. Avoid spraying beneficial insects directly.',
        storage: 'Store neem oil in cool place. Mix fresh solution for each application.'
      };
    } else if (treatment.name.toLowerCase().includes('copper')) {
      return {
        preparation: 'Dilute according to label instructions. Typical ratio is 1-2 tablespoons per gallon of water.',
        timing: 'Apply preventively before disease symptoms appear or at first sign of infection.',
        frequency: 'Every 10-14 days during growing season. Maximum 4 applications per year.',
        safety: 'Wear protective clothing and avoid inhaling spray mist. Can stain skin and clothing.',
        storage: 'Store in original container in dry location. Keep away from metal tools as it can cause corrosion.'
      };
    } else if (treatment.name.toLowerCase().includes('baking soda') || treatment.name.toLowerCase().includes('sodium bicarbonate')) {
      return {
        preparation: 'Mix 1 teaspoon baking soda + 1 quart water + 2-3 drops liquid soap. Stir until dissolved.',
        timing: 'Apply during cooler parts of the day to prevent leaf burn.',
        frequency: 'Weekly applications until disease is controlled, then bi-weekly for prevention.',
        safety: 'Very safe but test on small area first. Some plants may be sensitive to sodium.',
        storage: 'Mix fresh each time. Store baking soda in dry location.'
      };
    } else if (treatment.name.toLowerCase().includes('soap') || treatment.name.toLowerCase().includes('detergent')) {
      return {
        preparation: 'Mix 1-2 tablespoons of mild liquid soap (not detergent) per gallon of water.',
        timing: 'Apply early morning or evening. Rinse plants with clean water 2-3 hours after application.',
        frequency: 'Every 5-7 days as needed. Monitor for plant stress.',
        safety: 'Use only mild, additive-free soaps. Avoid dish detergents with degreasing agents.',
        storage: 'Mix fresh solution each time. Store soap in original container.'
      };
    } else {
      // Return appropriate base instructions based on type
      return isOrganic ? baseOrganic : baseChemical;
    }
  };

  const instructions = getDetailedInstructions();

  const getStepByStepApplication = () => {
    const steps = [
      "Read all product labels and safety information",
      "Prepare solution according to recommended ratios",
      "Test spray pattern on small, inconspicuous area first",
      "Apply evenly to affected areas, including undersides of leaves",
      "Allow plant to dry completely before normal care",
      "Monitor plant response over next 24-48 hours",
      "Record treatment date and plant response for future reference"
    ];

    if (isOrganic) {
      steps.splice(4, 0, "Ensure good air circulation around treated plants");
    } else {
      steps.splice(1, 0, "Put on all required protective equipment");
      steps.splice(-1, 0, "Keep area restricted until product dries completely");
    }

    return steps;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isOrganic ? 'bg-green-100' : 'bg-blue-100'}`}>
              {isOrganic ? (
                <Leaf className={`w-5 h-5 ${isOrganic ? 'text-green-600' : 'text-blue-600'}`} />
              ) : (
                <Beaker className={`w-5 h-5 ${isOrganic ? 'text-green-600' : 'text-blue-600'}`} />
              )}
            </div>
            Detailed Instructions: {treatment.name}
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              isOrganic 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {isOrganic ? 'Organic' : 'Chemical'}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Treatment Overview</h3>
            <p className="text-gray-600 text-sm">{treatment.description}</p>
            <div className="mt-3 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <p className="text-blue-800 text-sm font-medium">Application Method:</p>
              <p className="text-blue-700 text-sm">{treatment.application}</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-4 h-4 text-blue-500" />
                <h4 className="font-semibold text-gray-800">Preparation</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.preparation}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-orange-500" />
                <h4 className="font-semibold text-gray-800">Optimal Timing</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.timing}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-green-500" />
                <h4 className="font-semibold text-gray-800">Application Frequency</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.frequency}</p>
            </div>

            <div className="p-4 border border-amber-200 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Safety Precautions</h4>
              </div>
              <p className="text-amber-700 text-sm">{instructions.safety}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-purple-500" />
                <h4 className="font-semibold text-gray-800">Storage Guidelines</h4>
              </div>
              <p className="text-gray-600 text-sm">{instructions.storage}</p>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Step-by-Step Application
            </h4>
            <ol className="space-y-2">
              {getStepByStepApplication().map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Professional Tips</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Always read and follow the complete product label instructions</li>
              <li>• Test treatment on a small area first to check plant tolerance</li>
              <li>• Keep detailed records of treatments, dates, and plant response</li>
              <li>• Rotate between different treatment types to prevent resistance</li>
              <li>• Consider environmental factors (humidity, temperature, rainfall)</li>
              <li>• Consult local agricultural extension services for region-specific advice</li>
              {isOrganic && <li>• Combine with good cultural practices (proper spacing, sanitation)</li>}
              {!isOrganic && <li>• Follow pre-harvest interval guidelines strictly</li>}
            </ul>
          </div>

          <div className="flex justify-end gap-3">
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
