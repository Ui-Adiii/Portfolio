import React from "react";
import WorkAbout from "./WorkAbout";
import Contact from "./Contact";
import Capability from "./Capability";
import MyExp from "./MyExp";

const Experience = () => {
 
  
  return (
    <div  className="pt-10 md:pt-20">
      <WorkAbout />
      <hr />
      <Capability/>
      <hr />
      <MyExp/>
      <hr />
      <Contact/>
    </div>
  );
};

export default Experience;
