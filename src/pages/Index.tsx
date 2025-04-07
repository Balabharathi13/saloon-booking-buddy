
import React from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileLayout from '@/components/layout/MobileLayout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ShopList from '@/components/shop/ShopList';

const Index = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  if (isMobile) {
    return (
      <MobileLayout>
        <div className="pt-2 pb-16">
          <Hero />
          <Features />
          <ShopList />
        </div>
      </MobileLayout>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ShopList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
