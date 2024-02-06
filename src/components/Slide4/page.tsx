import React from "react";
import iconimage from "../Assests/icon.png";
import SlideIcon2 from "../Icons/SlideIcon2";
import SlideIcon3 from "../Icons/SlideIcon3";
import SlideIcon4 from "../Icons/SlideIcon4";
import SlideIcon5 from "../Icons/SlideIcon5";
import Image from "next/image";

const Slide4 = () => {
  return (
    <div className="flex mt-[340px] flex-col items-center justify-center md:flex-col md:items-center md:mt-[156px]">
      <p className="text-[#18181b] text-3xl font-semibold md:text-base md:flex md:flex-col md:items-center">
        Meet our top-tier
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-semibold text-4xl md:text-3xl">
          {" "}
          Customers
        </span>
      </p>

      <div className="flex justify-center items-center w-[80vw] flex-col gap-3 pt-16 md:hidden">
        <div className="flex w-full justify-center gap-3 first-child:w-3/4">
          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <Image alt="Slide4Image1" src={iconimage} />
          </div>

          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>
          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>
          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>
          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>
        </div>

        <div className="flex w-full justify-center gap-3 first-child:w-3/4">
          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>

          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>

          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>

          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>

          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>
          <div className="flex justify-center items-center w-[144px] h-[108px] shadow-md">
            <SlideIcon5 />
          </div>
        </div>
      </div>

      <div className="md:flex justify-center items-center w-[80vw] flex-col gap-3 pt-16 hidden">
        <div className="flex w-full justify-center gap-3 first-child:w-3/4">
          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <Image alt="Slide4Image1" src={iconimage} />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>
          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>
        </div>

        <div className="flex w-full justify-center gap-3 first-child:w-3/4">
          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>
        </div>

        <div className="flex w-full justify-center gap-3 first-child:w-3/4">
          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>

          <div className="flex justify-center items-center w-[78px] h-[60px] shadow-md">
            <SlideIcon4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
