import Image from "next/image";
import React from "react";

const Card = ({
  bgColor,
  paragraph,
  heading,
  profilePara,
}: {
  bgColor: string;
  paragraph: string;
  picture: string;
  heading: string;
  profilePara: string;
}) => {
  return (
    <div
      className={`h-96 sm:w-80 w-72 rounded-xl ${bgColor} ${
        bgColor === "bg-[#FFFFFF]" ? "text-black" : "text-white"
      } py-5 flex justify-between flex-col px-8 shadow-card`}
    >
      <div className="relative w-12 h-12">
        <Image
          src={
            bgColor === "bg-[#FFFFFF]" ? "/blueQuote.png" : "/whiteQuote.png"
          }
          alt=""
          fill={true}
          className="object-contain"
        />
      </div>
      <p>{paragraph}</p>
      <div
        className={`h-2/5 w-full flex items-center justify-center gap-5 border-t-2 ${
          bgColor === "bg-[#FFFFFF]" && "border-black"
        }`}
      >
        <section className="h-20 w-20 relative">
          <Image src={"/picture"} alt="a" fill={true} className="object-contain" />
        </section>
        <section className="h-1/2 w-full">
          <h2 className="text-lg font-semibold text-black">{heading}</h2>
          <p className="text-sm">{profilePara}</p>
        </section>
      </div>
    </div>
  );
};

export default Card;