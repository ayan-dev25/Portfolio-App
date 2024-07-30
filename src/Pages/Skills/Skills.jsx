import React from "react";
import { skillList } from "../../api/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="p-5 mx-auto w-full max-w-7xl md:grid" id="skills">
      <div className="skills-heading text-center text-2xl mb-5 font-bold">
        Skills
      </div>
      <div className="skills-cards grid grid-cols-3 md:grid-cols-6 gap-2">
            {skillList.map((each) => (
                <SkillCard key = {each._id} text={each.name}/>
            ))}
      </div>
    </div>
  );
};

export default Skills;
