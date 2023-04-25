import './_style.css';

import React from 'react';

import { ExperienceType } from '../../types';
import ExperienceItem from './ExperienceItem';

const experiencesData: ExperienceType[] = [
  {
    title: "Maritime Bank",
    role: "Front End Leader",
    timeLine: "DEC 21",
    durations: "December 2021 - Current",
    descriptions: (
      <>
        <ul className="list-disc ml-3">
          <li>
            As the front-end leader at MSB, I was responsible for managing a
            team of front-end developers and guiding them in developing
            cutting-edge user interfaces using HTML, CSS, and JavaScript
          </li>
          <li className="mt-2">
            I played a key role in implementing front-end frameworks and
            libraries, such as React, Angular, and integrating them with
            back-end APIs or CMS platforms. I also implemented responsive
            designs, animations, and other front-end functionalities to enhance
            the user experience and achieve project goals.
          </li>
        </ul>
      </>
    ),
    skills: ["ReactJS", "Flutter", "Javascript", "Java", "TypeScript", "Dart"],
  },
  {
    title: "Viettel Digital",
    role: "Web Developer",
    timeLine: "DEC 19",
    durations: "December 2019 - March 2020",
    descriptions: (
      <>
        <p>Main responsibilities:</p>
        <ul className="list-disc ml-3">
          <li>Upgrade and Development old projects using new technologies.</li>
          <li>Researching and suggesting new solutions for the company.</li>
          <li>
            Training and support team members. - Build front end projects
            structure.
          </li>
          <li>Write code base on customer required using angular 9 vs Java.</li>
          <li>Testing and fix bug.</li>
        </ul>
      </>
    ),
    skills: [
      "Angular",
      "ReactJS",
      "Javascript",
      "Java",
      "TypeScript",
      "JavaSpring",
    ],
  },
  {
    title: "MP Solution",
    role: "Front End Developer",
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
      "C#",
      "Javascript",
      "TypeScript",
    ],
  },
  {
    title: "FPT Software",
    role: "Front End Developer",
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
      "Javascript",
      "C#",
      "TypeScript",
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
};

export default ExperienceList;
