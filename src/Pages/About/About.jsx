import React from "react";
import Button from "../../Components/Custom/Button";

const About = () => {
  const image = 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
  return (
    <div id="about" className="p-5 mx-auto max-w-7xl md:grid md:grid-cols-3 md:gap-3">
      <div className="about-text md:col-span-2">
        <div className="about-greeting text-green-500 text-3xl">-Hello</div>
        <div className="about-intro-title">I am Ayan Bera</div>
        <div className="about-designation">
          Software Engineer & Full Stack Developer
        </div>
        <div className="about-intro-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi
          esse vero. Itaque, hic sequi earum deleniti quos quas unde, sint,
          beatae pariatur perspiciatis alias provident praesentium aut optio.
          Non!
        </div>
        <div className="about-button grid grid-cols-3 gap-2 md:gap-5 m-2">
          <Button title={"My Resume"}/>
          <Button title={"Leetcode"}/>
          <Button title={"Github"}/>
        </div>
      </div>
      <div className="about-image md:col-span-1 w-full text-center">
        <img src= {image} className="w-full h-full rounded-full"/>
      </div>
    </div>
  );
};

export default About;
