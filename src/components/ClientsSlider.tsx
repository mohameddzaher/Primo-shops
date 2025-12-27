"use client";

import Image from "next/image";

const ClientsSlider = () => {
  const clients = [
    { name: "LG", logo: "/images/lg.png" },
    { name: "Braun", logo: "/images/braun.png" },
    { name: "Philips", logo: "/images/philips.png" },
    { name: "Panasonic", logo: "/images/panasonic.png" },
    { name: "Tefal", logo: "/images/tefal.png" },
    { name: "Kenwood", logo: "/images/kenwood.svg" },
    { name: "Tineco", logo: "/images/tineco.png" },
    { name: "Adison", logo: "/images/adison.webp" },
    { name: "Ecovacs", logo: "/images/ecovacs.png" },
    { name: "Black & Decker", logo: "/images/blackanddecker.webp" },
    { name: "Dyson", logo: "/images/dyson.webp" },
    { name: "Bissell", logo: "/images/bissell.png" },
    { name: "Jano", logo: "/images/jano.png" },
    { name: "Delonghi", logo: "/images/delonghi.png" },
    { name: "Karcher", logo: "/images/karcher.png" },
    { name: "Clikon", logo: "/images/clikon.png" },
    { name: "Mlay", logo: "/images/mlay.webp" },
    { name: "Ninja", logo: "/images/ninja.webp" },
    { name: "Hover", logo: "/images/hover.webp" },
    { name: "Nutricook", logo: "/images/nutricook.jpg" },
    { name: "Okka", logo: "/images/okka.webp" },
    { name: "Al Seif", logo: "/images/saif.webp" },
  ];

  return (
    <section className="py-10 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">
            Trusted by <span className="text-[#EA591D]">Leading Brands</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Official partners with world-class manufacturers
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="clients-slider">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-[160px] sm:w-[180px]
                  h-[90px]
                  mr-6
                  bg-gradient-to-br from-[#0d1229] to-[#1a2138]
                  border border-white/10
                  rounded-xl
                  flex items-center justify-center
                  hover:border-[#EA591D]/50
                  transition-all duration-300
                  transform-gpu
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-[50px]"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .clients-slider {
          display: flex;
          width: max-content;
          animation: scroll 26s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .clients-slider:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .clients-slider {
            animation-duration: 34s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSlider;