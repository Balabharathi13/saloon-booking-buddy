
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="salon-container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-salon-600 flex items-center">
              Saloon Master
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-salon-600 transition-colors">
              Home
            </Link>
            <Link to="/shops" className="text-gray-600 hover:text-salon-600 transition-colors">
              Find Salons
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-salon-600 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-salon-600 transition-colors">
              About
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="text-gray-600 hover:text-salon-600 transition-colors flex items-center"
                >
                  <User size={18} className="mr-1" /> 
                  {user?.name}
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-salon-600"
                >
                  <LogOut size={18} className="mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/auth', { state: { mode: 'login' } })}
                >
                  Login
                </Button>
                <Button 
                  onClick={() => navigate('/auth', { state: { mode: 'register' } })}
                  className="bg-salon-600 hover:bg-salon-700 text-white"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-salon-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link 
              to="/" 
              className="block py-2 text-gray-600 hover:text-salon-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shops" 
              className="block py-2 text-gray-600 hover:text-salon-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Salons
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-gray-600 hover:text-salon-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-600 hover:text-salon-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block py-2 text-gray-600 hover:text-salon-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start p-0 text-gray-600 hover:text-salon-600"
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/auth', { state: { mode: 'login' } });
                    setIsMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/auth', { state: { mode: 'register' } });
                    setIsMenuOpen(false);
                  }}
                  className="bg-salon-600 hover:bg-salon-700 text-white"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
