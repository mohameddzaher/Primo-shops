'use client';

import { Check, Star, Shield, Zap, Clock } from 'lucide-react';
import { useState } from 'react';

const BrandsContent = () => {
  const [activeBrand, setActiveBrand] = useState(0);

  const topBrands = [
    {
      name: 'Samsung',
      category: 'Electronics & Appliances',
      since: '2019',
      description: 'World leader in digital technology and home appliances',
      features: ['Smart Home Integration', 'Energy Efficient', '5-Year Warranty'],
      rating: 4.9
    },
    {
      name: 'LG',
      category: 'Home Appliances',
      since: '2019',
      description: 'Innovative home solutions with cutting-edge technology',
      features: ['AI-powered Appliances', 'Quiet Operation', 'Smart Diagnosis'],
      rating: 4.8
    },
    {
      name: 'Bosch',
      category: 'Kitchen & Laundry',
      since: '2020',
      description: 'German precision engineering for premium home appliances',
      features: ['Made in Germany', 'Eco-Friendly', 'Long Lifespan'],
      rating: 4.9
    },
    {
      name: 'Whirlpool',
      category: 'Large Appliances',
      since: '2020',
      description: 'Reliable and durable appliances for everyday use',
      features: ['American Quality', 'Easy Maintenance', 'Affordable'],
      rating: 4.7
    },
    {
      name: 'Toshiba',
      category: 'Electronics',
      since: '2021',
      description: 'Japanese innovation in home electronics',
      features: ['Advanced Technology', 'Energy Saving', 'Compact Design'],
      rating: 4.6
    },
    {
      name: 'Philips',
      category: 'Small Appliances',
      since: '2021',
      description: 'Health and well-being focused home products',
      features: ['Health Focused', 'User-Friendly', 'Modern Design'],
      rating: 4.8
    }
  ];

  const brandCategories = [
    { name: 'Refrigerators', count: 150, icon: '❄️' },
    { name: 'Washing Machines', count: 120, icon: '👕' },
    { name: 'Air Conditioners', count: 90, icon: '💨' },
    { name: 'Televisions', count: 75, icon: '📺' },
    { name: 'Kitchen Appliances', count: 200, icon: '🍳' },
    { name: 'Vacuum Cleaners', count: 60, icon: '🧹' },
    { name: 'Water Heaters', count: 45, icon: '🔥' },
    { name: 'Small Appliances', count: 300, icon: '⚡' }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EBE9E9] mb-4">
            Our <span className="text-[#EA591D]">Premium</span> Brands
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Partnering with 100+ world-class brands to bring you the best home appliances with exclusive partnerships and warranty coverage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Brands Grid */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1D2340] p-6 rounded-2xl border border-[#EA591D]/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#EBE9E9]">Top Partner Brands</h2>
              <div className="text-[#EA591D] text-sm font-semibold">100+ Total Brands</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topBrands.map((brand, index) => (
                <button
                  key={brand.name}
                  onClick={() => setActiveBrand(index)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeBrand === index
                      ? 'bg-gradient-to-r from-[#EA591D]/20 to-transparent border-l-2 border-[#EA591D]'
                      : 'bg-[#0d1229] hover:bg-[#0d1229]/80'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-[#EBE9E9] text-base mb-1">{brand.name}</h3>
                      <div className="text-gray-400 text-xs mb-2">{brand.category}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500" size={12} fill="currentColor" />
                      <span className="text-[#EBE9E9] text-xs font-semibold">{brand.rating}</span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-xs mt-2 line-clamp-2">{brand.description}</div>
                  <div className="text-[#EA591D] text-xs font-medium mt-2">Since {brand.since}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Brand Details */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1D2340] p-6 rounded-2xl border border-[#EA591D]/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#EA591D]/20 p-2 rounded-lg">
                <Shield className="text-[#EA591D]" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#EBE9E9]">{topBrands[activeBrand].name}</h2>
                <div className="text-gray-400 text-sm">{topBrands[activeBrand].category}</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">{topBrands[activeBrand].description}</p>

            <div className="space-y-3 mb-6">
              <h4 className="text-[#EBE9E9] font-semibold text-sm">Key Features</h4>
              {topBrands[activeBrand].features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="bg-[#EA591D]/20 p-1 rounded">
                    <Check className="text-[#EA591D]" size={12} />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Brand Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0d1229] p-3 rounded-lg text-center border border-[#EA591D]/10">
                <div className="text-lg font-bold text-[#EA591D]">50+</div>
                <div className="text-[#EBE9E9] text-xs">Products</div>
              </div>
              <div className="bg-[#0d1229] p-3 rounded-lg text-center border border-[#EA591D]/10">
                <div className="text-lg font-bold text-[#EA591D]">98%</div>
                <div className="text-[#EBE9E9] text-xs">Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#EBE9E9] mb-4 text-center">Product Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandCategories.map((category) => (
              <div 
                key={category.name}
                className="bg-gradient-to-br from-[#0d1229] to-[#1D2340] p-4 rounded-xl border border-[#EA591D]/10 hover:border-[#EA591D]/30 transition-colors cursor-pointer"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h4 className="text-[#EBE9E9] font-semibold text-sm mb-1">{category.name}</h4>
                <div className="text-[#EA591D] text-xs font-medium">{category.count} Products</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-[#0d1229] via-[#1D2340] to-[#0d1229] rounded-2xl p-6 border border-[#EA591D]/20">
          <h3 className="text-xl font-bold text-[#EBE9E9] mb-4 text-center">Why Choose Our Brands?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="bg-[#EA591D]/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Shield className="text-[#EA591D]" size={20} />
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Official Warranty</h4>
              <p className="text-gray-400 text-xs">Full manufacturer warranty coverage</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#EA591D]/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Zap className="text-[#EA591D]" size={20} />
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Quick Service</h4>
              <p className="text-gray-400 text-xs">24-hour service response time</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#EA591D]/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Clock className="text-[#EA591D]" size={20} />
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Same Day Delivery</h4>
              <p className="text-gray-400 text-xs">In major cities across both countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsContent;