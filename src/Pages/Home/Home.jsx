import React from "react";
import Header from "../../Components/Header";
import About from "../About/About";
import Footer from "../../Components/Footer";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Header />
      <div className="grid grid-cols-1 gap-5">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
