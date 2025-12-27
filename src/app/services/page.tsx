// app/services/page.tsx
'use client';

import { Truck, Shield, Clock, Wrench, CheckCircle, Package, Headphones, RefreshCw, Zap, ChevronRight, Star, Users } from 'lucide-react';
import { useState } from 'react';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Truck size={16} />,
      title: "Fast Delivery",
      description: "24-48h across Egypt & KSA",
      features: ["98.5% on-time", "Same-day in cities", "Live tracking", "Free installation"],
      stats: "98.5% on-time",
      color: "from-blue-500/20 to-black-500/10"
    },
    {
      icon: <Shield size={16} />,
      title: "Extended Warranty",
      description: "2-5 years comprehensive",
      features: ["2M+ covered", "Free repairs", "Genuine parts", "Annual checks"],
      stats: "2M+ covered",
      color: "from-blue-500/20 to-black-500/10"
    },
    {
      icon: <Headphones size={16} />,
      title: "24/7 Support",
      description: "Always available",
      features: ["15min response", "Phone & chat", "On-site visits", "Remote help"],
      stats: "15min response",
      color: "from-blue-500/20 to-black-500/10"
    },
    {
      icon: <Wrench size={16} />,
      title: "Quick Installation",
      description: "Within 24 hours",
      features: ["50K+ installed", "Certified experts", "Safety checks", "User training"],
      stats: "50K+ installed",
      color: "from-blue-500/20 to-black-500/10"
    },
    {
      icon: <CheckCircle size={16} />,
      title: "Quality Assurance",
      description: "100% genuine products",
      features: ["0% defects", "Original packaging", "Quality checks", "Performance tests"],
      stats: "0% defects",
      color: "from-blue-500/20 to-black-500/10"
    },
    {
      icon: <RefreshCw size={16} />,
      title: "Easy Returns",
      description: "30-day policy",
      features: ["24h processing", "Free pick-up", "Instant refund", "Quick replacement"],
      stats: "24h processing",
      color: "from-blue-500/20 to-black-500/10"
    }
  ];

  const process = [
    { step: "1", title: "Choose Service", desc: "Select from premium offerings" },
    { step: "2", title: "Schedule", desc: "Pick convenient time slot" },
    { step: "3", title: "Expert Service", desc: "Certified technicians" },
    { step: "4", title: "Quality Check", desc: "Satisfaction guarantee" }
  ];

  const stats = [
    { value: "99.2%", label: "Satisfaction", icon: <Star size={12} /> },
    { value: "15min", label: "Response Time", icon: <Clock size={12} /> },
    { value: "2M+", label: "Services Done", icon: <Users size={12} /> }
  ];

  return (
    <div className="pt-25 pb-12 px-4 bg-gradient-to-t from-[#050816] to-[#0b1024]">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent px-3 py-1 rounded-full border border-[#EA591D]/20 mb-3">
            <Zap size={12} className="text-[#EA591D]" />
            <span className="text-[#EA591D] text-xs font-medium">Premium Services</span>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">Our Services</h1>
          <p className="text-gray-300 text-sm max-w-lg mx-auto">
            Complete solutions with exceptional quality for all your appliance needs
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border border-[#EA591D]/10 text-center"
            >
              <div className="flex items-center justify-center space-x-1 mb-1">
                <div className="text-[#EA591D]">
                  {stat.icon}
                </div>
                <div className="text-white font-bold text-sm">{stat.value}</div>
              </div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${service.color} p-4 rounded-xl border border-[#EA591D]/10 hover:border-[#EA591D]/20 transition-all duration-300 cursor-pointer`}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="flex items-start space-x-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-[#EA591D] text-xs font-medium">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                {service.features.slice(0, expandedService === index ? 4 : 2).map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={10} />
                    <span className="text-gray-200 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-[#EA591D]/10">
                <div className="text-white font-bold text-xs">{service.stats}</div>
                <button className="text-gray-400 hover:text-[#EA591D] transition-colors">
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {process.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border border-[#EA591D]/10 text-center"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">{item.step}</span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-300 text-[10px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0d1229] via-[#1a2138] to-[#0d1229] rounded-xl p-5 border border-[#EA591D]/15 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Need Assistance?</h3>
          <p className="text-gray-300 text-xs mb-4 max-w-sm mx-auto">
            Our support team is available 24/7 for all service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button className="inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-[#EA591D] to-[#f97316] hover:from-[#f97316] hover:to-[#EA591D] px-4 py-2 rounded-lg text-white text-xs font-medium transition-all duration-300">
              <Headphones size={12} />
              <span>Contact Support</span>
            </button>
            <button className="inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent hover:from-[#EA591D]/20 hover:to-[#f97316]/10 px-4 py-2 rounded-lg border border-[#EA591D]/20 hover:border-[#EA591D]/30 text-white text-xs font-medium transition-all duration-300">
              <Clock size={12} />
              <span>Schedule Service</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;