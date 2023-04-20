import Image from "next/image";
import React from "react";

interface ProcessItemProps {
  title: string;
  image: string;
  description: string;
  svg: any;
}

const ProcessItem = (props: ProcessItemProps) => {
  const { title, image, description, svg } = props;
  return (
    <div className="list_inner text-center mb-0 lg:mb-[70px]">
      <div className="icon relative mb-[30px]">
        <span>
          <Image
            width={90}
            height={90}
            src={image}
            alt="image"
            className="inline"
          />
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={45}
            height={45}
            src={svg}
            alt="svg"
          />
        </span>
      </div>
      <div className="title mb-[20px]">
        <h3 className="text-[20px] font-bold">{title}</h3>
      </div>
      <div className="text dark:text-gray-400 text-gray-600">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProcessItem;
