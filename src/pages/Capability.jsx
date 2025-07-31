import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";
import Container from "./Container";
import {easeIn, motion} from 'framer-motion'
const Capability = () => {
  const { skills } = useContext(InfoContext);
  return (
    <div className="gap-5 flex md:flex-row flex-col py-10  text-white  ">
      <div className="w-full md:w-1/2 ">
        <motion.h1 
          initial={{
            y:20,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          viewport={{
            once:false,
            amount:.5
          }}
          transition={{
            delay:.2,
            duration:.7,
            transform:easeIn
          }}
        className=" text-4xl leading-none tracking-tighter font-semibold uppercase lg:text-6xl ">My Capabilities</motion.h1>
      </div>
      <div className="w-full md:w-1/2 ">
        <motion.p 
        initial={{
            y:20,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          viewport={{
            once:false,
            amount:.5
          }}
          transition={{
            delay:.2,
            duration:.7,
            transform:easeIn
          }}
           className="text-white/40 mb-5">
          I’m always looking to expand my skill set and grow as a developer. I enjoy learning new technologies and staying updated with modern development practices.
        </motion.p>
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
