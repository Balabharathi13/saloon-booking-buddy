
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const MobileNavbar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-salon-600">Saloon Master</span>
        </Link>
        
        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <Link to="/dashboard" className="text-sm font-medium text-salon-600 hover:text-salon-700">
              Dashboard
            </Link>
          ) : (
            <Link to="/auth" className="text-sm font-medium text-salon-600 hover:text-salon-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;
