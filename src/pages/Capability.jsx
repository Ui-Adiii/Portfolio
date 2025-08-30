import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";
import Container from "./Container";

const Capability = () => {
  const { skills } = useContext(InfoContext);

  const categories = {
    programmingLanguages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    dataBase: "Database",
    versionControl: "Version Control",
    uiLibraries: "UI Libraries",
    stateManagementConcepts: "State Management & Concepts",
  };

  return (
    <div className="gap-5 flex md:flex-row flex-col py-10 text-white">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl leading-none tracking-tighter font-semibold uppercase lg:text-6xl">
          My Capabilities
        </h1>
      </div>

      <div className="w-full md:w-1/2 flex flex-wrap gap-4 justify-center md:justify-start">
        {Object.entries(categories).map(([key]) =>
          skills?.[key]?.length > 0 &&
          skills[key].map((item, idx) => (
            <Container key={idx} image={item.image}>
              {item.text}
            </Container>
          ))
        )}
      </div>
    </div>
  );
};

export default Capability;
