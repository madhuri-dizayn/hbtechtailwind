import React from "react";

const Slide1 = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-8 md:pr-[6.8vw] pl-[6.8vw] ">
      <div className="text-[60px] font-semibold text-[#767D90] max-w-[891px] mx-auto text-center md:max-w-[560px] md:text-3xl">
        We’ll build the{" "}
        <span className="text-[#18181B] font-bold">website </span>
        and <span className="text-[#18181B] font-bold">App</span> of your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Dream
        </span>
      </div>

      <div className="text-base font-medium leading-relaxed text-[#767D90] text-center max-w-screen-md mx-auto mt-10 md:max-w-[478px] md:text-base md:font-medium">
        Best quality/price ratio in the industry • Fast, Responsive & Animated
        <br />
        Mobile and Web Apps • Unbeatable Prices
      </div>
    </div>
  );
};

export default Slide1;
