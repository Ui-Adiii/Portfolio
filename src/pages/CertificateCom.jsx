import CertificateCard from "@/components/CertificateCard";
import { InfoContext } from "@/context/Context";
import React, { useContext } from "react";

const CertificateCom = () => {
   const {certificates} = useContext(InfoContext);
   console.log(certificates)
  return (
    <div className="py-20 flex flex-wrap gap-5 justify-center ">
      {
        certificates.map((certificate)=>(
          <CertificateCard
            title={certificate.title}
            issuer={certificate.issuer}
            date={certificate.date}
            link={certificate.link}
            image={certificate.image}
          />
        ))
      }
    
    </div>
  );
};

export default CertificateCom;
