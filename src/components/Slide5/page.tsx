"use client";
import React, { useState } from "react";
import Image from "next/image";
import FrameIcon from "../Icons/FrameIcon";
import UiIcon from "../Icons/UiIcon";
import Slide5Image1 from "../Assests/Slide5Image1.png";
import Slide5Image2 from "../Assests/Slide5Image2.png";
import Slide5Image3 from "../Assests/Slide5Image3.png";
import Slide5tablet from "../Slide5tablet/page";

const Slide5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Web Development",
      description: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
      logo: UiIcon,
      activeLogo: UiIcon,
      imgUrl: Slide5Image1,
    },
    {
      title: "App Design & Development",
      description: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
      logo: UiIcon,
      activeLogo: UiIcon,
      imgUrl: Slide5Image2,
    },
    {
      title: "UI/UX Design",
      description: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
      logo: UiIcon,
      activeLogo: UiIcon,
      imgUrl: Slide5Image3,
    },
  ];

  return (
    <>
      <div className="flex justify-between text-left pl-[5.5%] pt-[265px] pr-[9.7vw] md:hidden">
        <div className="">
          <div className="pl-9">
            <p className="text-[#767D90] text-base font-medium">OUR SERVICES</p>
            <p className="text-[#212529] text-[32px] font-semibold max-w-[595px] md:w-[338px] md:flex md:items-center">
              Bring the world to your door with our Best in class services
            </p>
          </div>
          <div className="w-[550px] pt-[40px]">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  className={`cursor-pointer rounded-2xl flex items-start gap-5 p-14 py-12 px-10 mb-10 max-h-0 overflow-hidden transition duration-300${
                    activeIndex === index
                      ? "mb:[0] bg-gradient-to-tr from-[rgba(239,251,255,.09)] to-[rgba(208,224,229,.5)] max-h-[250px] overflow-hidden"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center rounded-md w-[56px]">
                    <item.logo />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between pb-3">
                      <p className="text-[#212529] text-xl font-bold">
                        {item.title}
                      </p>
                      <FrameIcon
                        style={{
                          transform:
                            activeIndex == index
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    </div>
                    <div
                      // hidden={activeIndex != index}
                      className="text-[#767D90] text-base font-medium "
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[33vw] pt-[130px] lg:hidden">
          <div>
            <Image
              className="w-full h-auto object-contain"
              alt="Slide5Image1"
              src={data[activeIndex].imgUrl}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col px-[8.5%]">
        <Slide5tablet />
      </div>
    </>
  );
};

export default Slide5;
