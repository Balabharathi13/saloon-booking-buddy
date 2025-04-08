
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-mobile';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileLayout from '@/components/layout/MobileLayout';
import OwnerDashboard from '@/components/dashboard/OwnerDashboard';
import CustomerDashboard from '@/components/dashboard/CustomerDashboard';
import { useAuth } from '@/context/AuthContext';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-salon-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  
  if (isMobile) {
    return (
      <MobileLayout>
        <div className="px-4 py-6 pb-20">
          <div className="mb-6">
            <h1 className="text-xl font-bold">Welcome, {user?.name}</h1>
            <p className="text-gray-600 text-sm">
              {user?.role === 'shop_owner' 
                ? 'Manage your salon and appointments' 
                : 'Manage your appointments and bookings'}
            </p>
          </div>
          
          {user?.role === 'shop_owner' ? <OwnerDashboard /> : <CustomerDashboard />}
        </div>
      </MobileLayout>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="salon-container">
          <div className="mb-8">
            <h1 className="heading-md">Welcome, {user?.name}</h1>
            <p className="text-gray-600">
              {user?.role === 'shop_owner' 
                ? 'Manage your salon and appointments' 
                : 'Manage your appointments and bookings'}
            </p>
          </div>
          
          {user?.role === 'shop_owner' ? <OwnerDashboard /> : <CustomerDashboard />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
