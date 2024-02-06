import React from "react";
import Laptop from "../Assests/Laptop.png";
import Notes from "../Assests/Notes.png";
import Phone from "../Assests/Phone.png";
import Image from "next/image";

const Slide2 = () => {
  return (
    <div className="w-full flex md:flex-col justify-between items-center pl-[5.5%]">
      <div className="mr-[15vw]">
        <div className="flex flex-col md:text-left">
          <p className="text-left text-[4.2vw] font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Products
          </p>
          <p className="text-[#767D90] text-base font-medium">
            We have made some of the best
          </p>
        </div>

        <div className="mt-[140px] md:mt-5">
          <button className="cursor-pointer w-28 h-10 flex justify-center items-center border-none bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-md px-4 py-2">
            View All
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden md:mt-8">
        <div className="rounded-xl flex gap-7 overflow-x-auto flex-shrink-0 whitespace-nowrap">
          <div>
            <Image alt="Phone" src={Notes} />
            <div className="flex">
              <p className="text-[#18181B] text-xl font-semibold">Software</p>
            </div>

            <p className="text-[#767D90] text-base font-medium">
              All in one management software
            </p>
          </div>

          <div>
            <Image alt="Phone" src={Phone} />
          </div>

          <div>
            <Image alt="Laptop" src={Laptop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
