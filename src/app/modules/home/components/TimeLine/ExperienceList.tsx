import './_style.css';

import React from 'react';

import { ExperienceType } from '../../types';
import ExperienceItem from './ExperienceItem';

const experiencesData: ExperienceType[] = [
  {
    title: "Maritime Bank",
    role: "Front End Leader",
    timeLine: "JAN 22 -  Current",
    durations: "Jan 2022 - Current",
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
    timeLine: "APR 2020",
    durations: "Apr 2020 -  May 2022",
    descriptions: (
      <>
        <ul className="list-disc ml-3">
          <li>
            Build a front-end structure, and create an Angular library UI for
            multiple project reuse.
          </li>
          <li>Upgrade and Development old projects using new technologies.</li>
          <li>Researching and suggesting new solutions for the company.</li>
          <li>Write code base on customer required using angular 9 vs Java.</li>
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
    title: "MP Software",
    role: "Front End Developer",
    timeLine: "SEP 2019",
    durations: "Sep 2019 -  Apr 2020",
    descriptions: (
      <>
        <ul className="list-disc ml-3">
          <li>System development based on customer requirements.</li>
          <li>Development Front end of a dynamic CMS system.</li>
          <li>Researching and suggesting new solutions for the company.</li>
        </ul>
      </>
    ),
    skills: ["Angular", "Javascript", "C#", "TypeScript"],
  },
  {
    title: "FPT Software",
    role: "Front End Developer",
    timeLine: "MAY 2018",
    durations: "May 2018 - Mar 2019",
    descriptions: (
      <>
        <ul className="list-disc ml-3">
          <li>
            Write code based on customer requirements using angular 2+ vs .Net
            core, VB .net...
          </li>
          <li>Codding, testing, and fixing bugs.</li>
          <li>Training programming languages</li>
        </ul>
      </>
    ),
    skills: ["Angular", "Javascript", "C#", "TypeScript"],
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
