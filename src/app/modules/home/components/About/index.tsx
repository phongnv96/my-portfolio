import React, { useContext } from 'react';

import Image from 'next/image';

import Button from '@/app/common/components/Button';
import { ThemeContext } from '@/app/common/contexts/ThemeContext';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative container mx-auto pt-44 lg:pt-28 " id="about">
        <div className="absolute top-5 lg:top-0 left-0">
          <Image
            width={130}
            height={220}
            alt="side-effect-1"
            src="/images/side-effect1.png"
          />
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="left">
          <Image
            width={640}
            height={630}
            src={
              theme?.isDarkMode
                ? "/images/introduce.jpeg"
                : "/images/introduce-light.jpg"
            }
            alt="about_me"
          />
        </div>
        <div className="right self-center">
          <div className="title wow fadeInUp mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
              I m a developer
            </span>
            <h3 className="text-[30px] lg:text-[40px]">
              I Can Develop Anything You Want
            </h3>
          </div>
          <div className="text wow fadeInUp mb-9 dark:text-gray-400 text-gray-600">
            <p>
              Hello, I`m a web developer. I`m passionate
              about creating websites and web applications that are visually
              appealing, user-friendly, and optimized for performance. With
              5 years of experience in web development, I have
              honed my skills in front-end and back-end technologies, including
              HTML, CSS, JavaScript, and various web development frameworks.
            </p>
          </div>
          <Button>Hire Me</Button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          width={270}
          height={165}
          alt="side-effect-1"
          src="/images/side-effect2.png"
        />
      </div>
    </div>
  );
};

export default About;
