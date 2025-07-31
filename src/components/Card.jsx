import React from "react";
import {easeIn, motion} from 'framer-motion'
const Card = ({ exp }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="text-2xl leading-none tracking-tighter">{exp.role}</p>
        <motion.p
        initial={{
            x:20,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          viewport={{
            once:false,
            amount:.5
          }}
          transition={{
            delay:.2,
            duration:.7,
            transform:easeIn
          }}
        >{exp.time}</motion.p>
      </div>
      <h1  className="text-yellow-400">{exp?.companyName}</h1>
      <p className="text-white/50">{exp.description}</p>
    </div>
  );
};

export default Card;
