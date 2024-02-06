import React from "react";
import NavMobileIcon from "../Icons/NavMobileIcon";
import CrossIcon from "../Icons/CrossIcon";
import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const NavbarPhoneView = ({ toggleNavbar }) => {
  return (
    <div className="absolute left-0 top-0 w-full bg-[#f5fdff] rounded-[20px] h-[100vh] z-20">
      <div className="flex items-center justify-between px-10 pt-6">
        <NavMobileIcon />

        <div className="cursor-pointer" onClick={() => toggleNavbar()}>
          <CrossIcon />
        </div>
      </div>

      <div className=" mt-28 flex flex-col items-center w-full">
        <Link href="/#home">
          <p className="mb-11 text-[#767d90] text-base font-medium hover:text-black transition duration-300">
            Home
          </p>
        </Link>
        <Link href="/#our-projects">
          <p className="mb-11 text-[#767d90] text-base font-medium hover:text-black transition duration-300">
            Our Projects
          </p>
        </Link>
        <Link href="/#our-products">
          <p className="mb-11 text-[#767d90] text-base font-medium hover:text-black transition duration-300">
            Our Products
          </p>
        </Link>
        <Link href="/blogs">
          <p className="mb-11 text-[#767d90] text-base font-medium hover:text-black transition duration-300">
            Blogs
          </p>
        </Link>
      </div>

      <div className="mt-12 flex items-center justify-between flex-col pr-20 pl-20">
        <div className="flex items-center gap-2">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className="text-[#767d90] text-sm mt-8">@2023 HB-Tech</div>
      </div>
    </div>
  );
};

export default NavbarPhoneView;
