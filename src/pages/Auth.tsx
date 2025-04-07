
import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-mobile';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileLayout from '@/components/layout/MobileLayout';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="py-8 px-4">
          <div className="mb-6 text-center">
            <Link to="/" className="inline-block">
              <h1 className="text-2xl font-bold text-salon-600">Saloon Master</h1>
            </Link>
          </div>
          <div className="max-w-md mx-auto">
            <AuthForm />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="salon-container">
          <div className="max-w-md mx-auto">
            <div className="mb-6 text-center">
              <Link to="/" className="inline-block">
                <h1 className="text-2xl font-bold text-salon-600">Saloon Master</h1>
              </Link>
            </div>
            <AuthForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
