import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 pt-10">
            Get In <span className="text-[#EA591D]">Touch</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm max-w-md mx-auto">
            We're here to help with all your appliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-10">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#0d1229]/90 to-[#1a2138]/90 p-5 md:p-6 rounded-xl border border-[#EA591D]/15">
            <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-2.5 rounded-lg">
                  <MapPin className="text-[#EA591D]" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Our Locations</h4>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div>
                      <div className="font-medium">Egypt HQ</div>
                      <div>123 Business District, Cairo</div>
                    </div>
                    <div>
                      <div className="font-medium">Saudi Arabia</div>
                      <div>456 King Abdullah Rd, Riyadh</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-2.5 rounded-lg">
                  <Phone className="text-[#EA591D]" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Phone Support</h4>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div>
                      <div className="font-medium">Egypt</div>
                      <div className="text-[#EA591D] font-medium">+20 100 000 0000</div>
                    </div>
                    <div>
                      <div className="font-medium">Saudi Arabia</div>
                      <div className="text-[#EA591D] font-medium">+966 54 027 8636</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-2.5 rounded-lg">
                  <Mail className="text-[#EA591D]" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Email</h4>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div>sales@primo-appliances.com</div>
                    <div>support@primo-appliances.com</div>
                    <div>careers@primo-appliances.com</div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-2.5 rounded-lg">
                  <Clock className="text-[#EA591D]" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Working Hours</h4>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div>Customer Support: 24/7</div>
                    <div>Sales: 8:00 AM - 12:00 AM</div>
                    <div>Technical Service: 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#0d1229]/90 to-[#1a2138]/90 p-5 md:p-6 rounded-xl border border-[#EA591D]/15">
            <h3 className="text-lg font-bold text-white mb-4">Send Us a Message</h3>
            
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-white text-xs mb-1.5">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white text-xs mb-1.5">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-xs mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white text-xs mb-1.5">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors"
                  placeholder="+20 100 000 0000"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-xs mb-1.5">Message</label>
                <textarea
                  rows={3}
                  className="w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Checkbox */}
              <div>
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mt-0.5 rounded text-[#EA591D] focus:ring-[#EA591D] focus:ring-1 focus:ring-offset-1 focus:ring-offset-transparent"
                  />
                  <span className="text-gray-300 text-xs">I want to receive updates about offers</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#EA591D] to-[#f97316] text-white py-2.5 rounded-lg hover:shadow-md hover:shadow-[#EA591D]/15 transition-all duration-300 font-medium text-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;