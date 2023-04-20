import About from "../components/About";
import AmazingWorks from "../components/AmazingWorks";
import Banner from "../components/Banner/Banner";
import ContactMe from "../components/ContactMe";
import ProcessList from "../components/Process/ProcessList";
import React from "react";
import Skills from "../components/Skills";
import TimeLine from "../components/TimeLine";

const HomeContainer = () => {
  return (
    <>
      <Banner />
      <ProcessList />
      <About />
      <AmazingWorks />
      <Skills />
      <TimeLine />
      <ContactMe />
    </>
  );
}

export default HomeContainer;
