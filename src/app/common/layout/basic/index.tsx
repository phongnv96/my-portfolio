"use client";

import React, { useContext } from "react";

import ConfigArea from "../../components/ThemeSetting/ConfigArea";
import Header from "./Headers/Header";
import MouseCursor from "../../components/Mouse/MouseCursor";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/themeConfig";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}
const LayoutBasic = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <body className={theme?.themeMode}>
      <Header />
      {props.children}
      <MouseCursor />
      <ConfigArea />
      <Footer />
    </body>
  );
}
export default LayoutBasic;