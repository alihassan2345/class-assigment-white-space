import Image from "next/image";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full bg-[#043873] text-white sm:px-24 px-5">
      <div>
        <section className="flex items-start sm:justify-evenly justify-center flex-wrap">
          <Whitespace />
          <Product />
          <Resources />
          <Company />
          <TryItToday />
        </section>
        <section className="border-t-[1px] border-[#2E4E73] mt-20 mmd:py-0 py-5 flex flex-wrap items-center mmd:h-12 justify-between  mmd:flex-row flex-col mmd:gap-0 gap-4">
          <ul className="h-full flex mmd:flex-row flex-col mmd:gap-10 gap-2 items-center justify-center">
            {[
              "english",
              "terms & privacy",
              "security",
              "status",
              "©2021 Whitepace LLC.",
            ].map((val, ind) => (
              <li key={ind} className="capitalize">
                {val}
              </li>
            ))}
          </ul>
          <ul className="flex gap-2">
            {["/facebook (1).png", "/twitter (1).png", "/Linkedin.png"].map(
              (val, ind) => (
                <li key={ind} className="relative h-5 w-5">
                  <Image src={val} alt="" className="object-contain" fill={true} />
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const Product = () => {
  return (
    <ul className="w-40 my-5 sm:text-start text-center">
      {["product", "overview", "pricing", "customer status"].map((val, ind) => (
        <li key={ind} className={`capitalize ${ind === 0 && "font-semibold"} my-2`}>
          {val}
        </li>
      ))}
    </ul>
  );
};

const Resources = () => {
  return (
    <ul className="w-40 my-5 sm:text-start text-center">
      {["resources", "blog", "Guides & tutorials", "Help center"].map(
        (val, ind) => (
          <li
            key={ind}
            className={`capitalize ${ind === 0 && "font-semibold"} my-2`}
          >
            {val}
          </li>
        )
      )}
    </ul>
  );
};

const Company = () => {
  return (
    <ul className="w-40 my-5 sm:text-start text-center">
      {["company", "about us", "careers", "media kit"].map((val, ind) => (
        <li key={ind} className={`capitalize ${ind === 0 && "font-semibold"} my-2`}>
          {val}
        </li>
      ))}
    </ul>
  );
};

const Whitespace = () => {
  return (
    <aside className="w-40 my-10">
      <div className="flex items-center justify-center gap-2 my-1">
        <span className="relative h-5 w-5 inline-block">
          <Image src="/logo (1).png" alt="wq" fill={true} className="object-contain" />
        </span>
        <h1 className="text-2xl font-semibold">whitespace</h1>
      </div>
      <p className="text-sm sm:text-start text-center">
        whitepace was created for the new ways we live and work. We make a
        better workspace around the world
      </p>
    </aside>
  );
};

const TryItToday = () => {
  return (
    <div className="w-40 flex flex-col gap-3 my-5 sm:text-start text-center">
      <h1 className="text-2xl font-semibold capitalize">try it today</h1>
      <p className="text-sm">
        Get started for free. Add your whole team as your needs grow.
      </p>
      <Button text="start today" />
    </div>
  );
};