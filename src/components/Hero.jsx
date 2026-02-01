import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image1.png')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-green-500"
        >
          Hi, I'm Rajat Chauhan
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          UI/Frontend Developer | React & Tailwind Enthusiast
        </motion.p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <motion.a
            href="/Rajat_Resume.pdf"
            download="Rajat_Chauhan_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-3 rounded-lg border-2 border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-black transition"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
