import ProjectCard from "@/components/ProjectCard";
import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";
const Projects = () => {
  const { projects } = useContext(InfoContext);
  return (
    <div className="text-white">
      <div>
        <h1 className="w-full  md:w-fit  lg:w-full text-6xl tracking-tight md:text-7xl font-bold uppercase leading-none">
          Featured Projects
        </h1>
        <p className=" text-md lg:text-lg text-white/40">
          Here are some of the selected projects that showcase my passion for
          full stack development.
        </p>
      </div>
      <div>
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
