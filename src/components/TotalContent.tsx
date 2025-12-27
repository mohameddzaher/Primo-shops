'use client';

import { useState, useEffect } from 'react';
import { Home, Tv, Cpu, Zap } from 'lucide-react';
import Image from 'next/image';

const TotalContent = () => {
  const creativeCards = [
    {
      title: "Kitchen Appliances",
      icon: <Home className="text-[#EA591D]" size={20} />,
      image: "/images/Freepik _ All-in-One AI Creative Suite.jpeg",
      description: "Cook like a pro with our smart kitchen gadgets"
    },
    {
      title: "Living Room Essentials",
      icon: <Tv className="text-[#EA591D]" size={20} />,
      image: "/images/Living-Room-Essentials.jpg",
      description: "Upgrade your living space with style"
    },
    {
      title: "Refrigerators",
      icon: <Cpu className="text-[#EA591D]" size={20} />,
      image: "/images/Wilson Hennessy Photographer.jpeg",
      description: "Keep your food fresh with top brands"
    },
    {
      title: "Laundry",
      icon: <Cpu className="text-[#EA591D]" size={20} />,
      image: "/images/Lava e Seca Midea 11kg Inverter – Adeus Varal e Falta de Tempo.jpeg",
      description: "Efficient washing for your daily needs"
    },
  ];

  const textSlider = [
    "Fast Delivery across Cairo & Riyadh within 24 hours",
    "Extended Warranty on selected premium appliances",
    "Exclusive offers on top kitchen and home brands",
    "24/7 Customer Support for all your appliance needs",
    "Certified quality and genuine products guaranteed"
  ];

  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTextIndex((prev) => (prev + 1) % textSlider.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-6 md:py-10">
      <div className="container mx-auto px-8">
        <h2 className="text-lg md:text-xl font-bold text-white text-center mb-6">
          Discover <span className="text-[#EA591D]">Our Collections</span>
        </h2>

        {/* Fixed Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {creativeCards.map((card, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl  border-[#EA591D]/10 hover:border-[#EA591D]/25 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group">
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
              <p className="text-gray-300 text-[11px] mb-3">{card.description}</p>
              <div className="w-full h-38 relative rounded overflow-hidden mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image src={card.image} alt={card.title} fill className="object-cover rounded" unoptimized />
              </div>
              <button className="text-[#EA591D] hover:text-[#f97316] text-xs font-medium transition-colors mt-1">
                Explore →
              </button>
            </div>
          ))}
        </div>

        {/* Text Slider */}
        <div className="relative h-12 overflow-hidden">
          <div className="transition-transform duration-700" style={{ transform: `translateY(-${activeTextIndex * 3}rem)` }}>
            {textSlider.map((text, idx) => (
              <div key={idx} className="h-12 flex items-center justify-center text-white text-sm md:text-base font-medium">
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TotalContent;