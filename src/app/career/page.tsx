// app/career/page.tsx
'use client';

import { useState } from 'react';
import { Briefcase, Users, TrendingUp, Award, Clock, DollarSign, MapPin, Send, CheckCircle, Zap, ChevronRight, GraduationCap } from 'lucide-react';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [application, setApplication] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Sales Executive",
      department: "Sales",
      location: "Cairo, Egypt",
      type: "Full-time",
      experience: "2+ years",
      salary: "Competitive",
      description: "Drive sales growth and build relationships"
    },
    {
      id: 2,
      title: "Customer Support",
      department: "Support",
      location: "Riyadh, KSA",
      type: "Full-time",
      experience: "1+ years",
      salary: "Market Rate",
      description: "Provide exceptional 24/7 service"
    },
    {
      id: 3,
      title: "Delivery Specialist",
      department: "Logistics",
      location: "Cairo & Riyadh",
      type: "Full-time",
      experience: "1+ years",
      salary: "Competitive",
      description: "Ensure timely premium deliveries"
    },
    {
      id: 4,
      title: "Technical Engineer",
      department: "Technical",
      location: "Cairo, Egypt",
      type: "Full-time",
      experience: "3+ years",
      salary: "Excellent",
      description: "Install and maintain appliances"
    },
    {
      id: 5,
      title: "Digital Marketing",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "Market Rate",
      description: "Drive online growth & awareness"
    },
    {
      id: 6,
      title: "AI Developer",
      department: "Technology",
      location: "Cairo, Egypt",
      type: "Full-time",
      experience: "3+ years",
      salary: "Excellent",
      description: "Build smart shopping experiences"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign size={14} />,
      title: "Competitive Salary",
      description: "Market-leading packages"
    },
    {
      icon: <Award size={14} />,
      title: "Growth Opportunities",
      description: "Clear career progression"
    },
    {
      icon: <Users size={14} />,
      title: "Team Culture",
      description: "Collaborative environment"
    },
    {
      icon: <Clock size={14} />,
      title: "Flexible Hours",
      description: "Work-life balance"
    }
  ];

  const stats = [
    { value: "200+", label: "Team Members", icon: <Users size={12} /> },
    { value: "75%", label: "Growth Rate", icon: <TrendingUp size={12} /> },
    { value: "4.8★", label: "Employee Rating", icon: <Award size={12} /> }
  ];

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setApplication(prev => ({ ...prev, position: job.title }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplication(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application:', application);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setApplication({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: ''
    });
    setSelectedJob(null);
  };

  return (
    <div className="pt-25 pb-12 px-4 bg-gradient-to-t from-[#050816] to-[#0b1024]">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent px-3 py-1 rounded-full border border-[#EA591D]/20 mb-3">
            <Briefcase size={12} className="text-[#EA591D]" />
            <span className="text-[#EA591D] text-xs font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">Build Your Career</h1>
          <p className="text-gray-300 text-sm max-w-lg mx-auto">
            Be part of the leading appliances platform in the Middle East
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

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-3">Why Work With Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border border-[#EA591D]/10"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                    <div className="text-[#EA591D]">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-white">{benefit.title}</h4>
                </div>
                <p className="text-gray-300 text-[10px]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-white">Open Positions</h3>
            <span className="text-gray-400 text-xs">{jobs.length} openings</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className={`bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                  selectedJob?.id === job.id 
                    ? 'border-[#EA591D]/30' 
                    : 'border-[#EA591D]/10 hover:border-[#EA591D]/20'
                }`}
                onClick={() => handleApply(job)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{job.title}</h4>
                    <p className="text-[#EA591D] text-xs font-medium">{job.department}</p>
                  </div>
                  <div className="p-1.5 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                    <Briefcase className="text-[#EA591D]" size={12} />
                  </div>
                </div>
                
                <div className="space-y-1.5 mb-2">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="text-gray-400" size={10} />
                    <span className="text-gray-300 text-xs">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="text-gray-400" size={10} />
                    <span className="text-gray-300 text-xs">{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <GraduationCap className="text-gray-400" size={10} />
                    <span className="text-gray-300 text-xs">{job.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-200 text-xs mb-3">{job.description}</p>
                
                <button 
                  className="w-full bg-gradient-to-r from-[#EA591D]/10 to-transparent hover:from-[#EA591D]/20 hover:to-[#f97316]/10 px-3 py-1.5 rounded border border-[#EA591D]/20 hover:border-[#EA591D]/30 text-white text-xs font-medium transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApply(job);
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gradient-to-r from-[#0d1229] via-[#1a2138] to-[#0d1229] rounded-xl p-4 border border-[#EA591D]/15">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-white mb-1">
              {selectedJob ? `Apply for: ${selectedJob.title}` : 'Select a Position'}
            </h3>
            <p className="text-gray-300 text-xs">
              {selectedJob ? selectedJob.description : 'Choose a job to apply'}
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-4 rounded-lg border border-emerald-500/20 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full mb-2 mx-auto">
                <CheckCircle className="text-emerald-500" size={16} />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Application Sent!</h4>
              <p className="text-gray-300 text-xs">We'll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="fullName"
                  value={application.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  value={application.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  name="phone"
                  value={application.phone}
                  onChange={handleChange}
                  placeholder="Phone *"
                  className="bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  required
                />
                
                <input
                  type="text"
                  name="position"
                  value={application.position}
                  onChange={handleChange}
                  placeholder="Position *"
                  className="bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  required
                  readOnly={!!selectedJob}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="experience"
                  value={application.experience}
                  onChange={handleChange}
                  placeholder="Experience *"
                  className="bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  required
                />
                
                <input
                  type="text"
                  name="resume"
                  value={application.resume}
                  onChange={handleChange}
                  placeholder="Resume/CV Link *"
                  className="bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  required
                />
              </div>
              
              <textarea
                name="message"
                value={application.message}
                onChange={handleChange}
                rows={2}
                placeholder="Cover Letter / Message"
                className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
              />
              
              <button
                type="submit"
                disabled={!selectedJob}
                className={`inline-flex items-center justify-center space-x-1.5 w-full px-4 py-2.5 rounded-lg text-white text-xs font-medium transition-all duration-300 ${
                  selectedJob 
                    ? 'bg-gradient-to-r from-[#EA591D] to-[#f97316] hover:from-[#f97316] hover:to-[#EA591D] hover:scale-105' 
                    : 'bg-gray-700 cursor-not-allowed'
                }`}
              >
                <Send size={12} />
                <span>Submit Application</span>
              </button>
              
              {!selectedJob && (
                <p className="text-amber-500 text-xs text-center mt-2">
                  Please select a position first
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;