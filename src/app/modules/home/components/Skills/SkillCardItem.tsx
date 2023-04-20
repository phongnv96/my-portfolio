import Image from "next/image";
import React from "react";

interface SkillCardItemProps {
  image: string;
}

const SkillCardItem = (props: SkillCardItemProps) => {
  const { image } = props;
  return (
    <div className="p-4 rounded-lg border-gray-500 bg-gray-500 w-[70px] h-[70px] lg:w-[150px] lg:h-[150px]">
      <Image width={150} height={150} src={image} alt="skill" />
    </div>
  );
}

export default SkillCardItem;
