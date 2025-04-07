
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
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
