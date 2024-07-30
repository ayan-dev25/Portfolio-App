import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationList } from "../../api/education.js";

const Education = () => {
  return (
    <div className="p-5 mx-auto w-full max-w-7xl md:grid" id="education">
      <div className="education-heading text-center text-2xl mb-2 font-bold">
        Education
      </div>
      <div>
        <VerticalTimeline >
          {educationList.map((institution) => {
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
                  //date={institution.duration}
                  iconStyle={{ background: "rgb(101, 163, 13)", color: "#fff" }}
                  key={institution._id}
                >
                  <h4 className="vertical-timeline-element-title">
                    {institution.institutionName}
                  </h4>
                  <h6 className="vertical-timeline-element-subtitle">
                    {institution.institutionLocation}
                  </h6>
                  <p>
                    {institution.courseName} - {institution.specialization}
                    ,Percentage-{institution.percentage}
                  </p>
                </VerticalTimelineElement>
              </>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
