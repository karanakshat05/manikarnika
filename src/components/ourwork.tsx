"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const workItems = [
  {
    title: "Luxury Wedding Celebration",
    description:
      "An unforgettable wedding experience curated with world-class artists, stunning décor, and seamless execution.",
    img: "/images/djtracer.png",
  },
  {
    title: "Corporate Gala Night",
    description:
      "A premium corporate event featuring exclusive performances, elegant design, and flawless management.",
    img: "/images/kanikakapoor.png",
  },
  {
    title: "Star-Studded Concert",
    description:
      "A high-energy live concert showcasing top artists with cutting-edge sound, lights, and stage production.",
    img: "/images/VOILAFLYER.png",
  },
];

// Animation variants
const cardVariants = {
  hidden: (direction: "left" | "up" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 80 : 0,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="relative w-full max-w-6xl mx-auto px-4 py-20 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From intimate gatherings to grand productions,{" "}
          <span className="text-pink-500 font-semibold">Manikarnika Events</span>{" "}
          has delivered memorable experiences for clients across the globe.
        </p>
      </div>

      {/* Grid Showcase */}
      <div className="grid md:grid-cols-3 gap-8">
        {workItems.map((work, index) => {
          const direction =
            index === 0 ? "left" : index === 1 ? "up" : "right";

          return (
            <motion.div
             initial={{ opacity: 0, x: -100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-black/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden 
                         hover:scale-105 hover:shadow-pink-500/50 transition-transform"
            >
              <Image
                src={work.img}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{work.title}</h3>
                <p className="text-gray-300">{work.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
