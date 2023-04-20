"use client";

import HomeContainer from "./modules/home/containers/Home.container";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ThemeContext } from "./common/contexts/ThemeContext";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <main className={`mx-auto relative ${inter.className} `}>
        <section className="w-full h-full min-h-screen">
          <HomeContainer />
        </section>
      </main>
    </>
  );
};
export default Home;
