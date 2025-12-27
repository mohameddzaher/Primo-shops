import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#EBE9E9] mb-6">
            Contact <span className="text-[#EA591D]">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with our team for sales inquiries, technical support, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Egypt Office */}
          <div className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-8 rounded-2xl border border-[#EA591D]/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#EA591D]/20 p-3 rounded-lg">
                <MapPin className="text-[#EA591D]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#EBE9E9]">Egypt Office</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-[#EBE9E9] font-semibold">Address</div>
                <div className="text-gray-400">123 Business District, New Cairo, Cairo, Egypt</div>
              </div>
              
              <div>
                <div className="text-[#EBE9E9] font-semibold">Phone</div>
                <div className="text-[#EA591D] font-medium">+20 100 000 0000</div>
                <div className="text-gray-400 text-sm">Sales: Ext. 101 | Support: Ext. 102</div>
              </div>
              
              <div>
                <div className="text-[#EBE9E9] font-semibold">Email</div>
                <div className="text-gray-400">egypt@primo-appliances.com</div>
              </div>
              
              <div>
                <div className="text-[#EBE9E9] font-semibold">Working Hours</div>
                <div className="text-gray-400">
                  <div>Sunday - Thursday: 8:00 AM - 10:00 PM</div>
                  <div>Friday - Saturday: 10:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Saudi Arabia Office */}
          <div className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-8 rounded-2xl border border-[#EA591D]/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#EA591D]/20 p-3 rounded-lg">
                <MapPin className="text-[#EA591D]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#EBE9E9]">Saudi Arabia Office</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-[#EBE9E9] font-semibold">Address</div>
                <div className="text-gray-400">456 King Abdullah Road, Olaya, Riyadh, Saudi Arabia</div>
              </div>
              
              <div>
                <div className="text-[#EBE9E9] font-semibold">Phone</div>
                <div className="text-[#EA591D] font-medium">+966 50 000 0000</div>
                <div className="text-gray-400 text-sm">Sales: Ext. 201 | Support: Ext. 202</div>
              </div>
              
              <div>
                <div className="text-[#EBE9E9] font-semibold">Email</div>
                <div className="text-gray-400">ksa@primo-appliances.com</div>
              </div>
              
              <div>
                <div className="text-[#EBE9E9] font-semibold">Working Hours</div>
                <div className="text-gray-400">
                  <div>Saturday - Thursday: 9:00 AM - 9:00 PM</div>
                  <div>Friday: 2:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#1D2340] to-[#2a1e3a] p-8 rounded-2xl border border-[#EA591D]/20">
            <h3 className="text-2xl font-bold text-[#EBE9E9] mb-6">Send Quick Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-[#EBE9E9] mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-[#1a1f38] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#EA591D] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[#EBE9E9] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#1a1f38] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#EA591D] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[#EBE9E9] mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#1a1f38] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#EA591D] focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EA591D] text-white py-3 rounded-lg hover:bg-[#d14c18] transition-colors duration-300 font-semibold text-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;