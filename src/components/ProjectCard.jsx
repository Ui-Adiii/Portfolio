import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Github, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion";
import Container from "@/pages/Container";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <>
      <div className="flex flex-col md:flex-row w-full  gap-10 pt-5 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easeIn }}
          className="w-full md:w-1/2 backdrop-blur z-0 bg-white/10 flex justify-center items-center rounded-lg"
        >
          <div className="p-7 md:p-10 rounded-lg">
            <img
              src={`/images/Projects/${project.image}`}
              className="rounded-lg w-full h-full object-cover object-center"
              alt=""
            />
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 flex flex-col gap-4  justify-center">
          <h1 className="text-3xl tracking-tight">{project.title}</h1>
          <p className="text-white/30">{project.description}</p>
          <h4 className="uppercase text-white/80">project Info</h4>
          <hr className="opacity-40" />
          {project.projectInfo.year && (
            <>
              <div className="flex items-center  text-white/60 justify-between">
                <p>Year</p>
                <p>{project.projectInfo.year}</p>
              </div>
              <hr className="opacity-40" />
            </>
          )}
          {project.projectInfo.role && (
            <>
              <div className="flex items-center text-white/60 justify-between">
                <p>Role</p>
                <p>{project.projectInfo.role}</p>
              </div>
              <hr className="opacity-40" />
            </>
          )}
          <div className="flex flex-col items-start gap-2 ">
            {project.teckStack?.length > 0 && (
              <span className="font-semibold">Tech Stack :</span>
            )}
            <div className="flex flex-wrap gap-4">

            {project.teckStack &&
              project.teckStack.map((teck, idx) => <Container key={idx}>{teck}</Container>)}
            </div>
          </div>

          <div className="flex items-center justify-start gap-5">
            {project.links.liveDemo && (
              <Link
                className={
                  "text-yellow-400 flex gap-2 border-b border-transparent hover:border-white/40 transition-all  "
                }
                to={project.links.liveDemo}
              >
                Live Link <Link2 />
              </Link>
            )}
            {project.links.github && (
              <Link
                className={
                  "text-yellow-400 flex gap-2 border-b border-transparent hover:border-white/40 transition-all "
                }
                to={project.links.github}
              >
                Source Code <Github size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <hr className="mt-5" />
    </>
  );
};

export default ProjectCard;
