import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact"
import Capability from "./Capability";
import MyExp from "./MyExp";
const Main = () => {
  return (
    <>
      <Home/>
      <hr/>
      <MyExp/>
      <hr />
      <Projects/>
      <Capability/>
      <hr />
      <hr className="mb-32 md:mb-0"/>
      <About/>
      <hr />
      <Contact  />
    </>
  );
};

export default Main;
