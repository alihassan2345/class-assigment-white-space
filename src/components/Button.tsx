import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  text,
  border,
  arrow,
}: {
  text: string;
  border?: boolean;
  arrow?: boolean;
}) => {
  return (
    <button
      className={`md:py-3 py-2 md:pl-5 pl-2 md:pr-4 pr-2 ${
        border ? "border-[1px] border-[#FFE492]" : "bg-[#4F9CF9] text-white"
      } rounded-md capitalize flex items-center justify-center gap-2 md:tracking-normal tracking-tighter md:text-[16px] text-sm`}
    >
      <h2>{text}</h2>
      {!arrow && (
        <span className="h-3 w-3 flex items-center justify-center relative top-[2px]">
          <FaArrowRight className="font-lighter" />
        </span>
      )}
    </button>
  );
};

export default Button;