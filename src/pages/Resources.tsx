
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, BookOpen, Video, CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourceCard = ({ 
  icon: Icon, 
  title, 
  description,
  tag
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
    <div className="p-6">
      <div className="inline-block mb-4 bg-coral/10 p-2 rounded-md">
        <Icon className="text-coral" size={24} />
      </div>
      <div className="mb-4">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-600 mb-2">
          {tag}
        </span>
        <h3 className="text-xl font-display font-medium text-space">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="ghost" className="text-coral p-0 hover:text-coral/80 hover:bg-transparent">
        Read more <ArrowRight size={16} className="ml-1" />
      </Button>
    </div>
  </div>
);

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-space mb-4">
              Resources<span className="text-coral">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guides, case studies, and tools to help you optimize your workspace.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="outline" className="rounded-full border-space/20">All resources</Button>
            <Button variant="outline" className="rounded-full border-space/20">Guides</Button>
            <Button variant="outline" className="rounded-full border-space/20">Case Studies</Button>
            <Button variant="outline" className="rounded-full border-space/20">Webinars</Button>
            <Button variant="outline" className="rounded-full border-space/20">Tools</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ResourceCard 
              icon={FileText}
              title="The Future of Hybrid Workspaces" 
              description="Learn how to design and manage workspaces in the hybrid work era."
              tag="Guide"
            />
            
            <ResourceCard 
              icon={BookOpen}
              title="Case Study: Global Tech Company" 
              description="How a tech company reduced costs by 30% with space optimization."
              tag="Case Study"
            />
            
            <ResourceCard 
              icon={Video}
              title="Webinar: Space Utilization Analytics" 
              description="Understanding metrics that matter for workspace efficiency."
              tag="Webinar"
            />
            
            <ResourceCard 
              icon={CalendarDays}
              title="Planning Your Return to Office Strategy" 
              description="A comprehensive guide to managing the post-pandemic workplace."
              tag="Guide"
            />
            
            <ResourceCard 
              icon={FileText}
              title="Space Planning Checklist" 
              description="Essential steps for successful office space planning and optimization."
              tag="Tool"
            />
            
            <ResourceCard 
              icon={Video}
              title="On-Demand: Workplace Design Trends" 
              description="The latest trends in workplace design and space planning."
              tag="Webinar"
            />
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-space mb-4">
                  Subscribe to our newsletter
                </h2>
                <p className="text-gray-600 mb-6">
                  Get the latest insights, tips, and resources delivered to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/50"
                  />
                  <Button className="rounded-lg bg-space text-white hover:bg-space/90">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-coral/20 rounded-full"></div>
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-coral/10 rounded-full"></div>
                  <div className="bg-gray-100 rounded-lg p-8 relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-coral/10 p-2 rounded-md">
                        <FileText className="text-coral" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-space">Weekly insights</h3>
                        <p className="text-sm text-gray-600">
                          Expert analysis on workspace trends and innovations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-coral/10 p-2 rounded-md">
                        <CalendarDays className="text-coral" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-space">Exclusive invites</h3>
                        <p className="text-sm text-gray-600">
                          First access to our webinars and events.
                        </p>
                      </div>
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

export default Resources;
