'use client';

import { useState } from 'react';
import { Smartphone, Cpu, Zap, Globe, CheckCircle, Users, Clock, Star } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Smartphone className="text-[#EA591D]" size={14} />,
      title: "Mobile Apps",
      description: "iOS & Android apps",
      details: [
        "Push notifications",
        "AR preview",
        "One-click ordering",
        "Offline browsing"
      ],
      stats: { users: "500K+", rating: "4.8" }
    },
    {
      icon: <Cpu className="text-[#EA591D]" size={14} />,
      title: "AI Assistant",
      description: "Smart shopping",
      details: [
        "Personalized recommendations",
        "Energy analysis",
        "Price comparison",
        "Installation guide"
      ],
      stats: { accuracy: "92%", queries: "1M+" }
    },
    {
      icon: <Zap className="text-[#EA591D]" size={14} />,
      title: "Smart Home",
      description: "IoT appliances",
      details: [
        "Voice control",
        "Energy monitoring",
        "Remote control",
        "Maintenance alerts"
      ],
      stats: { devices: "50K+", savings: "30%" }
    },
    {
      icon: <Globe className="text-[#EA591D]" size={14} />,
      title: "Regional Coverage",
      description: "Egypt & Saudi",
      details: [
        "Localized pricing",
        "Same-day delivery",
        "Arabic support",
        "Local warranty"
      ],
      stats: { cities: "25+", centers: "15+" }
    }
  ];

  const bottomStats = [
    { value: "85%", label: "Adoption", icon: <Users size={10} /> },
    { value: "24/7", label: "Support", icon: <Clock size={10} /> },
    { value: "4.8★", label: "Rating", icon: <Star size={10} /> }
  ];

  const handleCardClick = (index: number) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const handleCardHover = (index: number) => {
    setActiveFeature(index);
  };

  const handleCardLeave = () => {
    // لا تغيير هنا - الكاردات تفضل كما هي
  };

  return (
    <section className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold text-white mb-1 pt-10">
            Smart <span className="text-[#EA591D]">Features</span>
          </h2>
          <p className="text-gray-300 text-xs max-w-sm mx-auto">
            Next-gen shopping experience
          </p>
        </div>

        {/* Layout for mobile: Image on top, cards below */}
        <div className="block lg:hidden">
          {/* Image for Mobile */}
          <div className="relative h-56 rounded-xl overflow-hidden mb-6">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/images/p.jpeg")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                <h3 className="text-white text-sm font-bold mb-1">Advanced Technology</h3>
                <p className="text-gray-200 text-xs">
                  Integrated solutions for modern homes
                </p>
              </div>
            </div>
          </div>

          {/* Stats for Mobile */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {bottomStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-2.5 rounded-lg border border-[#EA591D]/10 text-center"
              >
                <div className="flex items-center justify-center space-x-1.5 mb-1">
                  <div className="text-[#EA591D]">
                    {stat.icon}
                  </div>
                  <div className="text-white font-bold text-sm">{stat.value}</div>
                </div>
                <div className="text-gray-300 text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Cards for Mobile */}
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-200 relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-br from-[#0d1229] to-[#1a2138] border border-[#EA591D]/30'
                      : 'bg-gradient-to-br from-[#0d1229] to-[#1a2138] border border-[#EA591D]/10'
                  }`}
                >
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className={`p-2 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10' 
                          : 'bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-semibold mb-1 transition-colors duration-200 ${
                          isActive ? 'text-[#EA591D]' : 'text-white'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Details List */}
                    <div className="space-y-2 mb-3">
                      {feature.details.map((detail, i) => (
                        <div 
                          key={i} 
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle 
                            className={`flex-shrink-0 transition-colors duration-200 ${
                              isActive ? 'text-[#EA591D]' : 'text-gray-500'
                            }`} 
                            size={12} 
                          />
                          <span className="text-gray-200 text-xs">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs border-t border-[#EA591D]/10 pt-3">
                      {Object.entries(feature.stats).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className={`font-medium ${
                            isActive ? 'text-white' : 'text-gray-300'
                          }`}>
                            {value}
                          </div>
                          <div className="text-gray-400 text-[10px] capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA591D] to-[#f97316]"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Layout for Desktop: Side by side */}
        <div className="hidden lg:flex flex-row gap-6 items-start">
          {/* Left Side: Image */}
          <div className="w-1/2 relative">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/images/p.jpeg")'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-md">
                  <h3 className="text-white text-base font-bold mb-2">Advanced Technology</h3>
                  <p className="text-gray-200 text-sm">
                    Integrated solutions for modern homes
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Below Image */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {bottomStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border border-[#EA591D]/10 text-center hover:border-[#EA591D]/20 transition-colors duration-200"
                >
                  <div className="flex items-center justify-center space-x-2 mb-1.5">
                    <div className="text-[#EA591D]">
                      {stat.icon}
                    </div>
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                  </div>
                  <div className="text-gray-300 text-[11px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Cards */}
          <div className="w-1/2" onMouseLeave={handleCardLeave}>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    onMouseEnter={() => handleCardHover(index)}
                    className={`cursor-pointer p-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-br from-[#0d1229] to-[#1a2138] border border-[#EA591D]/30'
                        : 'bg-gradient-to-br from-[#0d1229] to-[#1a2138] border border-[#EA591D]/10 hover:border-[#EA591D]/20'
                    }`}
                  >
                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-start space-x-2.5 mb-2.5">
                        <div className={`p-1.5 rounded-md transition-all duration-200 ${
                          isActive 
                            ? 'bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10' 
                            : 'bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5'
                        }`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-xs font-semibold mb-1 transition-colors duration-200 truncate ${
                            isActive ? 'text-[#EA591D]' : 'text-white'
                          }`}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 text-[10px] leading-tight">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Details List */}
                      <div className="space-y-1.5 mb-2.5">
                        {feature.details.map((detail, i) => (
                          <div 
                            key={i} 
                            className="flex items-start space-x-1.5"
                          >
                            <CheckCircle 
                              className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${
                                isActive ? 'text-[#EA591D]' : 'text-gray-500'
                              }`} 
                              size={10} 
                            />
                            <span className="text-gray-200 text-[10px] leading-tight">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-[10px] border-t border-[#EA591D]/10 pt-2.5">
                        {Object.entries(feature.stats).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className={`font-medium ${
                              isActive ? 'text-white' : 'text-gray-300'
                            }`}>
                              {value}
                            </div>
                            <div className="text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EA591D] to-[#f97316]"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button for Desktop */}
            <div className="mt-6">
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#EA591D]/10 to-transparent hover:from-[#EA591D]/20 hover:to-[#f97316]/10 px-4 py-2.5 rounded-lg border border-[#EA591D]/20 hover:border-[#EA591D]/30 transition-all duration-200 text-white text-xs font-medium w-full justify-center">
                <span>Explore All Features</span>
                <Zap size={12} className="text-[#EA591D]" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button for Mobile */}
        <div className="text-center mt-6 lg:hidden">
          <button className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent hover:from-[#EA591D]/20 hover:to-[#f97316]/10 px-4 py-2.5 rounded-lg border border-[#EA591D]/20 hover:border-[#EA591D]/30 transition-all duration-200 text-white text-xs font-medium">
            <span>Explore Features</span>
            <Zap size={12} className="text-[#EA591D]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;