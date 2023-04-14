import "./_style.css";

import Button from "@/app/common/components/Button";
import Image from "next/image";
import React from "react";
import { Typewriter } from "@/app/common/components/TextEffect/TextTypeWriter";

export default function Banner() {
  return (
    <div className="container w-full h-full">
      <div className="content w-full pt-[150px] lg:pt-0 lg:h-full lg:justify-between flex lg:flex-row flex-col-reverse items-center">
        <div className="details w-full lg:w-1/2">
          <div className="hello">
            <h3 className="text-primary text-[30px]">Hello, I'm</h3>
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
              I'm creative designer based in New York, and I'm very passionate
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
            <Image  width={520} height={650} src="/images/avatar.png" alt="image" className="max-h-[650px] xl:max-h[400px]" />
            <span className="skills illustrator bg-amber-900 top-0 left-[-40px] lg:top-[20px] lg:left-[-20px] anim_moveBottom rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 231.597 231.597"
                className="svg replaced-svg text-[#ff9a00]"
                fill="currentColor"
              >
                <g id="XMLID_449_">
                  <path
                    id="XMLID_450_"
                    d="M2.499,211.77h42.076c1.123,0,2.109-0.749,2.41-1.832l12.271-44.237h47.637l13.313,44.289   c0.318,1.057,1.291,1.78,2.395,1.78h43.672c0.008,0,0.016,0,0.02,0c1.381,0,2.5-1.119,2.5-2.5c0-0.369-0.078-0.719-0.223-1.034   l-55.564-179.19c-0.324-1.046-1.293-1.76-2.389-1.76h-53.26c-1.1,0-2.07,0.718-2.391,1.769L0.109,208.539   c-0.23,0.758-0.09,1.581,0.381,2.218C0.962,211.394,1.706,211.77,2.499,211.77z M99.554,130.342H66.511l9.764-34.902   c1.773-6.289,3.449-13.731,5.07-20.928c0.371-1.653,0.736-3.275,1.098-4.861c2.145,8.622,4.504,17.937,6.869,25.815L99.554,130.342   z"
                  ></path>
                  <path
                    id="XMLID_453_"
                    d="M187.288,76.551c-1.381,0-2.5,1.119-2.5,2.5V209.27c0,1.381,1.119,2.5,2.5,2.5h40.477   c1.381,0,2.5-1.119,2.5-2.5V79.051c0-1.381-1.119-2.5-2.5-2.5H187.288z"
                  ></path>
                  <path
                    id="XMLID_454_"
                    d="M207.261,65.571c14.102,0,24.336-9.563,24.336-22.795c-0.307-13.512-10.205-22.949-24.07-22.949   c-7.078,0-13.363,2.442-17.697,6.878c-4.067,4.16-6.234,9.886-6.108,16.127c-0.129,6.043,2.043,11.666,6.119,15.84   C194.185,63.121,200.372,65.571,207.261,65.571z"
                  ></path>
                </g>
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
                <g> </g>
              </svg>
            </span>
            <span className="skills photoshop top-3 right-0 lg:right-[70px] lg:top-[70px]  anim_moveBottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 243.852 243.852"
                className="svg replaced-svg"
                fill="currentColor"
              >
                <g id="XMLID_309_">
                  <path
                    id="XMLID_311_"
                    d="M45.213,211.003v-61.364c3.273,0.319,7.133,0.485,11.346,0.485c25.676,0,46.436-6.773,60.043-19.594   c11.146-10.589,17.287-26.365,17.287-44.42c0-17.536-7.334-33.392-20.109-43.494c-12.559-10.045-31.014-14.929-56.42-14.929   c-22.008,0-40.605,1.266-55.279,3.764C0.879,31.654,0,32.696,0,33.915v177.088c0,1.381,1.119,2.5,2.5,2.5h40.213   C44.094,213.503,45.213,212.384,45.213,211.003z M45.213,113.339V64.405c2.455-0.471,7.066-1.094,14.275-1.094   c18.551,0,29.19,8.698,29.19,23.863c0,16.776-12.105,26.793-32.385,26.793C51.428,113.967,47.963,113.775,45.213,113.339z"
                  ></path>
                  <path
                    id="XMLID_334_"
                    d="M206.76,129.02c-16.568-5.798-19.363-8.559-19.363-12.553c0-7.093,8.109-8.152,12.945-8.152   c10.268,0,20.979,3.852,27.031,7.15c0.678,0.369,1.484,0.405,2.193,0.098c0.705-0.308,1.232-0.924,1.424-1.67l7.191-27.959   c0.293-1.141-0.25-2.332-1.303-2.858c-7.465-3.732-21.332-7.721-37.869-7.721c-32.674,0-55.494,18.549-55.494,45.065   c-0.221,12.937,6.317,30.649,38.725,41.558c15.742,5.248,17.465,7.975,17.465,12.542c0,2.082,0,8.418-14.809,8.418   c-11.094,0-26.072-4.927-33.588-9.491c-0.682-0.413-1.516-0.478-2.252-0.174c-0.734,0.303-1.281,0.938-1.473,1.71l-7.189,29.028   c-0.274,1.107,0.236,2.258,1.238,2.8c10.998,5.944,26.768,9.354,43.264,9.354c36.365,0,58.955-17.08,58.955-44.608   C243.563,150.866,232.119,137.746,206.76,129.02z"
                  ></path>
                </g>
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
                <g> </g>
              </svg>
            </span>
            <span className="skills figma lg:left-[140px] left-[30px] bottom-0 lg:bottom-[60px] anim_moveBottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className="svg replaced-svg"
              >
                <g fill="none" fillRule="evenodd" transform="translate(4)">
                  <circle cx="12" cy="12" r="4" fill="#19BCFE"></circle>
                  <path
                    fill="#09CF83"
                    d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z"
                  ></path>
                  <path
                    fill="#A259FF"
                    d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z"
                  ></path>
                  <path
                    fill="#F24E1E"
                    d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z"
                  ></path>
                  <path
                    fill="#FF7262"
                    d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
