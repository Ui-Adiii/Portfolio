import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfilePic2 from "/images/ProfilePic2.jpg";
import { easeIn, motion } from "framer-motion";
import { InfoContext } from "@/context/Context";
const About = () => {
  const { shortDescription, description } = useContext(InfoContext);
  return (
    <div className="flex py-10  md:py-44  text-white flex-col-reverse max-h-screen md:flex-row  gap-10 lg:gap-0">
      <div className="w-full md:w-1/2   ">
        <motion.h1
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.8,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: easeIn,
          }}
          className="md:text-7xl font-semibold tracking-tighter uppercase hidden md:block"
        >
          about me
        </motion.h1>
        <img
          src={ProfilePic2}
          className="w-full h-full object-cover object-fit md:hidden"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 ">
        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            amount: 0,
            once: false,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: easeIn,
          }}
          className="mt-40 md:mt-0 text-2xl text-white md:text-3xl lg:text-4xl  tracking-tighter leading-none "
        >
          {shortDescription}
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            amount: .2,
            once: false,
          }}
          transition={{
            delay: 0.2,

            duration: 0.5,
            ease: easeIn,
          }}
          className=" text-white/40 my-5"
        >
          {description}
        </motion.p>

        <Link
          to={"/experience"}
          className={
            "text-yellow-400 uppercase px-6 rounded mt-4 py-2 bg-[#292929] flex gap-2 text-center w-fit"
          }
        >
          more about
        </Link>
      </div>
    </div>
  );
};

export default About;
