
import { useState } from "react";
import { Leaf, Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                PlantGuard
              </h1>
              <p className="text-xs text-gray-500">AI Plant Doctor</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                  <User className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </div>
                <Button 
                  onClick={handleSignOut}
                  variant="outline" 
                  size="sm"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => setAuthModalOpen(true)}
                variant="outline" 
                size="sm"
                className="border-green-200 text-green-600 hover:bg-green-50"
              >
                Sign In
              </Button>
            )}
          </nav>

          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-100">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors duration-200 font-medium ${
                  isActive('/') ? 'text-green-600' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors duration-200 font-medium ${
                  isActive('/about') ? 'text-green-600' : 'text-gray-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors duration-200 font-medium ${
                  isActive('/contact') ? 'text-green-600' : 'text-gray-600'
                }`}
              >
                Contact
              </Link>
              
              {user ? (
                <div className="space-y-3 pt-3 border-t border-green-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-700 font-medium">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                  <Button 
                    onClick={handleSignOut}
                    variant="outline" 
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50 w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => {
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  variant="outline" 
                  size="sm"
                  className="border-green-200 text-green-600 hover:bg-green-50 w-full mt-3"
                >
                  Sign In
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
