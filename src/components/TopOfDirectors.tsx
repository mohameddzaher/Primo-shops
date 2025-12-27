"use client";

import Image from "next/image";

const directors = [
  {
    name: "Mohamed Mghawry",
    role: "CEO & Founder",
    img: "/images/mohamed.png",
  },
  {
    name: "Mai Elziny",
    role: "COO",
    img: "/images/mai.png",
  },
  {
    name: "Nader Magdy",
    role: "CTO",
    img: "/images/naderr.png",
  },
];

const TopOfDirectors = () => {
  return (
    <section className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-bold text-white mb-1">
            Meet Our <span className="text-[#EA591D]">BOD</span>
          </h2>
          <p className="text-gray-300 text-xs max-w-sm mx-auto">
            The visionaries leading our company to success
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {directors.map((dir, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-lg border border-[#EA591D]/10 hover:border-[#EA591D]/25 transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              <div className="w-24 h-34 mb-2 relative rounded-full overflow-hidden">
                <Image
                  src={dir.img}
                  alt={dir.name}
                  width={96}
                  height={96}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-white text-sm font-semibold">{dir.name}</h3>
              {/* <p className="text-gray-300 text-[10px]">{dir.role}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopOfDirectors;