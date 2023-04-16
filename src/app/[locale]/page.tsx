"use client";

import { useContext } from 'react';

import { Inter } from 'next/font/google';
import Image from 'next/image';

import { ThemeContext } from '../common/contexts/ThemeContext';
import LayoutBasic from '../common/layout/basic';
import HomeContainer from '../modules/home/containers/Home.container';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {theme} = useContext(ThemeContext)
  return (
    <LayoutBasic>
      <main className={`flex container mx-auto flex-col items-center justify-between ${inter.className} px-4`}>
        <section className="w-full h-screen">
          <div className="banner">
            <Image
              className="-z-10"
              fill
              src={theme?.isDarkMode ? "/images/bannerBgImage.jpeg" : "/images/bannerBgImageLight.jpeg"}
              alt={""}
              style={{objectFit: 'cover'}}
            />
          </div>
          <HomeContainer/>
        </section>
      </main>
      <div className="h-20"></div>
      </LayoutBasic>
  );
}
