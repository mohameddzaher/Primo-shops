// import { Facebook, Twitter, Instagram, Youtube, Apple, Play, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-t from-[#050816] to-[#0b1024]  border-[#EA591D]/20">
//       <div className="container mx-auto px-4 py-8 md:py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 justify-items-center lg:justify-items-stretch">
//           {/* Company Info - Centered for all screens */}
//           <div className="flex flex-col items-center lg:items-center space-y-4 max-w-[280px] w-full">
//             <Link href="/" className="group cursor-pointer">
//               <div className="relative w-20 h-16 md:w-20 md:h-16 mx-auto lg:mx-0">
//                 <Image 
//                   src="/images/logo.png" 
//                   alt="Primo Logo" 
//                   fill
//                   className="object-contain transition-transform group-hover:scale-105 duration-300"
//                   priority
//                 />
//               </div>
//             </Link>
//             <p className="text-gray-300 text-xs md:text-sm text-center lg:text-left leading-relaxed">
//               Premier home appliances retailer in the Middle East since 2019, delivering quality and excellence.
//             </p>
//             <div className="flex space-x-3 pt-2 justify-center lg:justify-start">
//               {[
//                 { Icon: Facebook, label: 'Facebook' },
//                 { Icon: Twitter, label: 'Twitter' },
//                 { Icon: Instagram, label: 'Instagram' },
//                 { Icon: Youtube, label: 'YouTube' }
//               ].map((social, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="group relative"
//                   aria-label={social.label}
//                 >
//                   <div className="relative z-10 p-2 bg-gradient-to-br from-[#1a2138] to-[#0d1229] rounded-lg border border-[#EA591D]/10 group-hover:border-[#EA591D]/30 transition-all duration-300">
//                     <social.Icon 
//                       size={14} 
//                       className="text-gray-300 group-hover:text-[#EA591D] transition-colors duration-300" 
//                     />
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#EA591D]/0 to-[#f97316]/0 group-hover:from-[#EA591D]/10 group-hover:to-[#f97316]/10 blur-sm rounded-lg transition-all duration-300" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links - Centered for mobile, left for desktop */}
//           <div className="flex flex-col items-center lg:items-start max-w-[280px] w-full">
//             <h3 className="text-[#EA591D] font-semibold text-sm md:text-base mb-4 flex items-center space-x-1">
//               <span>Quick Links</span>
//               <ArrowUpRight size={12} />
//             </h3>
//             <ul className="space-y-2.5 w-full">
//               {[
//                 { name: 'About Us', path: '/about' },
//                 { name: 'Our Brands', path: '/brands' },
//                 { name: 'Services', path: '/services' },
//                 { name: 'Career', path: '/career' },
//                 { name: 'Contact Us', path: '/contact' }
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link 
//                     href={item.path}
//                     className="group flex items-center justify-center lg:justify-between text-gray-300 hover:text-[#EA591D] transition-colors duration-300 text-xs md:text-sm cursor-pointer py-1 px-2 lg:px-0"
//                   >
//                     <span>{item.name}</span>
//                     <ArrowUpRight 
//                       size={10} 
//                       className="hidden lg:block opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" 
//                     />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info - Centered for mobile, left for desktop */}
//           <div className="flex flex-col items-center lg:items-start max-w-[280px] w-full">
//             <h3 className="text-[#EA591D] font-semibold text-sm md:text-base mb-4">Contact Us</h3>
//             <div className="space-y-3 w-full">
//               <div className="flex items-start space-x-2.5 group cursor-pointer px-2 lg:px-0">
//                 <div className="bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5 p-2 rounded-lg mt-0.5 flex-shrink-0">
//                   <MapPin size={12} className="text-[#EA591D]" />
//                 </div>
//                 <div>
//                   <div className="text-white font-medium text-xs">Locations</div>
//                   <div className="text-gray-300 text-xs mt-0.5">Cairo, Egypt & Riyadh, KSA</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-2.5 group cursor-pointer px-2 lg:px-0">
//                 <div className="bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5 p-2 rounded-lg flex-shrink-0">
//                   <Phone size={12} className="text-[#EA591D]" />
//                 </div>
//                 <div>
//                   <div className="text-white font-medium text-xs">24/7 Support</div>
//                   <a 
//                     href="tel:+966540278636" 
//                     className="text-gray-300 hover:text-[#EA591D] transition-colors duration-300 text-xs"
//                   >
//                     +966 54 027 8636
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-2.5 group cursor-pointer px-2 lg:px-0">
//                 <div className="bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5 p-2 rounded-lg flex-shrink-0">
//                   <Mail size={12} className="text-[#EA591D]" />
//                 </div>
//                 <div>
//                   <div className="text-white font-medium text-xs">Email</div>
//                   <a 
//                     href="mailto:info@primo-appliances.com" 
//                     className="text-gray-300 hover:text-[#EA591D] transition-colors duration-300 text-xs break-all"
//                   >
//                     info@primo-appliances.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Apps - Centered for mobile, left for desktop */}
//           <div className="flex flex-col items-center lg:items-start max-w-[280px] w-full">
//             <h3 className="text-[#EA591D] font-semibold text-sm md:text-base mb-4">Mobile Apps</h3>
//             <p className="text-gray-300 text-xs md:text-sm text-center lg:text-left mb-3">
//               Experience premium shopping on your mobile devices
//             </p>
//             <div className="space-y-2.5 w-full">
//               <a 
//                 href="#" 
//                 className="group relative bg-gradient-to-br from-[#1a2138] to-[#0d1229] hover:from-[#EA591D]/5 hover:to-[#f97316]/5 p-3 rounded-xl  border-[#EA591D]/15 hover:border-[#EA591D]/30 transition-all duration-300 cursor-pointer flex items-center space-x-3 justify-center lg:justify-start"
//               >
//                 <div className="bg-gradient-to-br from-[#EA591D] to-[#f97316] p-2 rounded-lg">
//                   <Apple size={16} className="text-white" />
//                 </div>
//                 <div className="flex-1 text-center lg:text-left">
//                   <div className="text-gray-400 text-xs">Download on</div>
//                   <div className="text-white font-medium text-sm">App Store</div>
//                 </div>
//                 <ArrowUpRight 
//                   size={12} 
//                   className="text-gray-400 group-hover:text-[#EA591D] transition-colors duration-300 hidden lg:block" 
//                 />
//               </a>
              
//               <a 
//                 href="#" 
//                 className="group relative bg-gradient-to-br from-[#1a2138] to-[#0d1229] hover:from-[#EA591D]/5 hover:to-[#f97316]/5 p-3 rounded-xl  border-[#EA591D]/15 hover:border-[#EA591D]/30 transition-all duration-300 cursor-pointer flex items-center space-x-3 justify-center lg:justify-start"
//               >
//                 <div className="bg-gradient-to-br from-[#EA591D] to-[#f97316] p-2 rounded-lg">
//                   <Play size={14} className="text-white" />
//                 </div>
//                 <div className="flex-1 text-center lg:text-left">
//                   <div className="text-gray-400 text-xs">Get it on</div>
//                   <div className="text-white font-medium text-sm">Google Play</div>
//                 </div>
//                 <ArrowUpRight 
//                   size={12} 
//                   className="text-gray-400 group-hover:text-[#EA591D] transition-colors duration-300 hidden lg:block" 
//                 />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright - Centered properly */}
//         <div className="mt-8 pt-6 border-t border-gray-800/50">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-center lg:text-left">
//             <div className="lg:flex-1">
//               <p className="text-gray-400 text-xs">
//                 &copy; {new Date().getFullYear()} Primo Home Appliances. All rights reserved.
//               </p>
//             </div>
            
//             <div className="lg:flex-1">
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
//                 <Link href="/privacy" className="text-gray-400 hover:text-[#EA591D] transition-colors duration-300">
//                   Privacy Policy
//                 </Link>
//                 <span className="text-gray-600 hidden sm:inline">•</span>
//                 <Link href="/terms" className="text-gray-400 hover:text-[#EA591D] transition-colors duration-300">
//                   Terms of Service
//                 </Link>
//                 <span className="text-gray-600 hidden sm:inline">•</span>
//                 <Link href="/sitemap" className="text-gray-400 hover:text-[#EA591D] transition-colors duration-300">
//                   Sitemap
//                 </Link>
//               </div>
//             </div>
            
//             <div className="lg:flex-1 flex justify-center lg:justify-end">
//               <a 
//                 href="https://your-ecommerce-site.com" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-1 text-[#EA591D] hover:text-[#f97316] transition-colors duration-300 text-xs font-medium group"
//               >
//                 <span>Visit Our Store</span>
//                 <ArrowUpRight 
//                   size={10} 
//                   className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


'use client';

import { Facebook, Twitter, Instagram, Youtube, Apple, Play, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = {
    facebook: 'https://www.facebook.com/groups/287784150079313',
    twitter: 'https://www.facebook.com/groups/287784150079313',
    instagram: 'https://www.facebook.com/groups/287784150079313',
    youtube: 'https://www.facebook.com/groups/287784150079313'
  };

  const appLinks = {
    appStore: 'https://apps.apple.com/app/primo-appliances/id123456789',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.primo.appliances'
  };

  const handleSocialClick = (platform: keyof typeof socialLinks) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  const handleAppClick = (store: keyof typeof appLinks) => {
    window.open(appLinks[store], '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-t from-[#050816] to-[#0b1024] border-t border-[#EA591D]/20">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 justify-items-center lg:justify-items-stretch">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start space-y-4 max-w-[280px] w-full">
            <Link href="/" className="group cursor-pointer">
              <div className="relative w-20 h-16 md:w-20 md:h-16 mx-auto lg:mx-0">
                <Image 
                  src="/images/logo.png" 
                  alt="Primo Logo" 
                  fill
                  className="object-contain transition-transform group-hover:scale-105 duration-300"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-300 text-xs md:text-sm text-center lg:text-left leading-relaxed">
              Premier home appliances retailer in the Middle East since 2019, delivering quality and excellence.
            </p>
            <div className=" flex space-x-3 pt-2 justify-center lg:justify-start">
              {[
                { Icon: Facebook, label: 'Facebook', platform: 'facebook' as const },
                { Icon: Twitter, label: 'Twitter', platform: 'twitter' as const },
                { Icon: Instagram, label: 'Instagram', platform: 'instagram' as const },
                { Icon: Youtube, label: 'YouTube', platform: 'youtube' as const }
              ].map((social) => (
                <button 
                  key={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="cursor-pointer relative z-10 p-2 bg-gradient-to-br from-[#1a2138] to-[#0d1229] rounded-lg border border-[#EA591D]/10 group-hover:border-[#EA591D]/30 transition-all duration-300">
                    <social.Icon 
                      size={14} 
                      className="text-gray-300 group-hover:text-[#EA591D] transition-colors duration-300" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EA591D]/0 to-[#f97316]/0 group-hover:from-[#EA591D]/10 group-hover:to-[#f97316]/10 blur-sm rounded-lg transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start max-w-[280px] w-full">
            <h3 className="text-[#EA591D] font-semibold text-sm md:text-base mb-4 flex items-center space-x-1">
              <span>Quick Links</span>
              <ArrowUpRight size={12} />
            </h3>
            <ul className="space-y-2.5 w-full">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
                { name: 'Career', path: '/career' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="group flex items-center justify-center lg:justify-between text-gray-300 hover:text-[#EA591D] transition-colors duration-300 text-xs md:text-sm cursor-pointer py-1 px-2 lg:px-0"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight 
                      size={10} 
                      className="hidden lg:block opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start max-w-[280px] w-full">
            <h3 className="text-[#EA591D] font-semibold text-sm md:text-base mb-4">Contact Us</h3>
            <div className="space-y-3 w-full">
              <div className="flex items-start space-x-2.5 group cursor-pointer px-2 lg:px-0">
                <div className="bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5 p-2 rounded-lg mt-0.5 flex-shrink-0">
                  <MapPin size={12} className="text-[#EA591D]" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs">Locations</div>
                  <div className="text-gray-300 text-xs mt-0.5">Cairo, Egypt & Riyadh, KSA</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2.5 group cursor-pointer px-2 lg:px-0">
                <div className="bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5 p-2 rounded-lg flex-shrink-0">
                  <Phone size={12} className="text-[#EA591D]" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs">24/7 Support</div>
                  <a 
                    href="tel:+966540278636" 
                    className="text-gray-300 hover:text-[#EA591D] transition-colors duration-300 text-xs"
                  >
                    +966 54 027 8636
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2.5 group cursor-pointer px-2 lg:px-0">
                <div className="bg-gradient-to-br from-[#EA591D]/10 to-[#EA591D]/5 p-2 rounded-lg flex-shrink-0">
                  <Mail size={12} className="text-[#EA591D]" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs">Email</div>
                  <a 
                    href="mailto:info@primo-appliances.com" 
                    className="text-gray-300 hover:text-[#EA591D] transition-colors duration-300 text-xs break-all"
                  >
                    info@primo-appliances.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="flex flex-col items-center lg:items-start max-w-[280px] w-full">
            <h3 className="text-[#EA591D] font-semibold text-sm md:text-base mb-4">Mobile Apps</h3>
            <p className="text-gray-300 text-xs md:text-sm text-center lg:text-left mb-3">
              Experience premium shopping on your mobile devices
            </p>
            <div className="space-y-2.5 w-full">
              <button 
                onClick={() => handleAppClick('appStore')}
                className="group relative bg-gradient-to-br from-[#1a2138] to-[#0d1229] hover:from-[#EA591D]/5 hover:to-[#f97316]/5 p-3 rounded-xl  border-[#EA591D]/15 hover:border-[#EA591D]/30 transition-all duration-300 cursor-pointer flex items-center space-x-3 justify-center lg:justify-start w-full"
              >
                <div className="bg-gradient-to-br from-[#EA591D] to-[#f97316] p-2 rounded-lg">
                  <Apple size={16} className="text-white" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-gray-400 text-xs">Download on</div>
                  <div className="text-white font-medium text-sm">App Store</div>
                </div>
                <ArrowUpRight 
                  size={12} 
                  className="text-gray-400 group-hover:text-[#EA591D] transition-colors duration-300 hidden lg:block" 
                />
              </button>
              
              <button 
                onClick={() => handleAppClick('googlePlay')}
                className="group relative bg-gradient-to-br from-[#1a2138] to-[#0d1229] hover:from-[#EA591D]/5 hover:to-[#f97316]/5 p-3 rounded-xl  border-[#EA591D]/15 hover:border-[#EA591D]/30 transition-all duration-300 cursor-pointer flex items-center space-x-3 justify-center lg:justify-start w-full"
              >
                <div className="bg-gradient-to-br from-[#EA591D] to-[#f97316] p-2 rounded-lg">
                  <Play size={14} className="text-white" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-gray-400 text-xs">Get it on</div>
                  <div className="text-white font-medium text-sm">Google Play</div>
                </div>
                <ArrowUpRight 
                  size={12} 
                  className="text-gray-400 group-hover:text-[#EA591D] transition-colors duration-300 hidden lg:block" 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-center lg:text-left">
            <div className="lg:flex-1">
              <p className="text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} Primo Home Appliances. All rights reserved.
              </p>
            </div>
            
            <div className="lg:flex-1">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
                <button
                  onClick={() => window.open('/privacy', '_blank')}
                  className="text-gray-400 hover:text-[#EA591D] transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <button
                  onClick={() => window.open('/terms', '_blank')}
                  className="text-gray-400 hover:text-[#EA591D] transition-colors duration-300"
                >
                  Terms of Service
                </button>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <button
                  onClick={() => window.open('/sitemap', '_blank')}
                  className="text-gray-400 hover:text-[#EA591D] transition-colors duration-300"
                >
                  Sitemap
                </button>
              </div>
            </div>
            
            <div className="lg:flex-1 flex justify-center lg:justify-end">
              <button
                onClick={() => window.open('https://your-ecommerce-site.com', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center space-x-1 text-[#EA591D] hover:text-[#f97316] transition-colors duration-300 text-xs font-medium group"
              >
                <span>Visit Our Store</span>
                <ArrowUpRight 
                  size={10} 
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;