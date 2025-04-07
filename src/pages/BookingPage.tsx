
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/booking/BookingForm';

const BookingPage = () => {
  const { shopId } = useParams<{ shopId: string }>();
  
  // Mock shop data - in a real app, this would be fetched based on shopId
  const shopName = "Elegant Cuts Salon";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="salon-container max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="heading-md mb-2">Book an Appointment</h1>
            <p className="text-gray-600">Select your services and preferred time at {shopName}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <BookingForm shopId={shopId || '1'} shopName={shopName} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
