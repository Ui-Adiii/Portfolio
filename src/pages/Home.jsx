import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { InfoContext } from "@/context/Context";
import ProfilePic1 from "/images/ProfilePic1.jpeg";

const Home = () => {
  const { linkedin, github, fullName } = useContext(InfoContext);
  return (
    <div className="flex pt-20 text-white flex-col  sm:flex-row py-10 gap-10 lg:gap-0">
      <div className="w-full sm:w-1/2 flex  md:justify-center md:items-center flex-col gap-4 ">
        <h1 className="w-fit  lg:w-full text-6xl tracking-tight lg:text-8xl font-bold capitalize  leading-none">
          hi, i am <br />
          {fullName}.
        </h1>
        <p className=" text-md lg:text-lg text-white/40">
          A student at C.V. Raman Global
          University (B.Tech), passionate about building accessible and
          user-friendly websites.
        </p>
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
        <img
          className="h-full w-full object-cover object-center "
          src={ProfilePic1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
