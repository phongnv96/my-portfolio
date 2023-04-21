"use client";

import React, { useContext, useState } from "react";

import ConfigArea from "../../components/ThemeSetting/ConfigArea";
import Header from "./Header/Header";
import MouseCursor from "../../components/Mouse/MouseCursor";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/themeConfig";
import Footer from "./Footer";
import { useBreakpoints } from "../../hooks/useBreakPoint";
import Loading from "@/app/common/components/Loading/loading";
import NavMobile from "./Header/NavMobile";

interface Props {
  children: React.ReactNode;
}
const LayoutBasic = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { isLg } = useBreakpoints();
  const [loading, setLoadingPage] = useState<boolean>(true);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const onBodyLoaded = () => {
    const timmer = setTimeout(() => {
      setLoadingPage(false);
      clearTimeout(timmer);
    }, 1000);
    const timmerHide = setTimeout(() => {
      setShowLoading(false);
      clearTimeout(timmerHide);
    }, 2000);
  };

  

  return (
    <body className={theme?.themeMode} onLoad={onBodyLoaded}>
      {showLoading && <Loading isLoading={loading} />}
      <Header />
  
      {props.children}
      {isLg && <MouseCursor />}
      <ConfigArea />
      <Footer />
    </body>
  );
};
export default LayoutBasic;
