
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounter = () => {
    const countElement = counterRef.current;
    if (!countElement) return;
    
    const countTo = 2.6;
    let count = 0;
    const step = countTo / 60; // 60 frames for smooth animation
    
    const updateCount = () => {
      count += step;
      if (count < countTo) {
        countElement.textContent = count.toFixed(1);
        requestAnimationFrame(updateCount);
      } else {
        countElement.textContent = countTo.toString();
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 z-10 mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-space leading-tight mb-6">
              Space planning
              <span className="block">made easy<span className="text-coral">.</span></span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Forecast your organization's office space needs with precision. Transform location data into actionable workplace strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#get-started" className="btn-primary flex items-center justify-center gap-2">
                Get started
                <ArrowRight size={18} />
              </a>
              <a href="#demo" className="btn-outline">
                Request demo
              </a>
            </div>
            
            <div className="flex items-end" ref={counterRef}>
              <div className="mr-2">
                <span className="text-7xl md:text-9xl font-display font-semibold text-space leading-none">2.6</span>
              </div>
              <div className="mb-4">
                <span className="text-4xl md:text-6xl font-display text-space">m</span>
                <p className="text-gray-500 mt-2">sq. ft. optimized</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="glass-panel rounded-3xl p-6 shadow-xl">
                <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-coral animate-pulse-soft"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white/90"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                  </div>
                  
                  <div className="absolute bottom-12 flex gap-2">
                    <div className="h-10 w-16 rounded-md bg-blue-300"></div>
                    <div className="h-10 w-16 rounded-md bg-purple-400"></div>
                    <div className="h-10 w-32 rounded-md bg-coral"></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-md bg-gray-200"></div>
                    <div className="h-6 w-6 rounded-md bg-gray-300"></div>
                  </div>
                  <div className="h-6 w-12 rounded-full bg-green-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="animate-float"
            >
              <div className="relative">
                <svg width="140" height="140" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFEDE9" d="M39.9,-51.2C54.2,-41.9,69.7,-33.1,75.8,-19.5C81.9,-5.8,78.5,12.7,70.3,28.1C62.1,43.6,49,56,34.1,62.5C19.2,69,2.4,69.4,-14.6,66.7C-31.7,64,-49,58.1,-60.4,45.7C-71.8,33.3,-77.3,14.4,-73.4,-1.9C-69.5,-18.2,-56.1,-31.9,-42.7,-41.7C-29.3,-51.5,-14.7,-57.3,-0.7,-56.4C13.3,-55.6,25.6,-60.6,39.9,-51.2Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-coral font-display font-semibold text-xl">3D Hand</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center flex-col opacity-60 hover:opacity-100 transition-opacity duration-300">
        <div className="text-sm text-gray-500 mb-2">Scroll down</div>
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
