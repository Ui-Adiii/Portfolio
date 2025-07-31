import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfilePic2 from "/images/ProfilePic2.jpeg";
import { InfoContext } from "@/context/Context";
const About = () => {
  const {shortDescription,description}=useContext(InfoContext)
  return (
    <div className="flex py-10 md:py-44  text-white flex-col-reverse min-h-screen md:flex-row  gap-10 lg:gap-0">
      <div className="w-full md:w-1/2   ">
        <h1 className="md:text-7xl font-semibold tracking-tighter uppercase hidden md:block">
          about me
        </h1>
        <img
          src={ProfilePic2}
          className="w-full h-full object-cover object-fit md:hidden"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 ">
        <h1 className=" text-2xl text-white/40 md:text-3xl md:text-white lg:text-4xl  tracking-tighter leading-none ">
          {shortDescription}
        </h1>
        <p className="hidden md:block text-white/40 my-5">
         {description}
        </p>

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
