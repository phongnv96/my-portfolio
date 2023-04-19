import ProcessItem from "./ProcessItem";
import { ProcessType } from "../../types";
import React from "react";

const dataProcessList: ProcessType[] = [
  {
    title: "Pixel Perfect",
    description: "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    image: "/images/process1.png",
    svg: "/images/process1.svg",
  },
  {
    title: "High Quality",
    description: "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    image: "/images/process2.png",
    svg: "/images/process2.svg",
  },
  {
    title: "Awesome Idea",
    description: "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    image: "/images/process3.png",
    svg: "/images/process3.svg",
  },
];

function ProcessList() {
  return (
    <div className="flex container mx-auto flex-col lg:flex-row gap-14">
      {dataProcessList.map((item, index) => (
        <ProcessItem key={`process-${index}`} {...item} />
      ))}
    </div>
  );
}

export default ProcessList;
