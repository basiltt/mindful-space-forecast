
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-space flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-coral"></div>
              </div>
              <span className="font-display text-xl font-medium text-space">Spacer<span className="text-coral">.</span></span>
            </div>
            <p className="text-gray-500 mb-6">
              Transforming office space planning with data-driven insights and forecasting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coral/10 hover:text-coral transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coral/10 hover:text-coral transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95829 14.8821 3.29215C14.0247 3.62601 13.2884 4.22105 12.773 4.99079C12.2575 5.76053 11.9877 6.67055 12 7.6V8.6C10.2426 8.64378 8.50127 8.23542 6.93101 7.4069C5.36074 6.57837 4.01032 5.35713 3 3.9C3 3.9 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.6C20.9991 7.32001 20.9723 7.04091 20.92 6.77C21.9406 5.78374 22.6608 4.47977 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-space mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-space mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-space mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-coral transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Spacer. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-coral transition-colors">Terms</a>
            <a href="#" className="text-gray-500 text-sm hover:text-coral transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-coral transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
