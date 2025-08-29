"use client";

import Image from "next/image";

const brands = [
  { name: "Coca Cola", logo: "/images/cocacola.png" },
  { name: "Pepsi", logo: "/images/pepsi.png" },
  { name: "Red Bull", logo: "/images/redbull.png" },
  { name: "Spotify", logo: "/images/spotify.png" },
  { name: "Samsung", logo: "/images/samsung.png" },
];

export default function BrandCollaborations() {
  return (
    <section id="brand-collaborations" className="relative w-full py-30 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Brand Collaborations</h2>
        <p className="text-gray-400 mt-2">
          Partnering with leading global brands to create iconic experiences.
        </p>
      </div>

      {/* Marquee Effect */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={80}
                className="object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
