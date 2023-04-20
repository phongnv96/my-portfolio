import "./_style.css";

import React from "react";

interface ButtonProps {
  type?: "outlined" | "fill";
  children: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { type = "fill", children, className } = props;
  return (
    <button className={`${className} btn ${type}`}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
