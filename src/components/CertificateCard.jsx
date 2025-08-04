import React from "react";
import { easeIn, motion } from "framer-motion";
import { Button } from "./ui/button";
const CertificateCard = ({ title, issuer, date, link, image }) => {
  return (
   <motion.div
  className="bg-black/40 flex flex-col items-start justify-between  backdrop-blur-md rounded-2xl shadow-lg p-4 w-full max-w-sm border border-white"
  whileHover={{
    scale: 1.02,
  }}
  transition={{
    ease: easeIn,
    duration: 0.4,
  }}
>
  <div className="w-full h-full">
    <img
      src={`/images/certificates/${image}`}
      alt="Certificate"
      className="w-full h-full object-cover rounded-lg mb-4"
    />
  </div>
  <h2 className="text-xl font-semibold text-white">{title}</h2>
  <p className="text-sm text-white/40 mt-1">Issued by {issuer}</p>
  <p className="text-xs text-white/40 mt-2">Date: {date}</p>
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
   >
    <Button variant={'secondary'}>
    View Certificate

    </Button>
  </a>
</motion.div>

  );
};

export default CertificateCard;
