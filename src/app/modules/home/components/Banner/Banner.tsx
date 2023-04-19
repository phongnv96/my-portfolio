import "./_style.css";

import Button from "@/app/common/components/Button";
import Image from "next/image";
import React from "react";
import { Typewriter } from "@/app/common/components/TextEffect/TextTypeWriter";

export default function Banner() {
  return (
    <div className="container mx-auto w-full h-full mb-[60px] lg:mb-[150px]">
      <div className="content w-full pt-[150px] lg:pt-0 lg:h-full lg:justify-between flex lg:flex-row flex-col-reverse items-center">
        <div className="details w-full lg:w-1/2">
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
        <div className="avatar w-1/2 lg:ml-[100px] mb-8 lg:mb-0">
          <div className="image relative">
            <Image  width={400} height={550} src="/images/avatar.png" alt="image" className="max-h-[650px] xl:max-h[400px]" />
            <span className="skills illustrator bg-amber-900 top-0 left-[-40px] lg:top-[20px] lg:left-[-20px] anim_moveBottom rounded-md">
              <Image width={100} height={100} src="/icons/react.svg" alt="reactjs"/>
            </span>
            <span className="skills photoshop top-3 right-0 lg:right-[70px] lg:top-[70px]  anim_moveBottom">
            <Image width={100} height={100} src="/icons/angular.svg" alt="angular"/>
            </span>
            <span className="skills figma lg:left-[140px] left-[30px] bottom-0 lg:bottom-[60px] anim_moveBottom">
            <Image width={100} height={100} src="/icons/vuejs.svg" alt="vuejs"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
