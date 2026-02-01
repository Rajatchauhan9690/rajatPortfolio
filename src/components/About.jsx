import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center gap-10 overflow-x-hidden"
    >
      <motion.img
        src="/profile.png"
        alt="Rajat Chauhan"
        className="rounded-full shadow-lg w-64 md:w-80 aspect-square object-cover"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-green-500 mb-4">About Me</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          I'm Rajat Chauhan, a passionate Fullstack Developer specializing in
          React, Node.js, and Tailwind CSS. I love building interactive and
          user-friendly web applications.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I focus on clean, modern designs with smooth animations to enhance
          user experience. I enjoy problem-solving and learning new technologies
          to deliver high-quality products.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
