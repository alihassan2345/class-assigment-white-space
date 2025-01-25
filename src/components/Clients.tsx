import React from "react";
import Card from "./Card";
const cardData = [
  {
    bgColor: "bg-[#FFFFFF]",
    paragraph:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    picture: "/card1.png",
    heading: "Oberon Shaw, MCH",
    profilePara: "Head of Talent Acquisition, North America",
  },
  {
    bgColor: "bg-[#4F9CF9]",
    paragraph:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    picture: "/card2.png",
    heading: "Oberon Shaw, MCH",
    profilePara: "Head of Talent Acquisition, North America",
  },
  {
    bgColor: "bg-[#4F9CF9]",
    paragraph:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    picture: "/card3.png",
    heading: "Oberon Shaw, MCH",
    profilePara: "Head of Talent Acquisition, North America",
  },
];
const Clients = () => {
  return (
    <div className="w-full bg-white/60 flex items-center justify-center flex-col py-10 px-5">
      <h1 className="sm:text-5xl text-4xl font-bold text-center my-10">
        What Our Clients Says
      </h1>
      <section className="flex items-center justify-center gap-5 flex-wrap">
        {cardData.map((val, ind) => (
          <Card
            key={ind}
            bgColor={val.bgColor}
            paragraph={val.paragraph}
            picture={val.picture}
            heading={val.heading}
            profilePara={val.profilePara}
          />
        ))}
      </section>
    </div>
  );
};

export default Clients;