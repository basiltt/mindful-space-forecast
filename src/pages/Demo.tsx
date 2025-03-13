
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Calendar, Building, Users, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const Feature = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 size={18} className="text-coral flex-shrink-0" />
    <span className="text-gray-600">{children}</span>
  </div>
);

const Demo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [employees, setEmployees] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Demo request submitted!",
        description: "Our team will contact you within 24 hours.",
      });
      setLoading(false);
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setEmployees('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-space mb-4">
              Book a Demo<span className="text-coral">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our workspace planning solutions can transform your office.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-medium text-space mb-6">
                Request a personalized demo
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="mb-1 block text-sm font-medium text-space">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="mb-1 block text-sm font-medium text-space">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="company" className="mb-1 block text-sm font-medium text-space">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="mb-1 block text-sm font-medium text-space">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="employees" className="mb-1 block text-sm font-medium text-space">
                    Number of Employees
                  </Label>
                  <Input
                    id="employees"
                    type="text"
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                    placeholder="How many employees?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="mb-1 block text-sm font-medium text-space">
                    Message (Optional)
                  </Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your specific needs"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral/30 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="rounded-full bg-space text-white w-full py-3 hover:bg-space/90"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Request Demo'}
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-space text-white p-8 rounded-xl mb-8">
                <h3 className="text-xl font-display font-medium mb-4">
                  What to expect in your demo
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-coral flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Personalized walkthrough</h4>
                      <p className="text-white/80 text-sm">
                        A tailored demonstration of features relevant to your needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building size={20} className="text-coral flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Space planning insights</h4>
                      <p className="text-white/80 text-sm">
                        Expert tips on optimizing your specific workspace requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-coral flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Q&A with our experts</h4>
                      <p className="text-white/80 text-sm">
                        Get answers to all your questions from our specialists.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="h-px bg-white/20 my-6"></div>
                
                <div className="text-center">
                  <p className="text-white/80 mb-4">Prefer to talk now?</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Phone size={16} className="text-coral" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail size={16} className="text-coral" />
                      <span>sales@spacer.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-medium text-space mb-4">Why businesses choose Spacer</h3>
                <div className="space-y-3 mb-6">
                  <Feature>Reduce real estate costs by up to 30%</Feature>
                  <Feature>Optimize workspace utilization</Feature>
                  <Feature>Improve employee satisfaction</Feature>
                  <Feature>Data-driven space planning decisions</Feature>
                  <Feature>Enterprise-grade security</Feature>
                </div>
                <div className="text-sm text-gray-500 italic">
                  "Spacer transformed our office planning approach, resulting in significant cost savings and improved employee satisfaction."
                </div>
                <div className="mt-2 text-sm font-medium text-space">
                  - Sarah Johnson, Facilities Director
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

export default Demo;
