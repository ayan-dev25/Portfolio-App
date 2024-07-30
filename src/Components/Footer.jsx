import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="p-5 mx-auto w-full max-w-7xl">
      <div className="footer-links grid grid-cols-3 gap-3 mb-2">
        <div className="grid grid-cols-1">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
        </div>
        <div className="grid grid-cols-1 mx-auto">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
        <div className="grid grid-cols-1 text-right">
          <a href="#contact">Contact</a>
          <a href="">Leetcode</a>
          <a href="">Github</a>
        </div>
      </div>
      <hr width="100%"/>
      <div className="footer-copyright-section mt-2">
        copyright &copy; 2024 | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
