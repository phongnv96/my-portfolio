"use client";

import { Inter } from 'next/font/google';

import HomeContainer from './modules/home/containers/Home.container';

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
