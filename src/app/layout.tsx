"use client";

import "./globals.css";

import LayoutBasic from "./common/layout/basic";
import ThemeProvider from "./common/contexts/ThemeContext";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <LayoutBasic>
          {children}
        </LayoutBasic>
      </html>
    </ThemeProvider>
  );
}

export default RootLayout