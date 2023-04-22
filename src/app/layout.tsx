"use client";

import './globals.css';

import ThemeProvider from './common/contexts/ThemeContext';
import LayoutBasic from './common/layout/basic';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <>
          <title>Dev Cỏ</title>
          <link rel="icon" type="image/x-icon" href="/com-laptop-code.svg"/>
          <meta name="description" content="Nguyen Van Phong Portfolio"></meta>
          <meta property="og:title" content="Hello guys, My name is Phong, I'm a web developer and this is my portfolio!" />
          <meta property="og:image:url" content="/images/coding.png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta name="robots" content="index" />
        </>
        <LayoutBasic>{children}</LayoutBasic>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
