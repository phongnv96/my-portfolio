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
      <div className="px-4">
        <ProcessList />
        <About />
        <AmazingWorks />
        <Skills />
        <TimeLine />
        <ContactMe />
      </div>
    </>
  );
};

export default HomeContainer;
