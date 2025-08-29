"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full max-w-6xl mx-auto px-4 py-30 text-white"
    >
      <div className="max-w-screen-xl mx-auto px-2 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }} // triggers again when 30% is visible
        >
          <img
            src="/Images/about.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-300 mb-4">
            At <span className="text-pink-500 font-semibold">Manikarnika Events</span>,
            we create unforgettable moments by blending creativity, passion,
            and precision. From exclusive artist performances to large-scale
            productions, our events are crafted to leave lasting impressions.
          </p>
          <p className="text-lg text-gray-300">
            Our team’s expertise spans artist bookings, event management,
            and production consultancy, ensuring that every project is
            delivered flawlessly — making your vision a reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
