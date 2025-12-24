import { FaFacebookF, FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#2e2a26] text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-20 rounded-full" />
            <span className="text-orange-500 font-bold text-xl">
              Care <span className="text-green-500">Connect</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
           Baby Sitting & Elderly Care Service Platform
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">All Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">
            Contact Us
          </h3>
          <p className="text-sm mb-2">
            Email: care@gmail.com
          </p>
          <p className="text-sm mb-4">
            Phone: +8801 23456789
          </p>

          <div className="flex gap-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaMediumM className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10">
        <p className="text-center text-sm py-5 text-gray-400">
          © 2025 care.xyz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
