"use client";

import "./globals.css";

import LayoutBasic from "./common/layout/basic";
import Loading from "./common/components/Loading/loading";
import { Suspense } from "react";
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
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </LayoutBasic>
      </html>
    </ThemeProvider>
  );
}

export default RootLayout