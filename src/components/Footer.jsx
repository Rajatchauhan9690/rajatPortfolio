import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h1
          className="text-5xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 via-white-500 to-purple-500 mb-6"
        >
          Rajat Chauhan
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          {/* GitHub */}
          <a
            href="https://github.com/Rajatchauhan9690"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <FaGithub className="w-6 h-6 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rajat-chauhan-58801a24b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <FaLinkedin className="w-6 h-6 text-white" />
          </a>

          {/* Gmail / Email */}
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <FaEnvelope className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">&copy; 2026 Rajat Chauhan</p>
      </div>
    </footer>
  );
};

export default Footer;
