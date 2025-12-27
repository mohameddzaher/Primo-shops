import { Truck, Shield, Headphones, Clock, Award, RefreshCw, CheckCircle } from 'lucide-react';

const ServicesContent = () => {
  const services = [
    {
      icon: <Truck className="text-[#EA591D]" size={24} />,
      title: "Fast Delivery",
      description: "24-48 hour delivery across Egypt and Saudi Arabia",
      details: ["Same-day in major cities", "Real-time tracking", "Free installation"]
    },
    {
      icon: <Shield className="text-[#EA591D]" size={24} />,
      title: "Extended Warranty",
      description: "2-5 years comprehensive warranty on all products",
      details: ["Free repair service", "Parts replacement", "Annual maintenance"]
    },
    {
      icon: <Headphones className="text-[#EA591D]" size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock technical support",
      details: ["Phone & chat support", "On-site service", "Remote troubleshooting"]
    },
    {
      icon: <Clock className="text-[#EA591D]" size={24} />,
      title: "Quick Installation",
      description: "Professional installation within 24 hours",
      details: ["Certified technicians", "Safety checks", "User training"]
    },
    {
      icon: <Award className="text-[#EA591D]" size={24} />,
      title: "Quality Assurance",
      description: "100% genuine products with quality checks",
      details: ["Original packaging", "Quality inspection", "Performance testing"]
    },
    {
      icon: <RefreshCw className="text-[#EA591D]" size={24} />,
      title: "Easy Returns",
      description: "30-day return policy for defective products",
      details: ["Free pick-up", "Instant refund", "Replacement option"]
    }
  ];

  const serviceStats = [
    { value: "99.2%", label: "Service Satisfaction" },
    { value: "15min", label: "Avg. Response Time" },
    { value: "24h", label: "Delivery Promise" },
    { value: "200+", label: "Service Engineers" }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EBE9E9] mb-4">
            Our <span className="text-[#EA591D]">Premium</span> Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Beyond selling appliances - we provide complete home solutions with exceptional service that continues long after your purchase
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0d1229] to-[#1D2340] p-6 rounded-2xl border border-[#EA591D]/20 hover:border-[#EA591D]/40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#EBE9E9] mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="text-[#EA591D]" size={14} />
                    <span className="text-gray-300 text-xs">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Stats */}
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0d1229] to-[#1D2340] p-6 rounded-xl text-center border border-[#EA591D]/10 hover:border-[#EA591D]/30 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#EA591D] mb-2">{stat.value}</div>
                <div className="text-[#EBE9E9] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-r from-[#0d1229] via-[#1D2340] to-[#0d1229] rounded-2xl p-8 border border-[#EA591D]/20">
          <h3 className="text-2xl font-bold text-[#EBE9E9] mb-6 text-center">Our Service Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Request</h4>
              <p className="text-gray-400 text-xs">Contact us via phone, app, or website</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Schedule</h4>
              <p className="text-gray-400 text-xs">Choose convenient time slot</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Service</h4>
              <p className="text-gray-400 text-xs">Expert technician handles everything</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#EA591D] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <h4 className="text-[#EBE9E9] font-semibold mb-2">Follow-up</h4>
              <p className="text-gray-400 text-xs">Quality check and satisfaction survey</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-[#EBE9E9] mb-4">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+201000000000" 
              className="bg-[#EA591D] text-white px-6 py-3 rounded-lg hover:bg-[#d14c18] transition-colors duration-300 font-semibold text-sm cursor-pointer"
            >
              Call Now: +20 100 000 0000
            </a>
            <a 
              href="https://your-ecommerce-site.com" 
              target="_blank"
              className="border border-[#EA591D] text-[#EA591D] px-6 py-3 rounded-lg hover:bg-[#EA591D] hover:text-white transition-colors duration-300 font-semibold text-sm cursor-pointer"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;