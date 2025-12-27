import { Check, Star, Shield, Zap, Package, Clock, Award } from 'lucide-react';

const Brands = () => {
  const brands = [
    { 
      name: 'LG', 
      rating: 4.9, 
      products: 85,
      since: 2019,
      category: 'Appliances'
    },
    { 
      name: 'Philips', 
      rating: 4.8, 
      products: 72,
      since: 2019,
      category: 'Electronics'
    },
    { 
      name: 'Braun', 
      rating: 4.9, 
      products: 63,
      since: 2020,
      category: 'Premium'
    },
    { 
      name: 'Kenwood', 
      rating: 4.7, 
      products: 58,
      since: 2020,
      category: 'Kitchen'
    },
    { 
      name: 'Panasonic', 
      rating: 4.8, 
      products: 91,
      since: 2021,
      category: 'Home'
    },
    { 
      name: 'Tefal', 
      rating: 4.6, 
      products: 47,
      since: 2021,
      category: 'Kitchen'
    },
  ];

  const benefits = [
    { 
      icon: <Shield className="text-[#EA591D]" size={14} />, 
      title: "Full Warranty", 
      description: "Manufacturer coverage",
      stat: "2-5 Years"
    },
    { 
      icon: <Clock className="text-[#EA591D]" size={14} />, 
      title: "Quick Service", 
      description: "24-hour response",
      stat: "15min Avg"
    },
    { 
      icon: <Package className="text-[#EA591D]" size={14} />, 
      title: "Genuine Parts", 
      description: "100% original",
      stat: "0% Counterfeit"
    },
    { 
      icon: <Award className="text-[#EA591D]" size={14} />, 
      title: "Quality", 
      description: "Certified products",
      stat: "99.3%"
    },
  ];

  return (
    <section id="brands" className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-bold text-white mb-1 pt-10">
            Top <span className="text-[#EA591D]">Partner</span> Brands
          </h2>
          <p className="text-gray-300 text-xs max-w-sm mx-auto">
            Official partnerships with 150+ world-class manufacturers
          </p>
        </div>

        {/* قسم الصورة الخلفية */}
        <div className="relative mb-5 rounded-xl overflow-hidden">
          {/* طبقة التدرج الشفاف فوق الصورة */}
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          
          {/* الصورة الخلفية */}
          <div 
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/Home Appliances.jpeg")'
            }}
          >
            {/* يمكنك تغيير الرابط بصورة أخرى تناسب المحتوى */}
          </div>
          
          {/* محتوى نصي فوق الصورة */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-transparent backdrop-blur-sm p-3 rounded-lg  border-[#EA591D]/30">
              <h3 className="text-white text-sm font-bold mb-1">Premium Electronics Collection</h3>
              <p className="text-gray-200 text-xs max-w-md">
                Discover our curated selection of top-tier appliances and gadgets from leading global brands
              </p>
            </div>
          </div>
        </div>

        {/* باقي المحتوى */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border border-[#EA591D]/10 hover:border-[#EA591D]/25 transition-all duration-300 cursor-pointer hover:shadow-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">{brand.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="text-gray-400 text-[10px]">{brand.category}</div>
                    <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="text-gray-400 text-[10px]">Since {brand.since}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-0.5">
                    <Star className="text-yellow-500" size={10} fill="currentColor" />
                    <span className="text-white text-xs font-medium">{brand.rating}</span>
                  </div>
                  <div className="text-gray-400 text-[10px] mt-0.5">{brand.products} products</div>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-gray-300 text-[10px] mb-0.5">
                  <span>Availability</span>
                  <span>98%</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#EA591D] to-[#f97316] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(98, 80 + (index * 3))}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-1 rounded">
                    <Check className="text-[#EA591D]" size={10} />
                  </div>
                  <span className="text-gray-300 text-[11px]">Official Partner</span>
                </div>
                <button className="text-[#EA591D] hover:text-[#f97316] text-[10px] font-medium transition-colors group-hover:translate-x-0.5 duration-300">
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ... باقي الكود كما هو ... */}
        <div className="mb-4">
          <div className="grid grid-cols-4 gap-1.5">
            <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-2 rounded text-center">
              <div className="text-white font-bold text-sm">150+</div>
              <div className="text-gray-400 text-[10px]">Brands</div>
            </div>
            <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-2 rounded text-center">
              <div className="text-white font-bold text-sm">5K+</div>
              <div className="text-gray-400 text-[10px]">Products</div>
            </div>
            <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-2 rounded text-center">
              <div className="text-white font-bold text-sm">100%</div>
              <div className="text-gray-400 text-[10px]">Genuine</div>
            </div>
            <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-2 rounded text-center">
              <div className="text-white font-bold text-sm">5Y</div>
              <div className="text-gray-400 text-[10px]">Warranty</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0d1229] via-[#1a2138] to-[#0d1229] rounded-lg p-3 border border-[#EA591D]/15">
          <h3 className="text-sm font-bold text-white mb-3 text-center">Why Choose Our Brands?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-2 group hover:bg-[#1a2138]/50 rounded transition-colors duration-300 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center space-x-1.5 mb-1">
                  <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-1.5 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div className="text-white font-bold text-xs">{benefit.stat}</div>
                </div>
                <h4 className="text-white font-medium text-[11px] mb-0.5">{benefit.title}</h4>
                <p className="text-gray-400 text-[10px]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 pb-10">
          <button className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D]/10 to-transparent hover:from-[#EA591D]/20 hover:to-[#f97316]/10 px-3 py-1.5 rounded-lg border border-[#EA591D]/20 hover:border-[#EA591D]/30 transition-all duration-300 text-white text-xs font-medium cursor-pointer">
            <span>Explore All Brands</span>
            <Zap size={10} className="text-[#EA591D]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;