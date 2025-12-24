"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#2e2a26] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <img src="./logo.png" alt="" className="w-12 rounded-full" />
          <span className="text-orange-500 font-bold text-xl">
            Care<span className="text-green-500"> Connect</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-green-400">Home</Link></li>
          <li><Link href="/services" className="hover:text-green-400">All Services</Link></li>
          <li><Link href="/about" className="hover:text-green-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="/login" className="border border-green-500 px-4 py-1 rounded hover:bg-green-500 hover:text-black transition">
            Login
          </Link>
          <Link href="/signup" className="bg-green-500 text-black px-4 py-1 rounded hover:bg-green-400 transition">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#2e2a26] px-6 pb-6 space-y-4 text-sm">
          <Link href="/" className="block hover:text-green-400">Home</Link>
          <Link href="/scholarships" className="block hover:text-green-400">All Scholarships</Link>
          <Link href="/about" className="block hover:text-green-400">About</Link>
          <Link href="/contact" className="block hover:text-green-400">Contact</Link>

          <div className="flex gap-4 pt-4">
            <Link href="/login" className="border border-green-500 px-4 py-1 rounded">
              Login
            </Link>
            <Link href="/register" className="bg-green-500 text-black px-4 py-1 rounded">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
