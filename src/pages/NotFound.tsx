
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-salon-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
          <div className="space-y-4">
            <Button
              className="bg-salon-600 hover:bg-salon-700"
              asChild
            >
              <Link to="/">Return to Home</Link>
            </Button>
            <div>
              <p className="text-gray-500 text-sm">
                Looking for salon services? <Link to="/shops" className="text-salon-600 hover:underline">Browse salons</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
