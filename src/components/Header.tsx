
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-space flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-coral"></div>
          </div>
          <span className="font-display text-xl font-medium text-space">Spacer<span className="text-coral">.</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-12">
          <a href="#features" className="hero-link">Features</a>
          <a href="#pricing" className="hero-link">Pricing</a>
          <a href="#about" className="hero-link">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="#login" className="hidden md:inline-block btn-outline">Log in</a>
          <a href="#signup" className="btn-primary">Sign up</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
