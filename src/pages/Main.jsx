import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact"
const Main = () => {
  return (
    <>
      <Home/>
      <hr/>
      <Projects/>
      <hr className="mt-10" />
      <About/>
      <hr />
      <Contact  />
    </>
  );
};

export default Main;
