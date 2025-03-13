
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, Users, Building2, LayoutGrid, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WorkspaceAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-space mb-4">
              Workspace Analysis<span className="text-coral">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimize your workspace with data-driven insights and intelligent space planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 bg-coral/10 w-12 h-12 rounded-full flex items-center justify-center">
                <LayoutGrid className="text-coral" size={24} />
              </div>
              <h3 className="text-xl font-display font-medium text-space mb-2">Floor Planning</h3>
              <p className="text-gray-600 mb-4">Create intelligent floor plans based on your team's needs and workspace requirements.</p>
              <Button variant="outline" className="w-full rounded-lg border-coral/20 text-coral hover:bg-coral/5">
                Learn more
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 bg-coral/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Users className="text-coral" size={24} />
              </div>
              <h3 className="text-xl font-display font-medium text-space mb-2">Occupancy Analysis</h3>
              <p className="text-gray-600 mb-4">Track and analyze how your spaces are being utilized to make informed decisions.</p>
              <Button variant="outline" className="w-full rounded-lg border-coral/20 text-coral hover:bg-coral/5">
                Learn more
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 bg-coral/10 w-12 h-12 rounded-full flex items-center justify-center">
                <BarChart3 className="text-coral" size={24} />
              </div>
              <h3 className="text-xl font-display font-medium text-space mb-2">Space Utilization</h3>
              <p className="text-gray-600 mb-4">Get insights on how efficiently your workspace is being used and identify optimization opportunities.</p>
              <Button variant="outline" className="w-full rounded-lg border-coral/20 text-coral hover:bg-coral/5">
                Learn more
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
            <h2 className="text-2xl font-display font-medium text-space mb-6">Start Your Workspace Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-coral/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-coral font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-space">Upload your floor plan</h4>
                      <p className="text-gray-600">Start by uploading your existing floor plan or create a new one from scratch.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-coral/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-coral font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-space">Add your team data</h4>
                      <p className="text-gray-600">Input information about your teams, departments, and their space requirements.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-coral/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-coral font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-space">Get actionable insights</h4>
                      <p className="text-gray-600">Receive detailed analysis and recommendations for optimizing your workspace.</p>
                    </div>
                  </li>
                </ol>
                
                <Button className="mt-8 rounded-full bg-space text-white px-6 py-3 hover:bg-space/90">
                  Start your analysis
                </Button>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <Workflow size={48} className="text-coral mx-auto mb-4" />
                  <p className="text-gray-600">Interactive workspace planner coming soon</p>
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

export default WorkspaceAnalysis;
