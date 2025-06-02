
import { useRef, useState } from "react";
import { Camera, Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <div
        className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          isDragging 
            ? 'border-green-400 bg-green-50' 
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
            <ImageIcon className="w-16 h-16 text-green-500" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Upload Plant Image
            </h3>
            <p className="text-gray-600 max-w-md">
              Take a clear photo of a plant leaf or upload an existing image. 
              Make sure the leaf is well-lit and in focus for best results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={triggerFileInput}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Upload className="w-5 h-5 mr-2" />
              Choose File
            </Button>
            
            <Button
              onClick={triggerFileInput}
              variant="outline"
              size="lg"
              className="border-green-200 text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold rounded-xl"
            >
              <Camera className="w-5 h-5 mr-2" />
              Take Photo
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Supported formats: JPG, PNG, WebP (Max 10MB)
          </p>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        capture="environment"
      />
    </div>
  );
};

export default ImageUpload;
