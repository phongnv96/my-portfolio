import './_style.css';

import React from 'react';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "outlined" | "fill";
  children: React.ReactNode;
  className?: string;
  size?: "small" | "default";
}

const Button = (props: ButtonProps) => {
  const { type = "fill", children, className, size = "default" } = props;
  return (
    <button
      onClick={props?.onClick}
      className={`${className} btn ${type} ${
        size === "small" ? "px-4 py-1" : " px-6 py-3"
      }`}
      disabled={props.disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
