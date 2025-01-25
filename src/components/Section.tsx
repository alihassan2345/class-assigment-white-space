import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Section({
  heading,
  paragrapgh,
  button,
  direction,
  bgColor,
  image,
}: {
  heading: string;
  paragrapgh: string;
  button: string;
  direction: boolean;
  bgColor: string;
  image?: string;
}) {
  return (
    <main
      className={`md:h-screen w-full bg-[${bgColor}] flex sm:py-0 py-10 mmd:px-0 px-5 mmd:gap-0 gap-5 ${
        direction ? "sm:flex-row flex-col" : "sm:flex-row-reverse flex-col"
      } items-center justify-center ${
        bgColor === "#FFFFFF" ? "text-black" : "text-white"
      }`}>
      <section className="md:h-full h-[250px] sm:text-start text-center mmd:w-[40vw] sm:w-[50vw] w-full flex sm:items-start items-center  justify-center flex-col md:gap-10 gap-4">
        <h1 className="md:text-5xl text-4xl font-bold">{heading}</h1>
        <p className="md:text-[16px] text-sm">{paragrapgh}</p>
        <Button text={button} />
      </section>
      <section className="md:h-full h-[250px] sm:w-[50vw] w-[300px] flex items-center justify-center">
        <div className={`md:h-[65%] h-[90%] mmd:w-4/5 md:w-full w-full ${!image && "bg-[#C4DEFD]"} relative`}>
          {image && (
            <Image src={"/content.png"} alt="" fill={true} className="object-contain" />
          )}
        </div>
      </section>
    </main>
  );
}