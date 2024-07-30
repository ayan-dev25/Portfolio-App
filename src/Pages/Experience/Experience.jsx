import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceList } from '../../api/experience.js';


const Experience = () => {
  return (
    <div className="p-5 mx-auto w-full max-w-7xl md:grid" id="experience">
      <div className="education-heading text-center text-2xl font-bold mb-5">
        Experience
      </div>
      <div>
        <VerticalTimeline class>
          {experienceList.map((experience) => {
            return (
              <>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(101, 163, 13)",
                    color: "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(101, 163, 13)",
                  }}
                  //date={experience.duration}
                  iconStyle={{ background: "rgb(101, 163, 13)", color: "#fff" }}
                  key={experience._id}
                >
                  <h4 className="vertical-timeline-element-title">
                    {experience.companyName}
                  </h4>
                  <h6 className="vertical-timeline-element-subtitle">
                    {experience.companyLocation}
                  </h6>
                  <p>
                    {experience.designation} - {experience.jobType}
                  </p>
                </VerticalTimelineElement>
              </>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience