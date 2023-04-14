import "./_style.css";

import React from "react";

interface ColorItemProps {
  color: string;
  index: number;
  isSelected?: boolean;
  className?: string;
  onSelectColor: (item: any, index: number) => void;
}
function ColorItem(props: ColorItemProps) {
  const { color, index, isSelected, className, onSelectColor } = props;
  return (
    <a
      onClick={() => {
        onSelectColor(color, index);
      }}
      style={{ background: color }}
      className={`rounded-full hover:cursor-pointer w-5 h-5  ${
        isSelected ? "color-selected dark:border-white border-black" : ""
      } ${className || ""}`}
    ></a>
  );
}

export default ColorItem;
