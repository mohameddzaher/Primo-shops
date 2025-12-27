'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career' },
  ];

  const handlePhoneClick = () => {
    window.location.href = 'tel:+966540278636'; // غير الرقم حسب حاجتك
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-[#050816]/95 to-[#0b1024]/95 backdrop-blur-lg shadow-lg' 
          : 'bg-gradient-to-r from-[#050816] to-[#0b1024]'
      }`}
    >
      <div className="container mx-auto px-4 py-1 md:py-1">
        <div className="flex items-center justify-around h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="relative w-16 h-9">
              <Image 
                src="/images/logo.png" 
                alt="Primo Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || 
                (item.path !== '/' && pathname?.startsWith(item.path));
              
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-[#EA591D] font-semibold' 
                      : 'text-gray-300 hover:text-[#EA591D]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-[#EA591D] to-[#f97316] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={handlePhoneClick}
              className="cursor-pointer flex items-center space-x-1.5 text-gray-300 hover:text-[#EA591D] transition-colors duration-300 px-2 py-1"
            >
              <Phone size={16} />
              {/* <span className="text-xs font-medium">+966 54 027 8636</span> */}
            </button>
            
            <Link
              href="https://your-ecommerce-site.com"
              target="_blank"
              className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#EA591D] to-[#f97316] hover:from-[#f97316] hover:to-[#EA591D] px-3 py-2 rounded-lg text-white text-xs font-medium transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart size={14} />
              <span>Shop Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-[#EA591D] transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation - Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#050816] to-[#0b1024] shadow-xl border-t border-[#EA591D]/20">
            <div className="container mx-auto px-4 py-2">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`block py-2.5 px-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                        isActive
                          ? 'bg-gradient-to-r from-[#EA591D]/20 to-transparent text-[#EA591D] font-semibold border-l-2 border-[#EA591D]'
                          : 'text-gray-300 hover:text-[#EA591D] hover:bg-white/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-3 border-t border-[#EA591D]/10 space-y-2">
                  <button
                    onClick={() => {
                      handlePhoneClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-[#EA591D] transition-colors duration-300 w-full py-2.5"
                  >
                    <Phone size={16} />
                    <span className="cursor-pointer text-sm font-medium">+966 54 027 8636</span>
                  </button>
                  
                  <Link
                    href="https://your-ecommerce-site.com"
                    target="_blank"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-[#EA591D] to-[#f97316] hover:from-[#f97316] hover:to-[#EA591D] px-4 py-2.5 rounded-lg text-white text-sm font-medium transition-all duration-300 w-full"
                  >
                    <ShoppingCart size={16} />
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;