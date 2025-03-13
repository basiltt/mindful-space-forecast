import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, Users, LineChart, CalendarDays, LucideIcon, LayoutGrid, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
    <div className="mb-4 bg-coral/10 w-12 h-12 rounded-full flex items-center justify-center">
      <Icon className="text-coral" size={24} />
    </div>
    <h3 className="text-xl font-display font-medium text-space mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-space mb-4">
              Our Solutions<span className="text-coral">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive space planning and management solutions for modern organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SolutionCard 
              icon={LayoutGrid} 
              title="Space Planning" 
              description="Create optimal floor plans based on your organization's unique needs and requirements."
            />
            
            <SolutionCard 
              icon={Users} 
              title="Occupancy Management" 
              description="Track and manage workspace utilization with real-time occupancy data."
            />
            
            <SolutionCard 
              icon={Building} 
              title="Facility Management" 
              description="Streamline facility operations and maintenance for improved efficiency."
            />
            
            <SolutionCard 
              icon={LineChart} 
              title="Analytics & Reporting" 
              description="Gain actionable insights with comprehensive analytics and customizable reports."
            />
            
            <SolutionCard 
              icon={CalendarDays} 
              title="Desk Booking" 
              description="Enable flexible work arrangements with intuitive desk and meeting room booking."
            />
            
            <SolutionCard 
              icon={Workflow} 
              title="Workplace Strategy" 
              description="Develop data-driven workplace strategies aligned with your organizational goals."
            />
          </div>
          
          <div className="bg-space text-white p-8 md:p-12 rounded-xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-medium mb-4">Ready to transform your workspace?</h2>
                <p className="mb-6 text-white/80">
                  Join thousands of organizations that have optimized their workspaces with our solutions.
                </p>
                <Button className="rounded-full bg-coral text-white px-6 py-3 hover:bg-coral/90">
                  Get started
                </Button>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex justify-between mb-4">
                  <div className="font-medium text-xl">Success metrics</div>
                  <div className="text-coral font-display">+28%</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Space utilization</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-coral w-[78%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Employee satisfaction</span>
                      <span>92%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-coral w-[92%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cost savings</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-coral w-[65%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
