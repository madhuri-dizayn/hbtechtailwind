import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const FooterSection = () => {
  return (
    <footer className="rounded-xl opacity-90 bg-gradient-to-tr from-[rgba(118,125,144,0.04)] to-[#D0E0E5] pt-[96px] pr-20 pl-20 pb-10 md:mt-[185px]">
      <div className="flex items-center justify-between text-right font-semibold text-xl text-[#212529] p-[8px 0] md:flex-col">
        <div className="flex items-center gap-3 md:text-sm md:font-medium md:mb-[60px]">
          <FooterIcon />
          <p className=" md:order-2">HB - Tech</p>
        </div>
        <div className="flex items-center gap-20 text-[#212529] font-medium text-sm md:gap-8 md:flex-wrap md:w-[100%] md:gap-x-[38px] md:justify-between">
          <Link href={"#"}>
            <p>COMPANY</p>
          </Link>
          <Link href={"#"}>
            <p>ABOUT US</p>
          </Link>
          <Link href={"#"}>
            <p>SERVICES</p>
          </Link>
          <Link href={"#"}>
            <p>OUR WORK</p>
          </Link>
        </div>
      </div>
      <div className="h-1 opacity-10 bg-[#8140F7] mt-10 mb-12 md:hidden"></div>
      <div className="flex items-center justify-between md:mt-[50px] md:flex-col md:gap-7">
        <div className="flex items-center gap-4 md:gap-[24px]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className="text-[#767D90] mt-12 md:mt-4">
          Copyright ©2023 HB-Tech
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
