import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "MongoDB", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
        Skills
      </h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <h3 className="mb-2 text-lg font-semibold text-gray-300">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, amount: 0.3 }} // replay animation
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-4 bg-green-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
