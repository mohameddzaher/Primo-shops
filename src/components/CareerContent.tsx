import { Briefcase, DollarSign, Users, Globe, Award, Clock } from 'lucide-react';

const CareerContent = () => {
  const jobOpenings = [
    {
      title: 'Sales Manager',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      department: 'Sales',
      experience: '5+ years'
    },
    {
      title: 'Technical Support Engineer',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      department: 'Support',
      experience: '3+ years'
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      experience: '4+ years'
    },
    {
      title: 'Warehouse Supervisor',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      department: 'Operations',
      experience: '3+ years'
    },
    {
      title: 'Mobile App Developer',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Technology',
      experience: '3+ years'
    },
    {
      title: 'Customer Service Agent',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      department: 'Support',
      experience: '2+ years'
    }
  ];

  const benefits = [
    { icon: <DollarSign />, title: 'Competitive Salary', description: 'Above market average with performance bonuses' },
    { icon: <Briefcase />, title: 'Career Growth', description: 'Clear promotion paths and leadership opportunities' },
    { icon: <Globe />, title: 'Global Exposure', description: 'Work with international brands and teams' },
    { icon: <Award />, title: 'Training Programs', description: 'Continuous learning and skill development' },
    { icon: <Users />, title: 'Team Culture', description: 'Collaborative and inclusive work environment' },
    { icon: <Clock />, title: 'Flexible Hours', description: 'Work-life balance with flexible schedules' }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#EBE9E9] mb-6">
            Join the <span className="text-[#EA591D]">Primo</span> Team
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Be part of the fastest growing home appliances company in the Middle East. 
            We're looking for talented individuals who share our passion for innovation and customer satisfaction.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-6 rounded-2xl border border-[#EA591D]/20"
              >
                <div className="text-[#EA591D] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#EBE9E9] mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Current Openings</h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-6 rounded-2xl border border-[#EA591D]/20 hover:border-[#EA591D]/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#EBE9E9] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                      <span className="flex items-center space-x-2 text-gray-400">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-2 text-gray-400">
                        <Globe size={16} />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-2 text-gray-400">
                        <Clock size={16} />
                        <span>{job.experience} experience</span>
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#EA591D] text-white px-6 py-2 rounded-lg hover:bg-[#d14c18] transition-colors duration-300 font-semibold">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Stats */}
        <div className="bg-gradient-to-r from-[#1D2340] via-[#2a1e3a] to-[#1D2340] rounded-2xl p-8 border border-[#EA591D]/20">
          <h3 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Our Team in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">250+</div>
              <div className="text-[#EBE9E9]">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">40%</div>
              <div className="text-[#EBE9E9]">Annual Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">4.8/5</div>
              <div className="text-[#EBE9E9]">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EA591D]">15+</div>
              <div className="text-[#EBE9E9]">Nationalities</div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#EBE9E9] text-center mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold text-[#EBE9E9] mb-2">Apply Online</h4>
              <p className="text-gray-400">Submit your application through our portal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold text-[#EBE9E9] mb-2">Screening</h4>
              <p className="text-gray-400">HR review and initial assessment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold text-[#EBE9E9] mb-2">Interviews</h4>
              <p className="text-gray-400">Technical and cultural fit interviews</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-lg font-bold text-[#EBE9E9] mb-2">Offer</h4>
              <p className="text-gray-400">Job offer and onboarding process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerContent;