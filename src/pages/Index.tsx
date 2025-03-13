
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on first load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Metrics />
      <Footer />
    </div>
  );
};

export default Index;
