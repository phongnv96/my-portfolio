import React from 'react';

import Image from 'next/image';

import SkillCardList from './SkillCardList';

const Skills = () => {
  return (
    <div className="relative" id="skills">
      <Image
        className="lg:block hidden absolute left-0 top-[-10px] -z-[1] "
        width={460}
        height={420}
        src="/images/side-effect5.png"
        alt="effect5"
      />
      <Image
        className=" absolute right-0 top-[-200px] -z-[1] "
        width={460}
        height={340}
        src="/images/side-effect6.png"
        alt="effect5"
      />
      <div className="container m-auto">
        <div className="text-center max-w-[550px] m-auto">
          <div className="title mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
              Skills
            </span>
            <h3 className="text-[30px] lg:text-[40px]">
              I Develop Skills Regularly
            </h3>
          </div>
          <div className="text lg:mb-9 dark:text-gray-400 text-gray-600">
            <p>
            I am committed to continuously learning and improving my skills in the ever-evolving field of web development.
            </p>
          </div>
        </div>
        <SkillCardList />
      </div>
    </div>
  );
}

export default Skills;
