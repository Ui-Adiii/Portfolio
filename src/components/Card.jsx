import React from "react";

const Card = ({ exp }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="text-2xl leading-none tracking-tighter">{exp.role}</p>
        <p>{exp.time}</p>
      </div>
      <h1  className="text-yellow-400">{exp?.companyName}</h1>
      <p className="text-white/50">{exp.description}</p>
    </div>
  );
};

export default Card;
