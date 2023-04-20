import "./_style.css";

import Button from "@/app/common/components/Button";
import Typewriter from "@/app/common/components/TextEffect/TextTypeWriter";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto w-full h-full min-h-screen mb-[60px] lg:mb-[150px]" id="home">
      <div className="content w-full py-[100px] min-h-screen lg:py-0 lg:h-full lg:justify-between flex lg:flex-row flex-col-reverse items-center">
        <div className="details h-full w-full lg:w-1/2">
          <div className="hello">
            <h3 className="text-primary text-[30px]">Hello, I`&apos`m</h3>
          </div>
          <div className="name">
            <h3 className="text-[40px] lg:text-[60px] font-bold">
              <Typewriter
                words={["Nguyen Phong", "a Developer ", "a Freelancer"]}
              />
            </h3>
          </div>
          <div className="job text-[19px] mb-6">
            <p>
              A <span className="text-success">Creative Designer </span>
              <span className="text-secondary">New York</span>
            </p>
          </div>
          <div className="text">
            <p>
              I`&apos`m creative designer based in New York, and I`&apos`m very passionate
              and dedicated to my work.
            </p>
          </div>
          <div className="button">
            <div className="mt-8">
              <Button>
                About Me
              </Button>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon-facebook-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="avatar h-full w-1/2 lg:ml-[100px] mb-8 lg:mb-0">
          <div className="image relative">
            <Image  width={500} height={650} src="/images/avatar.png" alt="image" className="max-h-[800px]" />
            <span className="w-[50px] lg:w-[80px]  skills illustrator bg-amber-900 top-0 left-[-40px] lg:top-[20px] lg:left-[-20px] anim_moveBottom rounded-md">
              <Image width={80} height={80} src="/icons/react.svg" alt="reactjs"/>
            </span>
            <span className="w-[50px] lg:w-[80px] skills photoshop top-3 right-0  lg:right-[150px] xl:right-[100px] lg:top-[70px]  anim_moveBottom">
            <Image width={80} height={80} src="/icons/angular.svg" alt="angular"/>
            </span>
            <span className="w-[50px] lg:w-[80px] skills figma lg:left-[140px] left-[30px] bottom-0 lg:bottom-[60px] anim_moveBottom">
            <Image width={80} height={80} src="/icons/vuejs.svg" alt="vuejs"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner