import React from "react";
import WorkAbout from "./WorkAbout";
import Contact from "./Contact";
import Capability from "./Capability";
import MyExp from "./MyExp";

const Experience = () => {
  return (
    <div  className="pt-20">
      <WorkAbout />
      <Capability/>
      <MyExp/>
      <Contact/>
    </div>
  );
};

export default Experience;
