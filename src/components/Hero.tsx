'use client';

import { ArrowRight, Shield, Truck, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { value: '1M+', label: 'Happy Customers', icon: '👤' },
    { value: '200+', label: 'Top Brands', icon: '🏷️' },
    { value: '24/7', label: 'Tech Support', icon: '🛠️' },
    { value: '3', label: 'Countries', icon: '🌍' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-10 pt-10 relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundPosition: 'center 50%',
          }}
        />
        
        {/* Dark Overlay Layer (to make content visible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/50" />
        
        {/* Subtle Orange Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EA591D]/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-5 ">
            {/* Badge */}
            <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/20 to-transparent px-3 py-1.5 rounded-full border border-[#EA591D]/30 backdrop-blur-sm">
              <Sparkles size={12} className="text-[#EA591D]" />
              <span className="text-[#EA591D] font-medium text-xs">Trusted Since 2019</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                <span className="text-white">Premium Home</span>
                <span className="block text-[#EA591D] mt-1">Appliances</span>
              </h1>
              
              <p className="text-gray-200 text-sm max-w-md mx-auto lg:mx-0 leading-relaxed">
                World-class appliances with unbeatable prices. 
                24/7 support & fast delivery across Egypt & Saudi Arabia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start">
              <a
                href="https://your-ecommerce-site.com"
                target="_blank"
                className="group relative bg-gradient-to-r from-[#EA591D] to-[#d14c18] text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#EA591D]/20 transition-all duration-300 font-medium text-sm flex items-center justify-center space-x-1.5 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={14} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#EA591D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href="/brands"
                className="border border-[#EA591D]/40 text-[#EA591D] px-4 py-2.5 rounded-lg hover:bg-[#EA591D]/10 transition-all duration-300 font-medium text-sm text-center cursor-pointer backdrop-blur-sm"
              >
                Explore Brands
              </a>
            </div>

            {/* Features - Centered Text Below Icons */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-sm mx-auto lg:mx-0">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-[#EA591D]/20 to-transparent backdrop-blur-sm">
                    <Truck className="text-[#EA591D]" size={16} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-xs mb-0.5">Fast Delivery</div>
                  <div className="text-gray-300 text-xs">24-48h</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-[#EA591D]/20 to-transparent backdrop-blur-sm">
                    <Shield className="text-[#EA591D]" size={16} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-xs mb-0.5">Warranty</div>
                  <div className="text-gray-300 text-xs">2-5 Years</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-[#EA591D]/20 to-transparent backdrop-blur-sm">
                    <Clock className="text-[#EA591D]" size={16} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white font-medium text-xs mb-0.5">Support</div>
                  <div className="text-gray-300 text-xs">24/7</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="space-y-5">
            {/* Rotating Stats Display */}
            <div className="bg-gradient-to-br from-black/40 to-black/10 backdrop-blur-md p-5 rounded-xl  border-[#EA591D]/20 shadow-xl">
              <div className="text-center space-y-3">
                <h3 className="text-white font-semibold text-sm">Our Impact</h3>
                
                {/* Animated Stat */}
                <div className="h-20 flex items-center justify-center">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`absolute transition-all duration-500 ${
                        index === currentStat
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className="text-center space-y-1">
                        <div className="text-3xl md:text-2xl font-bold text-[#EA591D] flex items-center justify-center gap-2">
                          {/* <span>{stat.icon}</span> */}
                          <span>{stat.value}</span>
                        </div>
                        <div className="text-white text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Progress Dots */}
                <div className="flex justify-center space-x-1.5">
                  {stats.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStat(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                        index === currentStat
                          ? 'bg-[#EA591D] w-4'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Apps Card */}
            <div className="bg-gradient-to-br from-black/40 to-black/10 backdrop-blur-md p-4 rounded-xl  border-[#EA591D]/20 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="bg-gradient-to-br from-[#EA591D] to-[#f97316] p-2 rounded-lg">
                    <ChevronRight className="text-white" size={14} />
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">Mobile Apps</div>
                    <div className="text-gray-300 text-xs">iOS & Android</div>
                  </div>
                </div>
                
                <div className="text-right">
                  {/* <div className="text-white font-medium text-xs">AI Assistant</div> */}
                  <div className="text-[#EA591D] text-xs font-medium">Live Now</div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="mt-3">
                <div className="flex justify-between text-gray-300 text-xs mb-1">
                  <span>User Adoption</span>
                  <span>85%</span>
                </div>
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#EA591D] to-[#f97316] rounded-full transition-all duration-1000"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm p-3 rounded-lg  border-[#EA591D]/15 text-center hover:border-[#EA591D]/30 transition-colors cursor-pointer">
                <div className="text-[#EA591D] font-bold text-lg">5+</div>
                <div className="text-white text-xs">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm p-3 rounded-lg  border-[#EA591D]/15 text-center hover:border-[#EA591D]/30 transition-colors cursor-pointer">
                <div className="text-[#EA591D] font-bold text-lg">99%</div>
                <div className="text-white text-xs">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Fixed Position */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-5 h-8 border border-[#EA591D]/40 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-[#EA591D] rounded-full animate-bounce mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;