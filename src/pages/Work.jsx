import Card from "@/components/Card";
import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";

const Work = () => {
  const { experiences } = useContext(InfoContext);
  return <div  className="pt-20 text-white">{
    experiences.map((exp,idx)=>(
      <Card exp={exp} key={idx}/>
    ))
  }</div>;
};

export default Work;
