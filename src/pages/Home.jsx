import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { InfoContext } from "@/context/Context";
import ProfilePic1 from "/images/ProfilePic1.jpeg";
import {easeIn, easeOut, motion} from "framer-motion"
const Home = () => {
  const { linkedin, github, fullName } = useContext(InfoContext);
  return (
    <div className="flex pt-20 max-h-screen text-white flex-col  sm:flex-row py-10 gap-10 lg:gap-0">
      <div className="w-full sm:w-1/2 flex  md:justify-center md:items-center flex-col gap-4 ">
        <motion.h1 
        initial={{
          opacity:0,
          y:10
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        viewport={{
          once:false,
          amount:.6
        }}
        transition={{
          delay:.2,
          duration:1,
          transform:easeIn
        }}
         className="w-fit  lg:w-full text-6xl tracking-tight lg:text-8xl font-bold capitalize  leading-none">
          hi, i am <br />
          {fullName}.
        </motion.h1>
        <motion.p 
        initial={{
          opacity:0,
          y:10
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        viewport={{
          once:false,
          amount:.6
        }}
        transition={{
          delay:.2,
          duration:1,
          transform:easeIn
        }}
        className=" text-md lg:text-lg text-white/40">
          A student at C.V. Raman Global
          University (B.Tech), passionate about building accessible and
          user-friendly websites.
        </motion.p>
        <div className="flex justify-start  w-full gap-4 items-center">
          <Link to={"/contact"}>
            <Button variant={"secondary"}>Contact me</Button>
          </Link>
          <Link to={linkedin} className={"rounded-full"}>
            <Linkedin />
          </Link>
          <Link to={github} className={"rounded-full"}>
            <Github />
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 rounded-md overflow-hidden">
        <motion.img
          initial={{
            y:-100,
            scale:.7,
            opacity:.1
          }}
          whileInView={{
            y:0,
            scale:1,
            opacity:1
          }}
          viewport={{
            once:true,
            amount:.5
          }}
          transition={{
            delay:.2,
            duration:.7,
            ease:easeOut
          }}
          className="h-full w-full object-cover object-center "
          src={ProfilePic1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
