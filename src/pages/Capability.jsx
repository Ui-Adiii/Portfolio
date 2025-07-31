import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";
import Container from "./Container";

const Capability = () => {
  const { skills } = useContext(InfoContext);
  return (
    <div className="gap-5 flex md:flex-row flex-col py-10  text-white  ">
      <div className="w-full md:w-1/2 ">
        <h1 className=" text-4xl leading-none tracking-tighter font-semibold uppercase lg:text-6xl ">My Capabilities</h1>
      </div>
      <div className="w-full md:w-1/2 ">
        <p className="text-white/40 mb-5">
          I’m always looking to expand my skill set and grow as a developer. I enjoy learning new technologies and staying updated with modern development practices.
        </p>
        <div className="flex  flex-wrap gap-4 ">
          {skills.map((skill, idx) => (
            <Container key={idx}>{skill}</Container>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capability;
