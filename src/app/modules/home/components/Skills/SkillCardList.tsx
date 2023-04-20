import React from "react";
import SkillCardItem from "./SkillCardItem";

const skills = [
  "/icons/javascript.svg",
  "/icons/typescript.svg",
  "/icons/html5.svg",
  "/icons/css3.svg",
  "/icons/react.svg",
  "/icons/angular.svg",
  "/icons/vuejs.svg",
  "/icons/boostrap.svg",
  "/icons/flutter.svg",
  "/icons/dartlang.svg",
  "/icons/java.svg",
  "/icons/c.svg",
  "/icons/mysql.svg",
  "/icons/mongodb.svg",
  "/icons/amazon.svg",
];

const SkillCardList = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 z-0 mt-10 lg:mt-20">
      {skills.map((item, index) => (
        <SkillCardItem image={item} key={`skill-${index}`} />
      ))}
    </div>
  );
}

export default SkillCardList;
