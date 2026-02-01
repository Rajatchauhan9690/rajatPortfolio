import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript (ES6+)",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
];

/* Container stagger */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* Card rotate → straight with zigzag */
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 60,
    rotate: i % 2 === 0 ? -14 : 14,
    scale: 0.85,
  }),
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 16,
    },
  },
};

/* Floating effect */
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative max-w-6xl mx-auto py-10 px-6 rounded-2xl overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      {/* Animated background */}
      <div className="absolute  opacity-40" />

      <motion.div
        className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotateX: 8,
              rotateY: -8,
            }}
            style={{ perspective: 1000 }}
            className="relative group bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl flex flex-col items-center justify-center shadow-xl overflow-hidden"
          >
            {/* Glow layer */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Floating content */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              variants={floatAnimation}
              animate="animate"
            >
              <span className="text-4xl mb-4">{skill.icon}</span>
              <h4 className="text-white font-semibold text-center">
                {skill.name}
              </h4>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
