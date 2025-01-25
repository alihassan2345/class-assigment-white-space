import React from "react";
import Button from "./Button";
const details: string[] = [
  "Sync unlimited devices",
  "10 GB monthly uploads",
  "200 MB max. note size",
  "Customize Home dashboard and access extra widgets",
  "Connect primary Google Calendar account",
  "Add due dates, reminders, and notifications to your tasks",
];
const cardInfo = [
  {
    heading: "free",
    price: "$0",
    paragrapgh: "Capture ideas and find them quickly",
  },
  {
    heading: "personal",
    price: "$11.99",
    paragrapgh: "Keep home and family on track",
  },
  {
    heading: "organization",
    price: "$49.99",
    paragrapgh: "Capture ideas and find them quickly",
  },
];

const Plan = () => {
  return (
    <div className=" w-full flex items-center justify-between py-10 flex-col gap-5">
      <section className="flex items-center justify-center flex-col sm:w-3/5 w-full gap-5">
        <h1 className="sm:text-5xl text-4xl font-bold text-center">Choose Your Plan</h1>
        <p className="text-center sm:text-[16px] text-sm">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </section>
      <section className="h-[80%] w-full flex items-center justify-center gap-8 text-white">
        {cardInfo.map((val, index) => (
          <div
            key={index}
            className={`sm:w-[30%] xs:w-[70%] w-[90%] ${
              index !== 1
                ? "py-3 px-5  gap-2 border-[#FFE492] text-black border-[1px] sm:flex hidden"
                : "bg-[#043873] sm:py-8 py-4 px-5 gap-5 flex"
            } rounded-md flex-col`}
          >
            <h2 className="text-lg font-semibold capitalize">{val.heading}</h2>
            <h3
              className={`text-2xl font-bold ${
                index === 1 && "text-[#FFE492]"
              }`}
            >
              {val.price}
            </h3>
            <p>{val.paragrapgh}</p>
            <ul className="flex flex-col gap-2">
              {details.map((val, ind) => (
                <>
                  <li key={ind} className="relative">
                    <span
                      className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 flex bg-contain ${
                        index === 1
                          ? "bg-[url('/icon.png')]"
                          : "bg-[url('/icon1.png')]"
                      }`}
                    ></span>
                    <h4 className="ml-8 text-balance">{val}</h4>
                  </li>
                </>
              ))}
            </ul>
            <div>
              <Button text="get started" border={index === 1 ? false : true} arrow={true} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Plan;