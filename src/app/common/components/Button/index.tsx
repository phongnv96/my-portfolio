import "./_style.css";

import React from "react";

interface ButtonProps {
  type?: "outlined" | "fill";
  children: React.ReactNode;
  className?: string;
  size?: "small" | "default";
}

const Button = (props: ButtonProps) => {
  const { type = "fill", children, className, size = "default" } = props;
  return (
    <button
      className={`${className} btn ${type} ${
        size === "small" ? "px-4 py-1" : " px-6 py-3"
      }`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
