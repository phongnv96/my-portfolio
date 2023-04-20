import "./_style.css";

import ExperienceItem from "./ExperienceItem";
import { ExperienceType } from "../../types";
import React from "react";

const experiencesData: ExperienceType[] = [
  {
    title: "Maritime Bank",
    role: "Front end leader",
    timeLine: "DEC 21",
    durations: "December 2021 - Current",
    descriptions:
      "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
    skills: ["ReactJS", "Flutter", "Javascript", "Java", "TypeScript", "Dart"],
  },
  {
    title: "Viettel Digital",
    role: "Front end developer",
    timeLine: "DEC 19",
    durations: "December 2019 - March 2020",
    descriptions: ` Main responsibilities:
      - Upgrade and Development old projects using new technologies.
      - Researching and suggesting new solutions for the company.
      - Training and support team members.
      - Build front end projects structure.
      - Write code base on customer required using angular 9 vs Java
      - Testing and fix bug`,
    skills: [
      "Angular",
      "ReactJS",
      "Javascript",
      "Java",
      "TypeScript",
      "JavaSpring",
    ],
  },
];

const ExperienceList = () => {
  return (
    <div id="cd-timeline" className="cd-container">
      {experiencesData.map((item, index) => (
        <ExperienceItem {...item} key={`experience-${index}`} />
      ))}
    </div>
  );
}

export default ExperienceList;
