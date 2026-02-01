import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    desc: "React + Tailwind + Framer Motion",
    link: "#",
  },
  {
    name: "Job Portal",
    desc: "Node + React + MongoDB + Express + TailwindCss",
    link: "#",
  },
  {
    name: "Images, Videos, Gifs Search",
    desc: "React + Redux/Toolkit + TailwindCss",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 100, scale: 1 }} // start 100px down
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -10 }} // hover lift
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }} // slower & smooth
            className="p-6 rounded-xl shadow-lg bg-black text-gray-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.desc}</p>
            <a href={project.link} className="font-semibold hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
