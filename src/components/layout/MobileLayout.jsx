
import React from 'react';
import { useLocation } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import MobileFooter from './MobileFooter';

const MobileLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {!isAuthPage && <MobileNavbar />}
      <main className="flex-grow">{children}</main>
      {!isAuthPage && <MobileFooter />}
    </div>
  );
};

export default MobileLayout;
