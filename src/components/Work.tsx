import React from "react";
import Button from "./Button";

const Work = () => {
  return (
    <div className="w-full bg-[#043873] text-white flex md:justify-center justify-start px-5 py-10">
      <div className="md:w-3/5 w-full flex md:items-center items-start justify-center flex-col sm:gap-10 gap-4">
        <h1 className="sm:text-5xl text-4xl font-bold md:text-center text-start">Your work, everywhere you are</h1>
        <p className="md:text-center text-start sm:text-[16px] text-sm">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <Button text="try taskey" />
      </div>
    </div>
  );
};

export default Work;