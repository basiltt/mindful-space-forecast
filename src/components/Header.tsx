
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Users, Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="hero-link flex items-center gap-2">
            <LayoutGrid size={16} />
            <span>Solutions</span>
          </a>
          <a href="#enterprise" className="hero-link flex items-center gap-2">
            <Users size={16} />
            <span>Enterprise</span>
          </a>
          <a href="#analytics" className="hero-link">Analytics</a>
          <a href="#resources" className="hero-link">Resources</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-full px-5" asChild>
            <a href="#login">Log in</a>
          </Button>
          <Button className="rounded-full bg-space text-white hover:bg-space/90 px-5" asChild>
            <a href="#demo">Request demo</a>
          </Button>
        </div>

        <button 
          className="md:hidden text-space" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav className="flex flex-col space-y-4">
            <a href="#solutions" className="flex items-center gap-2 py-2">
              <LayoutGrid size={16} />
              <span>Solutions</span>
            </a>
            <a href="#enterprise" className="flex items-center gap-2 py-2">
              <Users size={16} />
              <span>Enterprise</span>
            </a>
            <a href="#analytics" className="py-2">Analytics</a>
            <a href="#resources" className="py-2">Resources</a>
            <hr className="border-gray-200" />
            <a href="#login" className="py-2">Log in</a>
            <Button className="rounded-full bg-space text-white hover:bg-space/90 w-full" asChild>
              <a href="#demo">Request demo</a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
