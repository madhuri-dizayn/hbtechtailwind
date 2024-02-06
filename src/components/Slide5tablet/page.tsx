import React from "react";
import Slide5Image1 from "../Assests/Slide5Image1.png";
import Slide5Image2 from "../Assests/Slide5Image2.png";
import Slide5Image3 from "../Assests/Slide5Image3.png";
import iconimage from "../Assests/icon.png";
import UiIcon from "../Icons/UiIcon";
import Image from "next/image";

const Slide5tablet = () => {
  const data = [
    {
      image: Slide5Image2,
      heading: "Web Development",
      logo: UiIcon,
      Subtitle: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
    },
    {
      image: Slide5Image2,
      heading: "Web Development",
      logo: UiIcon,
      Subtitle: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
    },
    {
      image: Slide5Image3,
      logo: UiIcon,
      heading: "Web Development",
      Subtitle: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
    },
  ];

  return (
    <div className="flex pt-[144px] gap-16 flex-col items-stretch max-w-[728px] m-auto">
      <div className="w-[76%]">
        <p className="text-[#767D90] text-base font-medium">OUR SERVICES</p>
        <p className="text-[#212529] text-3xl font-semibold">
          Bring the world to your door with our Best in class services
        </p>
      </div>
      {data.map((element, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center gap-[12%] flex-col"
          >
            <div className="md:mb-[80px] md:pl-4 md:pr-4 md:pb-6 md:items-left md:bg-gradient-to-tr from-[rgba(239,251,255,.09)] to-[rgba(208,224,229,.5)] md:rounded-2xl">
              <div className="flex items-center rounded-md mt-2">
                <Image alt="Slide4Image1" src={iconimage} />
              </div>
              <p className="text-xl font-semibold text-[#18181B] md:mt-4 md:mb-3">
                {element.heading}
              </p>
              <p className="text-[#767D90] text-sm font-medium">
                {element.Subtitle}
              </p>
            </div>

            <div className="w-[280px]">
              <Image
                className="w-full h-auto object-contain"
                alt="Slide5Image1"
                src={element.image}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slide5tablet;
