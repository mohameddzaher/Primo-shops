import { Send, Gift, Clock, Shield } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#0d1229]/90 to-[#1a2138]/90 rounded-xl p-5 md:p-6 border border-[#EA591D]/15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Stay Updated With <span className="text-[#EA591D]">Great Deals</span>
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Subscribe to be the first to know about exclusive offers, new arrivals, 
                and special discounts on premium home appliances.
              </p>
              
              <div className="space-y-2.5">
                <div className="flex items-center space-x-2.5">
                  <Gift className="text-[#EA591D] flex-shrink-0" size={16} />
                  <span className="text-gray-200 text-xs">Exclusive subscriber-only discounts</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="text-[#EA591D] flex-shrink-0" size={16} />
                  <span className="text-gray-200 text-xs">Early access to flash sales</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Shield className="text-[#EA591D] flex-shrink-0" size={16} />
                  <span className="text-gray-200 text-xs">No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-gradient-to-t from-[#050816] to-[#0b1024] p-4 md:p-5 rounded-lg  border-[#EA591D]/15">
              <div className="mb-4">
                <div className="text-lg font-bold text-[#EA591D] mb-1">Subscribe Now</div>
                <div className="text-gray-300 text-xs">Get 15% off your first purchase</div>
              </div>
              
              <form className="space-y-3">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors"
                  />
                </div>
                
                {/* Country Select & Submit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <select className="cursor-pointer w-full bg-[#0d1229] border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:border-[#EA591D] focus:outline-none transition-colors appearance-none">
                      <option value="" className=" bg-[#0d1229]">Select Country</option>
                      <option value="egypt" className="bg-[#0d1229]">Egypt</option>
                      <option value="saudi" className="bg-[#0d1229]">Saudi Arabia</option>
                      <option value="other" className="bg-[#0d1229]">Other</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#EA591D] to-[#f97316] text-white py-2 rounded-lg hover:shadow-md hover:shadow-[#EA591D]/15 transition-all duration-300 font-medium text-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Subscribe</span>
                  </button>
                </div>
                
                {/* Privacy Policy */}
                <div className="text-center text-gray-400 text-xs">
                  By subscribing, you agree to our Privacy Policy
                </div>
              </form>
              
              {/* Subscribers Progress */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="text-white font-medium text-xs">Already 50,000+ subscribers</div>
                  <div className="text-[#EA591D] text-xs font-medium">75%</div>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#EA591D] to-[#f97316] rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;