import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-green-500">Rajat Chauhan</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li
              key={link}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="material-icons text-3xl text-green-500">
            {open ? "✖" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-3 p-4 bg-black shadow-md animate-fadeInUp">
          {links.map((link) => (
            <li key={link} className="text-gray-300 hover:text-green-500">
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
