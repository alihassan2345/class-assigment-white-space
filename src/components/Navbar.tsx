import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Button from "./Button";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="relative h-16 w-full bg-[#043873] lg:px-20 sm:px-10 px-5 text-white flex items-center justify-between">
      <div className="h-full flex items-center justify-center gap-2">
        <span className="h-8 w-8">
          <Image src={"/logo (1).png"} height={100} width={100} alt="logo" />
        </span>
        <h1 className="font-bold text-2xl mb-2">whitespace</h1>
      </div>
      <ul className="mmd:flex hidden h-full">
        {["products", "solutions", "resources", "pricing"].map(
          (val, ind) => (
              <li
              key={ind}
              className="flex items-center justify-center h-full w-28 capitalize text-sm gap-2"
            >
              <h2>{val}</h2>
              <span>
                <MdOutlineKeyboardArrowDown className="font-extralight" />
              </span>
            </li>
          )
        )}
      </ul>
      <span className="sm:flex hidden gap-5 mmd:mx-5 mx-8 py-[8px]">
        <button className="py-2 px-7 bg-[#FFE492] text-black rounded-md capitalize">
          login
        </button>
        <Button text="try whitespace free" />
      </span>
      <span className="h-10 w-10 mmd:hidden flex items-center justify-center absolute right-5">
        <IoIosMenu className="h-[90%] w-[90%]"/>
      </span>
    </nav>
  );
};

export default Navbar;