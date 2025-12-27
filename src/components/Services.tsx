import { Truck, Shield, Headphones, Clock, Award, RefreshCw, CheckCircle, Users, Zap, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="text-[#EA591D]" size={16} />,
      title: "Fast Delivery",
      description: "24-48h across Egypt & KSA",
      features: ["Same-day in major cities", "Live tracking", "Free installation"],
      stat: "98.5% on-time"
    },
    {
      icon: <Shield className="text-[#EA591D]" size={16} />,
      title: "Extended Warranty",
      description: "2-5 years comprehensive",
      features: ["Free repair service", "Genuine parts", "Annual checkups"],
      stat: "2M+ covered"
    },
    {
      icon: <Headphones className="text-[#EA591D]" size={16} />,
      title: "24/7 Support",
      description: "Always available",
      features: ["Phone & chat", "On-site visits", "Remote assistance"],
      stat: "15min response"
    },
    {
      icon: <Clock className="text-[#EA591D]" size={16} />,
      title: "Quick Installation",
      description: "Within 24 hours",
      features: ["Certified experts", "Safety checks", "User training"],
      stat: "50K+ installed"
    },
    {
      icon: <Award className="text-[#EA591D]" size={16} />,
      title: "Quality Assurance",
      description: "100% genuine products",
      features: ["Original packaging", "Quality checks", "Performance tests"],
      stat: "0% defects"
    },
    {
      icon: <RefreshCw className="text-[#EA591D]" size={16} />,
      title: "Easy Returns",
      description: "30-day policy",
      features: ["Free pick-up", "Instant refund", "Quick replacement"],
      stat: "24h processing"
    }
  ];

  const stats = [
    { value: "99.2%", label: "Satisfaction", icon: <Star size={12} /> },
    { value: "15min", label: "Response Time", icon: <Zap size={12} /> },
    { value: "2M+", label: "Services Done", icon: <Users size={12} /> }
  ];

  return (
    <section id="services" className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-6 md:py-8 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-bold text-white mb-1 pt-10">
            Our <span className="text-[#EA591D]">Premium</span> Services
          </h2>
          <p className="text-gray-300 text-xs max-w-sm mx-auto">
            Complete solutions with exceptional service quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-lg border border-[#EA591D]/10 hover:border-[#EA591D]/25 transition-all duration-300 cursor-pointer hover:shadow-md relative"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-tight">{service.title}</h3>
                    <p className="text-gray-300 text-[11px]">{service.description}</p>
                  </div>
                </div>
                <div className="text-[#EA591D] text-[10px] font-medium bg-[#EA591D]/5 px-1.5 py-0.5 rounded">
                  {service.stat}
                </div>
              </div>
              
              <div className="space-y-1">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5">
                    <CheckCircle className="text-[#EA591D] flex-shrink-0" size={10} />
                    <span className="text-gray-200 text-[11px]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EA591D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0d1229] via-[#1a2138] to-[#0d1229] rounded-lg p-3 border border-[#EA591D]/15 mb-4">
          <div className="grid grid-cols-3 gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <div className="text-[#EA591D]">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-gray-300 text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-[#EA591D]/5 to-transparent px-3 py-1 rounded-full border border-[#EA591D]/10">
            <Shield className="text-[#EA591D]" size={10} />
            <span className="text-white text-xs">All services backed by our satisfaction guarantee</span>
          </div>
          
          <div className='pb-10'>
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D] to-[#f97316] hover:from-[#f97316] hover:to-[#EA591D] text-white px-3 py-1.5 rounded-lg hover:shadow-sm transition-all duration-300 text-xs font-medium cursor-pointer "
            >
              <Headphones size={10} />
              <span>Need Assistance?</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;