"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ContactSection() {
  const pathname = usePathname();

  return (
    <motion.section
      key={pathname} // 🔑 this forces remount on route change
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-40 px-4 md:px-20 bg-black-50 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
        <form className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />
          </div>

          {/* State & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <select
              className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
              defaultValue=""
            >
              <option value="" disabled className="bg-black text-gray-400">
                Select State
              </option>
              <option value="Delhi" className="bg-black">Delhi</option>
              <option value="Maharashtra" className="bg-black">Maharashtra</option>
              <option value="Karnataka" className="bg-black">Karnataka</option>
              <option value="Uttar Pradesh" className="bg-black">Uttar Pradesh</option>
              <option value="Other" className="bg-black">Other</option>
            </select>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 rounded-lg shadow text-white bg-gradient-to-br from-black via-[#2b0035] to-[#0d0d0d] hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
