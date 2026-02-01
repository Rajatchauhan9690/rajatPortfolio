import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </AnimatePresence>
    </div>
  );
}

export default App;
