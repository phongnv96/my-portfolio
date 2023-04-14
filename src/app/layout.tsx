"use client";

import "./globals.css";

import LayoutBasic from "./common/layout/basic";
import ThemeProvider from "./common/contexts/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <LayoutBasic>{children}</LayoutBasic>
      </html>
    </ThemeProvider>
  );
}
