// app/about/page.tsx
'use client';

import { useState } from 'react';
import { Target, Users, Award, Globe, TrendingUp, Heart, MapPin, Clock, UsersIcon, Star, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const AboutPage = () => {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  const milestones = [
    { 
      year: '2019', 
      title: 'Founded in Cairo', 
      description: 'Started with 10 employees and 50 products',
      details: 'Began our journey with a vision to revolutionize home appliance shopping in Egypt'
    },
    { 
      year: '2020', 
      title: 'Expanded to KSA', 
      description: 'Opened Riyadh office and warehouse',
      details: 'Extended our reach to Saudi Arabia with dedicated operations center'
    },
    { 
      year: '2021', 
      title: 'Mobile Apps Launch', 
      description: 'Released iOS and Android apps',
      details: 'Launched mobile applications for seamless shopping experience'
    },
    { 
      year: '2022', 
      title: 'AI Assistant', 
      description: 'Implemented smart shopping assistant',
      details: 'Integrated AI technology for personalized recommendations'
    },
    { 
      year: '2023', 
      title: '100+ Brands', 
      description: 'Partnered with global leaders',
      details: 'Built partnerships with top international appliance manufacturers'
    },
    { 
      year: '2024', 
      title: 'Digital Ecosystem', 
      description: 'Complete e-commerce platform',
      details: 'Developed full digital ecosystem for end-to-end customer journey'
    },
  ];

  const values = [
    { icon: <Target size={16} />, title: 'Customer First', description: 'Everything starts with customer needs' },
    { icon: <Award size={16} />, title: 'Quality Excellence', description: 'Only the best products & services' },
    { icon: <Heart size={16} />, title: 'Integrity', description: 'Honest and transparent dealings' },
    { icon: <TrendingUp size={16} />, title: 'Innovation', description: 'Always improving and adapting' },
    { icon: <Users size={16} />, title: 'Teamwork', description: 'Collaborating to achieve excellence' },
    { icon: <Globe size={16} />, title: 'Sustainability', description: 'Environmentally conscious' },
  ];

  const stats = [
    { value: '250+', label: 'Employees', icon: <UsersIcon size={14} />, color: 'from-blue-500/20 to-cyan-500/10' },
    { value: '40%', label: 'Women Leaders', icon: <Star size={14} />, color: 'from-purple-500/20 to-pink-500/10' },
    { value: '15', label: 'Nationalities', icon: <Globe size={14} />, color: 'from-green-500/20 to-emerald-500/10' },
    { value: '96%', label: 'Satisfaction', icon: <Heart size={14} />, color: 'from-amber-500/20 to-orange-500/10' },
  ];

  const leadership = [
    { name: 'Mohamed Mghawry', role: 'CEO & Founder', experience: '15+ years in retail' },
    { name: 'Mai El Ziny', role: 'Founder', experience: 'Operations expert' },
    { name: 'Nader Magdy', role: 'CTO', experience: 'Tech innovator' },
  ];

  return (
    <div className="pt-25 pb-12 px-4 bg-gradient-to-t from-[#050816] to-[#0b1024]">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent px-3 py-1 rounded-full border border-[#EA591D]/20 mb-4">
            <Shield size={12} className="text-[#EA591D]" />
            <span className="text-[#EA591D] text-xs font-medium">Since 2019</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            About <span className="text-[#EA591D]">Primo</span>
          </h1>
          
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
            For 5 years, revolutionizing home appliances in MENA with world-class brands and exceptional service.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-5 rounded-xl border border-[#EA591D]/15 hover:border-[#EA591D]/25 transition-all duration-300">
            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                <Target className="text-[#EA591D]" size={16} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Mission</h3>
                <p className="text-gray-300 text-xs">
                  Make premium appliances accessible through innovation and exceptional service.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-5 rounded-xl border border-[#EA591D]/15 hover:border-[#EA591D]/25 transition-all duration-300">
            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                <Zap className="text-[#EA591D]" size={16} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Vision</h3>
                <p className="text-gray-300 text-xs">
                  Lead the MENA region in innovation, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl border border-[#EA591D]/10 text-center hover:border-[#EA591D]/20 transition-colors duration-300`}
            >
              <div className="flex items-center justify-center space-x-1.5 mb-2">
                <div className="text-[#EA591D]">
                  {stat.icon}
                </div>
                <div className="text-white text-lg font-bold">{stat.value}</div>
              </div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline - Creative Compact Version */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold text-white">Our Journey</h3>
            <div className="flex items-center space-x-1 text-gray-400 text-xs">
              <Clock size={12} />
              <span>2019 - Present</span>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-4 h-0.5 bg-gradient-to-r from-[#EA591D]/30 via-[#EA591D]/20 to-transparent md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="relative group"
                  onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                >
                  {/* Dot */}
                  <div className="absolute left-3 top-4 w-2 h-2 bg-gradient-to-r from-[#EA591D] to-[#f97316] rounded-full group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  
                  <div className={`ml-8 bg-gradient-to-br from-[#0d1229] to-[#1a2138] rounded-xl border transition-all duration-300 cursor-pointer ${
                    expandedMilestone === index 
                      ? 'border-[#EA591D]/30 p-4' 
                      : 'border-[#EA591D]/10 hover:border-[#EA591D]/20 p-3'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[#EA591D] text-xs font-bold mb-1">{milestone.year}</div>
                        <h4 className="text-sm font-bold text-white mb-1">{milestone.title}</h4>
                        <p className="text-gray-300 text-xs">{milestone.description}</p>
                      </div>
                      <button className="text-gray-400 hover:text-[#EA591D] transition-colors">
                        {expandedMilestone === index ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>
                    </div>
                    
                    {expandedMilestone === index && (
                      <div className="mt-3 pt-3 border-t border-[#EA591D]/10">
                        <p className="text-gray-300 text-xs">{milestone.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-white mb-5">Our Values</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/10 hover:border-[#EA591D]/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#EA591D]">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{value.title}</h4>
                <p className="text-gray-300 text-xs">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold text-white">Leadership</h3>
            <div className="text-gray-400 text-xs">Visionaries Driving Success</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/10 hover:border-[#EA591D]/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg flex items-center justify-center">
                    <Users className="text-[#EA591D]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{leader.name}</h4>
                    <p className="text-[#EA591D] text-xs font-medium mb-1">{leader.role}</p>
                    <p className="text-gray-300 text-xs">{leader.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="bg-gradient-to-r from-[#0d1229] via-[#1a2138] to-[#0d1229] rounded-xl p-5 border border-[#EA591D]/15">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
              <MapPin className="text-[#EA591D]" size={16} />
            </div>
            <h3 className="text-lg font-bold text-white">Our Presence</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gradient-to-br from-[#0d1229] to-[#1a2138] rounded-lg border border-[#EA591D]/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-[#EA591D] rounded-full"></div>
                <h4 className="text-sm font-bold text-white">Egypt HQ</h4>
              </div>
              <p className="text-gray-300 text-xs">123 Business District, Cairo</p>
              <p className="text-gray-400 text-xs mt-1">+20 100 000 0000</p>
            </div>
            
            <div className="p-3 bg-gradient-to-br from-[#0d1229] to-[#1a2138] rounded-lg border border-[#EA591D]/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-[#EA591D] rounded-full"></div>
                <h4 className="text-sm font-bold text-white">Saudi Arabia</h4>
              </div>
              <p className="text-gray-300 text-xs">456 King Abdullah Rd, Riyadh</p>
              <p className="text-gray-400 text-xs mt-1">+966 54 027 8636</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;