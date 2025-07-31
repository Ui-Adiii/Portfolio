import Card from "@/components/Card";
import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";

const MyExp = () => {
    const {experiences} =useContext(InfoContext);
    return (
    <div className="gap-5 flex md:flex-row flex-col py-10  text-white  ">
      <div className="w-full md:w-1/2 ">
        <h1 className=" text-4xl leading-none tracking-tighter font-semibold uppercase lg:text-6xl ">
          {experiences.length > 1 ? "Experiences":"Experience"}
        </h1>
      </div>
      <div className="w-full md:w-1/2 ">
        {
            experiences.map((exp,idx)=>(
                <Card key={idx} exp={exp}/>
            ))
        }
      </div>
    </div>
  );
};

export default MyExp;
