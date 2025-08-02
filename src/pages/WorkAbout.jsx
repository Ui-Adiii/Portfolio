import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoContext } from "@/context/Context";
import {easeIn, motion} from 'framer-motion'
const WorkAbout = () => {
  
  const { github, linkedin,shortDescription,description } = useContext(InfoContext);
  return (
    <>
      <div className="flex py-10 md:py-44  text-white flex-col  md:flex-row  gap-10 lg:gap-0">
        <div className="w-full md:w-1/2   ">
            <motion.h1 
        initial={{
          y:30,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1
        }}
        viewport={{
          once:false,
          amount:.8
        }}
        transition={{
          delay:.3,
          duration:.5,
          ease:easeIn
        }}
        className="md:text-7xl font-semibold tracking-tighter uppercase hidden md:block">
          about me
        </motion.h1>
        </div>
        <div className="w-full md:w-1/2 ">
          <h1 
          className=" text-2xl  md:text-3xl text-white lg:text-4xl  tracking-tighter leading-none ">
            {shortDescription}
          </h1>
          <p className=" text-white/40 my-5">
            {description}
          </p>

          <div className="flex gap-4 items-center">
            <a href="aditya_mallick_full_stack.pdf" download>
              <Button variant={"secondary"}>Download Resume</Button>
            </a>
            <Link to={github}>
              <Github />
            </Link>
            <Link to={linkedin}>
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkAbout;
