import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional, or use your own icons

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
    <nav className="bg-black text-white px-6 md:px-16 shadow-md fixed top-0 left-0 right-20 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
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

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
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
      )}
    </nav>
  );
};

export default Navbar;
