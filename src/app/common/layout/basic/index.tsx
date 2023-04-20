"use client";

import React, { useContext } from "react";

import ConfigArea from "../../components/ThemeSetting/ConfigArea";
import Header from "./Header/Header";
import MouseCursor from "../../components/Mouse/MouseCursor";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/themeConfig";
import Footer from "./Footer";
import { useBreakpoints } from "../../hooks/useBreakPoint";

interface Props {
  children: React.ReactNode;
}
const LayoutBasic = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { isLg } = useBreakpoints();
  return (
    <body className={theme?.themeMode}>
      <Header />
      {props.children}
      {isLg && <MouseCursor />}
      <ConfigArea />
      <Footer />
    </body>
  );
}
export default LayoutBasic;