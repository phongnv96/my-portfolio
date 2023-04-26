"use client";

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import { Toaster } from 'react-hot-toast';

import Loading from '@/app/common/components/Loading/loading';

import MouseCursor from '../../components/Mouse/MouseCursor';
import ConfigArea from '../../components/ThemeSetting/ConfigArea';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useBreakpoints } from '../../hooks/useBreakPoint';
import { ThemeContextType } from '../../types/themeConfig';
import Footer from './Footer';
import Header from './Header/Header';

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
      {showLoading && <Loading isLoading={loading} />}
      <Header />

      {props.children}
      {isLg && <MouseCursor />}
      <ConfigArea />
      <Footer />
      <Toaster position='top-center' />
    </body>
  );
};
export default LayoutBasic;
