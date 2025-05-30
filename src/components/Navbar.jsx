import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#Education", label: "Education" },
    { href: "#certificates", label: "Certificates" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-full fixed top-0 left-0 z-50 shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 md:px-16 max-w-full">
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group text-lg"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
            Connect Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden px-6 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg border-b border-gray-700 pb-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
