import React from 'react';

import Image from 'next/image';

import ExperienceList from './ExperienceList';

const TimeLine = () => {
  return (
    <section className=" mt-36 relative" id="experiences">
      <div className="absolute top-0 right-0">
        <Image
          width={350}
          height={350}
          alt="side-effect-1"
          src="/images/side-effect7.png"
        />
      </div>
      <div className="container m-auto relative">
        <div className="absolute top-0 left-0">
          <Image
            width={130}
            height={165}
            alt="side-effect-1"
            src="/images/side-effect3.png"
          />
        </div>

        <div className="text-center max-w-[550px] m-auto">
          <div className="title mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
              Career path
            </span>
            <h3 className="text-[30px] lg:text-[40px]">
              My work experience overall
            </h3>
          </div>
          <div className="text lg:mb-9 dark:text-gray-400 text-gray-600">
            <p>
              Overall, my experience across different companies has allowed me
              to gain a diverse skill set in web development, including
              front-end and back-end technologies.
            </p>
          </div>
        </div>
        <ExperienceList />
      </div>
    </section>
  );
};

export default TimeLine;
