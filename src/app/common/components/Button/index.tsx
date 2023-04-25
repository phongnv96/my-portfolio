import "./_style.css";

import React from "react";

interface ButtonProps {
  type?: "outlined" | "fill";
  children: React.ReactNode;
  className?: string;
  size?: "small" | "default";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { type = "fill", children, className, size = "default", onClick, disabled } = props;
  return (
    <button
      className={`${className} btn ${type} ${
        size === "small" ? "px-4 py-1" : " px-6 py-3"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
