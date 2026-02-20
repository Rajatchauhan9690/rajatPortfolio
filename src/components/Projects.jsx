import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Images, Videos, Gifs Search",
    desc: "React + Redux Toolkit + Tailwind CSS",
    link: "https://redux-toolkit-media.vercel.app",
    type: "project",
  },
  {
    name: "BookStore",
    desc: "Node + React + MongoDB + Express + Tailwind CSS",
    link: "https://book-store-frontend-kappa-ten.vercel.app",
    type: "project",
  },
  {
    name: "Job Portal",
    desc: "Node + React + MongoDB + Express + Tailwind CSS",
    link: "https://naukri-portal-plum.vercel.app",
    type: "project",
  },
  {
    name: "Mern CRUD Operation ",
    desc: "React + Tailwind CSS ",
    link: "https://crud-operation-blond.vercel.app",
    type: "project",
  },
  // UI Projects 👇
  {
    name: "Dashboard UI",
    desc: "React + Tailwind CSS (UI Design)",
    link: "https://company-portel.vercel.app",
    type: "ui",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
        Projects & UI Designs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="p-6 rounded-xl shadow-lg bg-black text-gray-300 cursor-pointer"
          >
            {/* Badge */}
            <span
              className={`text-sm px-3 py-1 rounded-full mb-3 inline-block ${
                project.type === "ui"
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-black"
              }`}
            >
              {project.type === "ui" ? "UI Design" : "Project"}
            </span>

            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 font-semibold hover:underline"
            >
              View →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
