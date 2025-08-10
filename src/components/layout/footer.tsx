import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white w-full">
      {/* Main content */}
      <div className="mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-xl">
        {/* Logo and Description */}
        <div>
          <img
            src="/images/logo_wb.png"
            alt="Manikarnika Events Logo"
            className="mb-4"
          />
          <p className="text-gray-300">
            Bringing unforgettable events and exclusive artist performances to life.
            Experience the magic with Manikarnika Events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Exclusive Artists</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Artist Bookings</li>
            <li>Event Management</li>
            <li>Production Consultancy</li>
            <li>Esports</li>
            <li>Fashion Shows</li>
            <li>Movie Promotions</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold mb-4">Stay Updated</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l bg-gray-800 text-white flex-1"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 rounded-r"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-pink-500"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 max-w-screen-xl mx-auto">
        <p className="text-sm text-gray-400">
          © 2025 Manikarnika Events. All Rights Reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedinIn size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
