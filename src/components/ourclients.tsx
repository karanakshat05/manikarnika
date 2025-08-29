"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const colleges = [
  { 
    name: "IMS BHU", 
    slug: "ims-bhu", 
    img: "/images/client/imsbhu.png", 
    fest: "Medical Fest" 
  },
  { 
    name: "MLRIT Hyderabad", 
    slug: "mlrit-hyderabad", 
    img: "/images/mlrit.png", 
    fest: "Techno-Cultural Fest" 
  },
  { 
    name: "GIM Goa", 
    slug: "gim-goa", 
    img: "/images/gim.png", 
    fest: "Management Fest" 
  },
  { 
    name: "IIM Sirmaur", 
    slug: "iim-sirmaur", 
    img: "/images/client/iim_sirmaur.jpg", 
    fest: "Cultural & Management Fest" 
  },
  { 
    name: "AIIMS Gorakhpur", 
    slug: "aiims-gorakhpur", 
    img: "/images/aiimsgorakhpur.png", 
    fest: "Medical Fest" 
  },
  { 
    name: "AIIMS Raebareli", 
    slug: "aiims-raebareli", 
    img: "/images/aiimsraebareli.png", 
    fest: "Medical Fest" 
  },
  { 
    name: "KNIT Sultanpur", 
    slug: "knit-sultanpur", 
    img: "/images/knitsultanpur.png", 
    fest: "Tech Fest" 
  },
  { 
    name: "Pawapuri Medical College", 
    slug: "pawapuri-medical", 
    img: "/images/pawapuri.png", 
    fest: "Medical Fest" 
  },
  { 
    name: "JP University Solan (HP)", 
    slug: "jp-university-solan", 
    img: "/images/jpunisolan.png", 
    fest: "Annual Fest" 
  },
  { 
    name: "XLRI Jhajjar (Delhi)", 
    slug: "xlri-jhajjar", 
    img: "/images/xlrijhajjar.png", 
    fest: "Management Fest" 
  },
  { 
    name: "IIT Jodhpur", 
    slug: "iit-jodhpur", 
    img: "/images/iitjodhpur.png", 
    fest: "Ignus – TechnoCultural Fest" 
  },
  { 
    name: "IIT BHU", 
    slug: "iit-bhu", 
    img: "/images/iitbhu.png", 
    fest: "Technex – Tech Fest" 
  },
];

export default function CollegesPage() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-20 text-white">
      {/* 🔥 Top Banner Section */}
      <div className="relative mb-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image with overlay */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative inline-block w-full md:w-1/2"
        >
          <div className="absolute -inset-2 border-2 border-white rounded-lg opacity-60 group-hover:opacity-100 transition"></div>
          <Image
            src="/images/colleges-banner.jpg"
            alt="Colleges Banner"
            width={600}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />

          {/* Label Overlay */}
          <div className="absolute bottom-6 left-6 bg-white text-black font-extrabold px-6 py-2 text-xl shadow-lg">
            COLLEGES
          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4">Our College Partners</h2>
          <p className="text-lg text-gray-300 max-w-xl">
            We’re proud to collaborate with some of the most{" "}
            <span className="text-pink-500 font-semibold">prestigious institutions</span> across India,
            making their cultural and technical fests even more memorable.
          </p>
        </motion.div>
      </div>

      {/* 🔥 Grid of Colleges */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {colleges.map((college, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center group cursor-pointer"
            >
              {/* Image with border effect */}
              <div className="relative inline-block">
                <div className="absolute -inset-2 border-2 border-white rounded-lg opacity-60 group-hover:opacity-100 transition"></div>
                <Image
                  src={college.img}
                  alt={college.name}
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-56 h-56 transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* College Name */}
              <h3 className="mt-4 text-lg font-bold text-pink-400">{college.name}</h3>

              {/* Fest Name */}
              <p className="text-sm text-gray-300 font-semibold">{college.fest}</p>

              {/* Know More */}
              <Link
                href={`/colleges/${college.slug}`}
                className="block text-sm text-gray-300 font-semibold mt-1 hover:text-pink-400 transition"
              >
                Know More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
