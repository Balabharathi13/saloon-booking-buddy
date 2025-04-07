
import React from 'react';
import { useLocation } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import MobileFooter from './MobileFooter';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
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
