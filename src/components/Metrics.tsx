
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    { label: 'Materials', value: '16' },
    { label: 'Objects', value: '12', highlighted: true },
    { label: 'Lights', value: '14' },
    { label: 'Textures', value: '17' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-space">
                Data-driven<br />decisions<span className="text-coral">.</span>
              </h2>
              <p className="text-xl text-gray-600">
                Spacer uses advanced algorithms to analyze your current space utilization and forecast future needs with precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className={`metric-item ${metric.highlighted ? 'border-coral/30 shadow-sm' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-600">{metric.label}</span>
                  <span className={`text-xl font-semibold ${metric.highlighted ? 'text-coral' : 'text-space'} w-10 h-10 flex items-center justify-center rounded-full ${metric.highlighted ? 'bg-coral/10' : 'bg-gray-100'}`}>{metric.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a href="#discover" className="inline-flex items-center text-space font-medium group">
                <span className="mr-2 group-hover:mr-3 transition-all">Discover more</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel rounded-3xl p-8 shadow-lg">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-6 overflow-hidden">
                <div className="relative w-full h-full p-6">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40%] h-[80%] bg-gray-200 rounded-r-2xl"></div>
                  
                  <div className="absolute right-6 top-6 bottom-6 w-[45%] bg-white rounded-2xl shadow-sm p-4">
                    <div className="w-full h-4 bg-coral/20 rounded-full mb-3"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded-full mb-3"></div>
                    <div className="w-5/6 h-4 bg-gray-200 rounded-full mb-8"></div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-coral/30 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-coral"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-blue-300"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-purple-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium text-space">Space Forecast</h3>
                  <p className="text-gray-500">Optimize office layouts</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-coral/10 flex items-center justify-center">
                  <ArrowRight size={18} className="text-coral" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
