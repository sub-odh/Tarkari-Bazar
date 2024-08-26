import React from "react";
import Image from "next/image";
import {
  mangoLogo,
  stepsLogo,
  foodnetworkLogo,
  foodLogo,
  bookoffLogo,
  gseriesLogo,
} from "@/assets/images";
import { line } from "@/assets/icons";

const companyLogos = [
  stepsLogo,
  mangoLogo,
  foodnetworkLogo,
  foodLogo,
  bookoffLogo,
  gseriesLogo,
];

const brands = () => {
  return (
    <div className="flex p-14 justify-between items-center">
      {companyLogos.map((logo, index) => (
        <div key={index} className="flex items-center">
          <Image src={logo} alt={`Company logo ${index}`} />
          {index < companyLogos.length - 1 && (
            <Image src={line} alt="line" className="mx-20" />
          )}
        </div>
      ))}
    </div>
  );
};

export default brands;
