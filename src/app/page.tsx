"use client";

import HomeContainer from "./modules/home/containers/Home.container";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ThemeContext } from "./common/contexts/ThemeContext";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <main className={`flex mx-auto flex-col items-center justify-between ${inter.className} px-4`}>
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
    </>
  );
}
