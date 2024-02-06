"use client";
import React, { useState } from "react";
import Navbarlogo from "../Icons/Navbarlogo";
import Hamburger from "../Icons/HamburgerMenu";
import NavbarPhoneView from "../NavbarPhoneView/page";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full top-0 h-24 fixed flex justify-between items-center px-20 bg-[rgba(239, 251, 255, 0.13)] backdrop-blur-sm md:pl-[24px] md:pr-[40px]">
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <Navbarlogo />
        </Link>
      </div>

      <div className="md:hidden flex  justify-between items-center w-[28vw] min-w-[395px]">
        <Link href="/#home">
          <p className="relative cursor-pointer group px-4 py-2 text-base font-medium text-gray-700 hover:text-black">
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-300 transition-all duration-300"></span>
          </p>
        </Link>
        <Link href="/#our-projects">
          <p className="relative cursor-pointer group px-4 py-2 text-base font-medium text-gray-700 hover:text-black whitespace-nowrap">
            Our Projects
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-300 transition-all duration-300"></span>
          </p>
        </Link>
        <Link href="/#our-products">
          <p className="relative cursor-pointer group px-4 py-2 text-base font-medium text-gray-700 hover:text-black whitespace-nowrap">
            Our Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-300 transition-all duration-300"></span>
          </p>
        </Link>
        <Link href="/blogs">
          <p className="relative cursor-pointer group px-4 py-2 text-base font-medium text-gray-700 hover:text-black">
            Blogs
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-300 transition-all duration-300"></span>
          </p>
        </Link>
      </div>

      <div className="flex md:hidden items-center">
        <button className="btn bg-[#3874f4] text-white px-4 py-2 rounded cursor-pointer">
          Contact Us
        </button>
      </div>

      <div className="md:flex items-center hidden">
        {isOpen && <NavbarPhoneView toggleNavbar={toggleNavbar} />}
        <div className="cursor-pointer">
          <Hamburger onClick={toggleNavbar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
