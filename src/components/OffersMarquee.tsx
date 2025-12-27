'use client';

import { useEffect, useState } from 'react';
import { Tag, Clock, Zap, Gift } from 'lucide-react';

const OffersMarquee = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  
  const offers = [
    {
      icon: <Tag className="text-[#EA591D]" size={16} />,
      title: "Flash Sale",
      description: "Up to 40% off on selected appliances",
      timeLeft: "Ends in 2:45:12",
      color: "from-[#EA591D]/20 to-[#EA591D]/5"
    },
    {
      icon: <Gift className="text-[#EA591D]" size={16} />,
      title: "New Year Offer",
      description: "Free installation with every purchase",
      timeLeft: "Limited time only",
      color: "from-[#EA591D]/15 to-[#f97316]/5"
    },
    {
      icon: <Zap className="text-[#EA591D]" size={16} />,
      title: "Quick Delivery",
      description: "Same-day delivery in Cairo & Riyadh",
      timeLeft: "Order before 2 PM",
      color: "from-[#f97316]/15 to-[#EA591D]/5"
    },
    {
      icon: <Clock className="text-[#EA591D]" size={16} />,
      title: "Extended Warranty",
      description: "+1 year warranty on all products",
      timeLeft: "Limited offer",
      color: "from-[#EA591D]/10 to-[#f97316]/5"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="bg-gradient-to-t from-[#050816] to-[#0b1024] rounded-xl border-[#EA591D]/20 p-3 sm:p-4 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-gradient-to-br from-[#EA591D] to-[#f97316] p-1.5 sm:p-2 rounded-lg">
                <Zap className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-[#EBE9E9] font-bold text-xs sm:text-sm">Current Offers</h3>
                <p className="text-gray-400 text-xs">Don't miss these amazing deals</p>
              </div>
            </div>

            {/* Animated Offer Display */}
            <div className="flex-1 w-full md:w-auto min-w-0">
              <div className="relative h-14 sm:h-16 overflow-hidden">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentOffer
                        ? 'opacity-100 translate-x-0'
                        : index < currentOffer
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${offer.color} p-3 sm:p-4 rounded-lg  border-[#EA591D]/20 h-full`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between h-full gap-2 sm:gap-0">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="flex-shrink-0">
                            {offer.icon}
                          </div>
                          <div className="min-w-0">
                            <div className="text-[#EBE9E9] font-semibold text-xs sm:text-sm truncate">{offer.title}</div>
                            <div className="text-gray-300 text-xs truncate">{offer.description}</div>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-[#EA591D] font-bold text-xs">{offer.timeLeft}</div>
                          <button className="mt-0.5 text-[#EBE9E9] text-xs hover:text-[#EA591D] transition-colors cursor-pointer whitespace-nowrap">
                            Shop Now →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offer Indicators */}
            <div className="flex space-x-1.5 sm:space-x-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOffer(index)}
                  className={`w-6 sm:w-8 h-1.5 rounded-full transition-all cursor-pointer ${
                    index === currentOffer 
                      ? 'bg-gradient-to-r from-[#EA591D] to-[#f97316]' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersMarquee;