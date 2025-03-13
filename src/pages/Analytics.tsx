
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, PieChart, LineChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  LineChart as RechartsLineChart, 
  Line 
} from 'recharts';

const data = [
  { name: 'Jan', utilization: 65, occupancy: 55 },
  { name: 'Feb', utilization: 59, occupancy: 49 },
  { name: 'Mar', utilization: 80, occupancy: 72 },
  { name: 'Apr', utilization: 81, occupancy: 78 },
  { name: 'May', utilization: 56, occupancy: 48 },
  { name: 'Jun', utilization: 55, occupancy: 50 },
  { name: 'Jul', utilization: 40, occupancy: 37 },
];

const trendData = [
  { name: 'Jan', hybrid: 40, fulltime: 60 },
  { name: 'Feb', hybrid: 42, fulltime: 58 },
  { name: 'Mar', hybrid: 45, fulltime: 55 },
  { name: 'Apr', hybrid: 50, fulltime: 50 },
  { name: 'May', hybrid: 55, fulltime: 45 },
  { name: 'Jun', hybrid: 60, fulltime: 40 },
  { name: 'Jul', hybrid: 65, fulltime: 35 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-space mb-4">
              Workspace Analytics<span className="text-coral">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data-driven insights to optimize your workspace and improve efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Space Utilization</p>
                  <h3 className="text-3xl font-medium text-space">78%</h3>
                </div>
                <div className="bg-green-100 p-1 rounded text-green-700 text-xs font-medium">
                  +12%
                </div>
              </div>
              <div className="h-1 bg-gray-100 rounded-full mb-2">
                <div className="h-full w-[78%] bg-coral rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500">vs. industry avg: 65%</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Cost per Desk</p>
                  <h3 className="text-3xl font-medium text-space">$285</h3>
                </div>
                <div className="bg-green-100 p-1 rounded text-green-700 text-xs font-medium">
                  -8%
                </div>
              </div>
              <div className="h-1 bg-gray-100 rounded-full mb-2">
                <div className="h-full w-[45%] bg-coral rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500">vs. industry avg: $325</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Meeting Room Usage</p>
                  <h3 className="text-3xl font-medium text-space">62%</h3>
                </div>
                <div className="bg-red-100 p-1 rounded text-red-700 text-xs font-medium">
                  -5%
                </div>
              </div>
              <div className="h-1 bg-gray-100 rounded-full mb-2">
                <div className="h-full w-[62%] bg-coral rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500">vs. industry avg: 70%</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Employees In-Office</p>
                  <h3 className="text-3xl font-medium text-space">45%</h3>
                </div>
                <div className="bg-blue-100 p-1 rounded text-blue-700 text-xs font-medium">
                  +2%
                </div>
              </div>
              <div className="h-1 bg-gray-100 rounded-full mb-2">
                <div className="h-full w-[45%] bg-coral rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500">vs. last month: 43%</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-medium text-space">Space Utilization vs Occupancy</h3>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-coral rounded-sm"></div>
                    <span className="text-xs text-gray-500">Utilization</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                    <span className="text-xs text-gray-500">Occupancy</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="utilization" fill="#FF8E71" />
                    <Bar dataKey="occupancy" fill="#90CDF4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-medium text-space">Workplace Attendance Trends</h3>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-coral rounded-sm"></div>
                    <span className="text-xs text-gray-500">Hybrid</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                    <span className="text-xs text-gray-500">Full-time</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="hybrid" stroke="#FF8E71" />
                    <Line type="monotone" dataKey="fulltime" stroke="#90CDF4" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="bg-space text-white p-8 rounded-xl mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-medium mb-2">Get detailed analytics for your workspace</h2>
              <p className="text-white/80 max-w-xl mx-auto">
                Unlock the full potential of your workspace with our comprehensive analytics platform.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button className="rounded-full bg-coral text-white px-6 py-3 hover:bg-coral/90">
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;
