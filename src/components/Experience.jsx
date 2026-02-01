import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Ecrivian Education Path LLP",
    duration: "July 2024 - Nov,2025",
    desc: "Developed responsive and interactive UI using React and Tailwind CSS.",
  },
  {
    role: "MERN Stack Developer Intern",
    company: "The Zonzo",
    duration: "Jan 2024 - June 2024",
    desc: "Built RESTful APIs with Node.js and integrated them with React frontend.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-green-500 text-center mb-12">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            className="bg-black text-gray-200 shadow-lg p-6 rounded-xl border-l-4 border-green-500"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-2">
              {exp.company} | {exp.duration}
            </p>
            <p>{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
