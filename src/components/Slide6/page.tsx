import React from "react";

import Image from "next/image";
import FrameIcon1 from "../Icons/FrameIcon1";
import imageslide from "../Assests/imageslide.png";
import imageslide3 from "../Assests/imageslide3.png";
import imageslide2 from "../Assests/imageslide2.png";

const Slide6 = () => {
  const data = [
    {
      image: imageslide2,
      information1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam`,
      information: "CableVision",
      viewinfo: "View Full Project",
      frameicon: FrameIcon1,
    },
    {
      image: imageslide3,
      information1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam`,
      information: "CableVision",
      viewinfo: "View Full Project",
      frameicon: FrameIcon1,
    },
    {
      image: imageslide,
      information1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam`,
      information: "CableVision",
      viewinfo: "View Full Project",
      frameicon: FrameIcon1,
    },
  ];

  return (
    <div id="our-projects">
      <div className="w-full px-[5.5%]">
        <div className="h-auto flex items-center justify-center mt-[290px] md:flex md:items-center md:justify-center md:mt[70px]">
          <p className="text-[#18181b] flex items-center justify-center gap-3 text-center text-[36px] font-bold md:gap-3 md:flex md:items-center md:text-2xl md:font-semibold">
            Our
            <span className="bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent font-bold md:font-semibold md:text-2xl">
              Projects
            </span>
          </p>
        </div>
        <div className="pt-[60px] flex flex-col gap-[132px] items-stretch pl-[5.5vw] pr-[5.5vw] mx-auto md:pt-[64px] md:gap-20 md:pl-[24px] md:pr-[24px] md:max-w-[502px] md:margin-auto">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center gap-3 md:w-[100%] md:flex-col-reverse md:items-center md:gap-[44px]"
              >
                <div className="w-[45%] md:w-[100%]">
                  <p className="text-[#18181B] text-2xl font-semibold pb-4">
                    {item.information}
                  </p>
                  <p className="text-[#767D90] text-base font-medium pb-8 w-full mb-8">
                    {item.information1}
                  </p>

                  <div className="cursor-pointer inline-flex items-center gap-3 text-body-b2 relative group py-3 pl-3">
                    <div className="absolute group-hover:w-full hover:rounded-2xl top-1/2 left-0 -translate-y-1/2 bg-[#E3F0F5] rounded-full duration-700 w-[44px] h-[44px]"></div>
                    <p className="text-[#3874F4] font-medium z-8 relative">
                      {item.viewinfo}
                    </p>
                    <div className="flex items-center z-10">
                      <FrameIcon1 />
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    // className="w-full h-auto object-contain"
                    alt="image"
                    src={item.image}
                  />
                </div>
              </div>
            );
          })}

          <div className="mt-[100px] mb-[88px] flex items-center justify-center md:hidden">
            <button className="cursor-pointer w-28 h-10 flex justify-center items-center border-none bg-[#3874F4] text-white rounded-md px-4 py-2">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
