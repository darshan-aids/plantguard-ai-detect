
import { Leaf, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                PlantGuard
              </h1>
              <p className="text-xs text-gray-500">AI Plant Doctor</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">
              Contact
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="border-green-200 text-green-600 hover:bg-green-50"
            >
              Sign In
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
