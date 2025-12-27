// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  User, 
  Headphones // أضف هذا
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general',
    subscribe: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      subject: 'general',
      subscribe: false
    });
  };

  const locations = [
    {
      name: "Egypt HQ",
      address: "123 Business District, Cairo",
      phone: "+20 100 000 0000",
      hours: "8 AM - 12 AM"
    },
    {
      name: "Saudi Arabia",
      address: "456 King Abdullah Rd, Riyadh",
      phone: "+966 50 000 0000",
      hours: "8 AM - 12 AM"
    }
  ];

  const contactMethods = [
    { type: 'Sales', email: 'sales@primo-appliances.com', icon: <MessageSquare size={14} /> },
    { type: 'Support', email: 'support@primo-appliances.com', icon: <Headphones size={14} /> },
    { type: 'Careers', email: 'careers@primo-appliances.com', icon: <User size={14} /> }
  ];

  const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'support', label: 'Technical Support' },
    { value: 'warranty', label: 'Warranty Claim' },
    { value: 'career', label: 'Career Opportunity' }
  ];

  return (
    <div className="pt-25 pb-12 px-4 bg-gradient-to-t from-[#050816] to-[#0b1024]">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent px-3 py-1 rounded-full border border-[#EA591D]/20 mb-3">
            <MessageSquare size={12} className="text-[#EA591D]" />
            <span className="text-[#EA591D] text-xs font-medium">Get in Touch</span>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-gray-300 text-sm max-w-lg mx-auto">
            We're here to help with all your appliance needs
          </p>
        </div>

        

        {/* Contact Form */}
        <div className="max-w-lg mx-auto mb-10">
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-5 rounded-xl border border-emerald-500/20 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full mb-3 mx-auto">
                <CheckCircle className="text-emerald-500" size={20} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Message Sent!</h3>
              <p className="text-gray-300 text-xs">We'll contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/10">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                    placeholder="John"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                    placeholder="+20 100 000 0000"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-300 text-xs mb-1">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                >
                  {subjects.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                      {subject.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-300 text-xs mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-[#050816] border border-[#EA591D]/20 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#EA591D]"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  id="subscribe"
                  className="rounded border-[#EA591D]/20 bg-[#050816] text-[#EA591D] focus:ring-[#EA591D]"
                />
                <label htmlFor="subscribe" className="text-gray-300 text-xs">
                  Receive updates about offers
                </label>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-[#EA591D] to-[#f97316] hover:from-[#f97316] hover:to-[#EA591D] w-full px-4 py-2.5 rounded-lg text-white text-xs font-medium transition-all duration-300"
              >
                <Send size={12} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>


{/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {/* Locations */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/10">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                <MapPin className="text-[#EA591D]" size={14} />
              </div>
              <h3 className="text-sm font-bold text-white">Locations</h3>
            </div>
            
            <div className="space-y-3">
              {locations.map((location, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-xs font-bold text-white">{location.name}</h4>
                  <div className="space-y-0.5">
                    <p className="text-gray-300 text-xs flex items-center space-x-1">
                      <MapPin size={10} />
                      <span>{location.address}</span>
                    </p>
                    <p className="text-gray-300 text-xs flex items-center space-x-1">
                      <Phone size={10} />
                      <span>{location.phone}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/10">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                <Mail className="text-[#EA591D]" size={14} />
              </div>
              <h3 className="text-sm font-bold text-white">Email</h3>
            </div>
            
            <div className="space-y-2">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-[#EA591D]">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs">{method.type}</p>
                    <p className="text-gray-400 text-[10px]">{method.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/10">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gradient-to-br from-[#EA591D]/20 to-[#EA591D]/10 rounded-lg">
                <Clock className="text-[#EA591D]" size={14} />
              </div>
              <h3 className="text-sm font-bold text-white">Hours</h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs">Customer Support</span>
                <span className="text-white text-xs font-medium">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs">Sales</span>
                <span className="text-white text-xs font-medium">8 AM - 12 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs">Technical</span>
                <span className="text-white text-xs font-medium">24/7</span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default ContactPage;