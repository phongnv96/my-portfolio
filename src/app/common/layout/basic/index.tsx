"use client";

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import ConfigArea from "../../components/ThemeSetting/ConfigArea";
import Header from "./Header/Header";
import MouseCursor from "../../components/Mouse/MouseCursor";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/themeConfig";
import Footer from "./Footer";
import { useBreakpoints } from "../../hooks/useBreakPoint";
import Loading from "@/app/common/components/Loading/loading";

interface Props {
  children: React.ReactNode;
}
const LayoutBasic = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { isLg } = useBreakpoints();
  const [loading, setLoadingPage] = useState<boolean>(true);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const onBodyLoaded = () => {};

  useEffect(() => {
    const timber = setTimeout(() => {
      setLoadingPage(false);
      clearTimeout(timber);
    }, 500);
    const timberHide = setTimeout(() => {
      setShowLoading(false);
      clearTimeout(timberHide);
    }, 2000);
  }, []);

  return (
    <body className={theme?.themeMode} onLoad={onBodyLoaded}>
      {/* {showLoading && <Loading isLoading={loading} />} */}
      <Header />

      {props.children}
      {isLg && <MouseCursor />}
      <ConfigArea />
      <Footer />
    </body>
  );
};
export default LayoutBasic;
