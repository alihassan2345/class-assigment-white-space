import React from "react";
import Button from "./Button";
import Image from "next/image";

const Last = () => {
  return (
    <div className="w-full py-12 bg-[#043873] flex items-center xs:justify-center justify-start text-white px-5">
      <section className="h-full w-[400px] text-center flex flex-col xs:items-center items-start justify-center gap-5">
        <h1 className="xs:text-5xl text-4xl font-bold xs:text-center text-start">Try Whitepace today</h1>
        <h3 className="xs:text-[16px] text-sm xs:text-center text-start">
          Get started for free.
          <br />
          Add your whole team as your needs grow.
        </h3>
        <Button text="try taskey free" />
        <h3>On a big team? Contact sales</h3>
        <ul className="flex gap-5">
        {["/appleIcon.png", "/windowsIcon.png", "/androidIcon.png"].map((val, ind) => (
          <li key={ind} className="relative h-10 w-10">
            <Image
            src={val}
            alt=""
            fill={true}
            className="object-contain"
            />
          </li>
        ))}
        </ul>
      </section>
    </div>
  );
};

export default Last;