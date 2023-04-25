import React, { useState } from "react";

import DialogComponent from "@/app/common/components/Dialog";
import Image from "next/image";
import SlideShow from "@/app/common/components/SlideShow";
import Tilt from "react-parallax-tilt";
import { useBreakpoints } from "@/app/common/hooks/useBreakPoint";
import ReactWOW from "react-wow";

interface ProcessItemProps {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  sliders: string[];
  isRevertDisplay: boolean;
  skills: string[];
}

const ProjectItem = (props: ProcessItemProps) => {
  const {
    image,
    title,
    subTitle,
    description,
    sliders,
    isRevertDisplay,
    skills,
  } = props;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { isLg, isMd } = useBreakpoints();
  const onCloseDialog = () => {
    setIsOpenDialog(false);
  };
  const onOpenDialog = () => {
    setIsOpenDialog(true);
  };
  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 `}>
          <a
            onClick={onOpenDialog}
            className={`relative ${
              isRevertDisplay ? "lg:order-2" : ""
            } self-center`}
          >
            {isLg || isMd ? (
              <Tilt>
                {/* <div className="absolute border-solid border-primary w-full h-full top-9 -left-9 border-[10px] -z-[1]"></div> */}
                <Image
                  className="z-[1] border-shadow rounded-lg"
                  src={image}
                  width={650}
                  height={315}
                  alt="product"
                  style={{ width: "100%" }}
                />
              </Tilt>
            ) : (
              <Image
                className="z-[1] border-shadow rounded-lg"
                src={image}
                width={650}
                height={315}
                alt="product"
                style={{ width: "100%" }}
              />
            )}
          </a>
        <div className="self-center">
          <div className="title lg:mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold opacity-50 mb-2">
              {subTitle}
            </span>
            <h3 className="text-[30px] lg:text-[40px]">{title}</h3>
          </div>
          <div className="text wow fadeInUp lg:mb-9 dark:text-gray-400 text-gray-600">
            {description}
          </div>
          <div className="mt-3">
            {skills.length && (
              <ul className="content-skills flex text-xs gap-1 flex-wrap">
                {skills.map((item, index) => (
                  <li
                    className="p-1 bg-gray-200 dark:bg-gray-600 rounded"
                    key={`experience-skill-${index}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <DialogComponent isOpen={isOpenDialog} onClose={onCloseDialog}>
        <SlideShow slides={sliders} />
      </DialogComponent>
    </>
  );
};

export default ProjectItem;
