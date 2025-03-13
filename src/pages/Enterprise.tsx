
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Building, Users, Workflow, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnterpriseBenefit = ({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle2 className="text-coral" size={20} />
    </div>
    <div>
      <h3 className="font-medium text-space mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-space mb-4">
              Enterprise Solutions<span className="text-coral">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive workspace management tailored for large organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-display font-medium text-space mb-6">Built for scale</h2>
              <p className="text-gray-600 mb-8">
                Our enterprise solutions are designed to meet the unique challenges of large organizations. 
                With powerful features, seamless integrations, and dedicated support, we help you optimize 
                your workspace across multiple locations.
              </p>
              
              <div className="space-y-6 mb-8">
                <EnterpriseBenefit 
                  title="Global workspace management" 
                  description="Manage and optimize workspaces across multiple locations with centralized control."
                />
                
                <EnterpriseBenefit 
                  title="Advanced security and compliance" 
                  description="Enterprise-grade security features and compliance with industry regulations."
                />
                
                <EnterpriseBenefit 
                  title="Customizable reporting" 
                  description="Create custom reports tailored to your organization's specific needs and KPIs."
                />
                
                <EnterpriseBenefit 
                  title="Dedicated support team" 
                  description="Get priority support from our dedicated enterprise customer success team."
                />
              </div>
              
              <Button className="rounded-full bg-space text-white px-6 py-3 hover:bg-space/90">
                Contact sales
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-display font-medium text-space mb-2">Enterprise features</h3>
                <p className="text-gray-600">
                  Powerful features designed specifically for enterprise needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="mb-3 bg-coral/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Shield className="text-coral" size={20} />
                  </div>
                  <h4 className="font-medium text-space mb-1">Advanced security</h4>
                  <p className="text-sm text-gray-600">
                    SSO, role-based access control, and data encryption.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="mb-3 bg-coral/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Building className="text-coral" size={20} />
                  </div>
                  <h4 className="font-medium text-space mb-1">Multi-location</h4>
                  <p className="text-sm text-gray-600">
                    Manage multiple buildings and offices from one platform.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="mb-3 bg-coral/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Users className="text-coral" size={20} />
                  </div>
                  <h4 className="font-medium text-space mb-1">Team management</h4>
                  <p className="text-sm text-gray-600">
                    Organize and manage teams across departments and locations.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="mb-3 bg-coral/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Workflow className="text-coral" size={20} />
                  </div>
                  <h4 className="font-medium text-space mb-1">API access</h4>
                  <p className="text-sm text-gray-600">
                    Integrate with your existing systems and workflows.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="bg-coral/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-coral font-medium">99.9%</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-space">Enterprise SLA</h4>
                    <p className="text-sm text-gray-600">
                      We guarantee 99.9% uptime for enterprise customers with our comprehensive SLA.
                    </p>
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

export default Enterprise;
