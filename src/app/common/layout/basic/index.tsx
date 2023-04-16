"use client"

import React, { useContext } from 'react';

import MouseCursor from '../../components/Mouse/MouseCursor';
import ConfigArea from '../../components/ThemeSetting/ConfigArea';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeContextType } from '../../types/themeConfig';
import Header from './headers/Header';

interface Props {
  children: React.ReactNode;
}
export default function LayoutBasic(props: Props) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <body className={theme?.themeMode}>
      <Header />
      {props.children}
      <MouseCursor />
      <ConfigArea />
    </body>
  );
}
