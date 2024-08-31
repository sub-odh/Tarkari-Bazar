import React from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { homeIcon, rightArrow } from "@/assets/icons";

const Nav = () => {
  return (
    <div className="bg-navImg bg-cover bg-no-repeat h-[5rem] flex items-center">
      <Image src={homeIcon} alt="Home Icon" className="ml-20" />
      <Image src={rightArrow} alt="Right Arrow" className="ml-7" />
    </div>
  );
};

export default Nav;
