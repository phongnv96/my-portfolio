import "./_style.css";

import React, { useState } from "react";

import DialogComponent from "@/app/common/components/Dialog";
import Image from "next/image";
import SlideShow from "@/app/common/components/SlideShow";

interface ProcessItemProps {
  image: string;
  title: string;
  subTitle: string;
  description: string;
}

const mockSlides = [
  "/images/product-preview1.1.jpg",
  "/images/product-preview1.2.jpg",
  "/images/product-preview1.3.jpg",
  "/images/product-preview1.4.jpg",
];

function ProjectItem(props: ProcessItemProps) {
  const { image, title, subTitle, description } = props;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const onCloseDialog = () => {
    setIsOpenDialog(false);
  };
  const onOpenDialog = () => {
    setIsOpenDialog(true);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        <a onClick={onOpenDialog} className="relative">
          {/* <div className="absolute border-solid border-primary w-full h-full top-9 -left-9 border-[10px] -z-[1]"></div> */}
          <Image
            className="z-[1] border-shadow"
            src={image}
            width={650}
            height={315}
            alt="product"
          />
        </a>
        <div className="self-center">
          <div className="title mb-6">
            <span className="text-[22px] text-primary font-bold mb-2">
              {subTitle}
            </span>
            <h3 className="text-[40px]">{title}</h3>
          </div>
          <div className="text wow fadeInUp mb-9 text-gray-500">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <DialogComponent isOpen={isOpenDialog} onClose={onCloseDialog}>
        <SlideShow slides={mockSlides} />
        {/* <div>
          abjjsd
        </div> */}
        {/* <Image
          width={500}
          height={300}
          src="/images/product-preview1.1.jpg"
          alt="slide-show"
        /> */}
      </DialogComponent>
    </>
  );
}

export default ProjectItem;
