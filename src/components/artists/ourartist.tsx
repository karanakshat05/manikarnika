"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "EDM", "Bollywood", "Comedy", "Indie"];

const artists = [
  { name: "Aceaxe", slug: "aceaxe", img: "/images/djtracer.png", category: "EDM" },
  { name: "Akade", slug: "akade", img: "/images/kanikakapoor.png", category: "Bollywood" },
  { name: "Aron Chupa", slug: "aron-chupa", img: "/images/VOILAFLYER.png", category: "EDM" },
];

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtists =
    selectedCategory === "All"
      ? artists
      : artists.filter((artist) => artist.category === selectedCategory);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-20 text-white">
      {/* 🔥 Top Banner Section */}
<div className="relative mb-20 flex flex-col md:flex-row items-center gap-10">
  {/* Left Side Image with overlay */}
  <motion.div
    initial={{ opacity: 0, x: -100, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.3 }} // 👈 re-trigger on scroll
    className="relative inline-block w-full md:w-1/2"
  >
    <div className="absolute -inset-2 border-2 border-white rounded-lg opacity-60 group-hover:opacity-100 transition"></div>
    <Image
      src="/images/artists.jpg"
      alt="Artists Banner"
      width={600}
      height={300}
      className="rounded-lg shadow-lg object-cover"
    />

    {/* Label Overlay */}
    <div className="absolute bottom-6 left-6 bg-white text-black font-extrabold px-6 py-2 text-xl shadow-lg">
      ARTISTS
    </div>

    {/* Decorative circle */}
    <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-white rounded-full overflow-hidden opacity-40">
      <div className="w-full h-full bg-[repeating-linear-gradient(45deg,white,white_4px,transparent_4px,transparent_8px)]"></div>
    </div>
  </motion.div>

  {/* Right Side Content */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: false, amount: 0.3 }} // 👈 re-trigger on scroll
    className="flex-1 text-center md:text-left"
  >
    <h2 className="text-4xl font-bold mb-4">Exclusive Artists</h2>
    <p className="text-lg text-gray-300 max-w-xl">
      Discover the <span className="text-pink-500 font-semibold">star power</span> that makes our 
      events unforgettable — from world-famous DJs to Bollywood icons and indie sensations.
    </p>
  </motion.div>
</div>

      {/* 🔥 Categories */}
      <div className="flex justify-center gap-8 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-lg font-bold uppercase transition-all ${
              selectedCategory === cat ? "text-pink-500" : "text-white hover:text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔥 Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }} // 👈 allow re-trigger on scroll
              className="text-center group cursor-pointer"
               >

              {/* Image with border effect */}
              <div className="relative inline-block">
                <div className="absolute -inset-2 border-2 border-white rounded-lg opacity-60 group-hover:opacity-100 transition"></div>
                <Image
                  src={artist.img}
                  alt={artist.name}
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-56 h-56 transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-bold text-pink-400">{artist.name}</h3>

              {/* Know More */}
              <Link
                href={`/artists/${artist.slug}`}
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
