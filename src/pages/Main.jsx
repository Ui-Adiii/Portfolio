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
      <Projects/>
      <hr className="mt-10" />
      <Capability/>
      <hr />
      <MyExp/>
      <hr />
      <About/>
      <hr />
      <Contact  />
    </>
  );
};

export default Main;
