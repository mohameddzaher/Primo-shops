import { Target, Users, Award, Globe, TrendingUp, Heart } from 'lucide-react';

const AboutContent = () => {
  const milestones = [
    { year: '2019', title: 'Founded in Cairo', description: 'Started with 10 employees and 50 products' },
    { year: '2020', title: 'Expanded to Saudi Arabia', description: 'Opened Riyadh office and warehouse' },
    { year: '2021', title: 'Mobile Apps Launch', description: 'Released iOS and Android applications' },
    { year: '2022', title: 'AI Chatbot Integration', description: 'Implemented intelligent shopping assistant' },
    { year: '2023', title: '100+ Brand Partners', description: 'Partnered with top global brands' },
    { year: '2024', title: 'Digital Transformation', description: 'Complete e-commerce ecosystem' },
  ];

  const values = [
    { icon: <Target />, title: 'Customer First', description: 'Everything we do starts with our customers needs' },
    { icon: <Award />, title: 'Quality Excellence', description: 'Only the best products and services' },
    { icon: <Heart />, title: 'Integrity', description: 'Honest and transparent in all dealings' },
    { icon: <TrendingUp />, title: 'Innovation', description: 'Always improving and adapting' },
    { icon: <Users />, title: 'Teamwork', description: 'Collaborating to achieve excellence' },
    { icon: <Globe />, title: 'Sustainability', description: 'Environmentally conscious operations' },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#EBE9E9] mb-6">
            About <span className="text-[#EA591D]">Primo</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            For 5 years, Primo has been revolutionizing the home appliances market in the Middle East, 
            bringing world-class brands and exceptional service to millions of homes.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-8 rounded-2xl border border-[#EA591D]/20">
            <h3 className="text-2xl font-bold text-[#EBE9E9] mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              To make premium home appliances accessible to every household in the Middle East 
              through innovative technology, competitive pricing, and unparalleled customer service.
            </p>
            <div className="flex items-center space-x-2 text-[#EA591D]">
              <Target />
              <span className="font-semibold">Making Homes Better</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-8 rounded-2xl border border-[#EA591D]/20">
            <h3 className="text-2xl font-bold text-[#EBE9E9] mb-4">Our Vision</h3>
            <p className="text-gray-400 mb-6">
              To become the leading home appliances platform in the MENA region, 
              known for innovation, reliability, and customer satisfaction.
            </p>
            <div className="flex items-center space-x-2 text-[#EA591D]">
              <Globe />
              <span className="font-semibold">Regional Leadership</span>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#EA591D] to-transparent hidden md:block"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#EA591D] rounded-full hidden md:block"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-6 rounded-2xl border border-[#EA591D]/20">
                      <div className="text-[#EA591D] font-bold text-2xl mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-[#EBE9E9] mb-2">{milestone.title}</h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-6 rounded-2xl border border-[#EA591D]/20"
              >
                <div className="text-[#EA591D] mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[#EBE9E9] mb-2">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-[#1D2340] via-[#2a1e3a] to-[#1D2340] rounded-2xl p-8 border border-[#EA591D]/20">
          <h3 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">250+</div>
              <div className="text-[#EBE9E9]">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">40%</div>
              <div className="text-[#EBE9E9]">Women in Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">15</div>
              <div className="text-[#EBE9E9]">Nationalities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">96%</div>
              <div className="text-[#EBE9E9]">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;