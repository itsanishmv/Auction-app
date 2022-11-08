import React from "react";
import Image from "next/image";
import logo from "../public/images/Logo.svg";
import SolidButton from "./utility-components/SolidButton";
function Navbar() {
  return (
    <div className=" fixed right-0 left-0 z-20 bg-[white] flex py-2 px-10 justify-between shadow-xl">
      <Image className=" h-10 w-10" src={logo} />
      <div className="flex gap-[1rem] items-center">
        <h1 className="font-bold cursor-pointer">Items</h1>
        <h1 className="font-bold cursor-pointer">Contact</h1>
        <SolidButton text={"Login"} />
      </div>
    </div>
  );
}

export default Navbar;
