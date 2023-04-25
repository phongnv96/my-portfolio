import React from 'react';

import { ProcessType } from '../../types';
import ProcessItem from './ProcessItem';

const dataProcessList: ProcessType[] = [
  {
    title: "Creativity",
    description:
      "Come up with unique and innovative solutions to design challenges, resulting in visually appealing and engaging user experiences.",
    image: "/images/process1.png",
    svg: "/images/process1.svg",
  },
  {
    title: "Flexibility and Adaptability",
    description:
      "Being flexible and adaptable allows web developers to quickly learn and adapt to changes, stay updated with the latest trends, and continuously improve skills.",
    image: "/images/process2.png",
    svg: "/images/process2.svg",
  },
  {
    title: "Problem Solving",
    description:
      "Approach issues with a positive attitude, think critically, and find efficient and effective solutions to overcome obstacles.",
    image: "/images/process3.png",
    svg: "/images/process3.svg",
  },
];

const ProcessList = () => {
  return (
    <div
      className="flex container mx-auto flex-col lg:flex-row gap-14"
      id="process"
    >
      {dataProcessList.map((item, index) => (
        <ProcessItem key={`process-${index}`} {...item} />
      ))}
    </div>
  );
};

export default ProcessList;
