
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const MobileFooter = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  
  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Explore', path: '/shops', icon: Search },
    { name: 'Bookings', path: '/dashboard', icon: Calendar },
    { name: 'Profile', path: isAuthenticated ? '/dashboard' : '/auth', icon: User },
  ];
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="grid grid-cols-4 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          
          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex flex-col items-center py-2 ${
                isActive ? 'text-salon-600' : 'text-gray-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default MobileFooter;
