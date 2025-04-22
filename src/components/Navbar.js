// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 border-b border-black bg-white">
      {/* Top left: Home */}
      <div className="text-lg">
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </div>

      {/* Top right: Other links */}
      <div className="space-x-6 text-sm md:text-base">
        <Link to="/about" className="hover:underline">
          About Me
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <Link to="/portfolio" className="hover:underline">
          Portfolio
        </Link>
      </div>
    </nav>
  );
}
