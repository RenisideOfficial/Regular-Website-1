"use client";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import React, { useState } from "react"; // Removed unused useEffect

const NavbarRight = ({ activeSection = "home" }: NavbarRightProps) => {
  const [open, setOpen] = useState(false);

  const navData = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "Solutions", target: "solutions" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="gap-2 hidden md:flex">
        {navData.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.target}
            smooth={true}
            duration={500}
            offset={-80}
            className={cn(
              "mx-6 hover:text-gray cursor-pointer pb-1 transition-all",
              activeSection === item.target && "border-b-2 border-b-white"
            )}
            spy={true}
            activeClass="active"
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
        aria-label="Toggle menu"
      >
        {open ? (
          <FaTimes className="lg:right-12 z-[1001] fixed right-6 top-10" />
        ) : (
          <RiMenu3Line />
        )}
      </button>

      {open && (
        <div className="md:hidden flex flex-col z-[1000] justify-center align-center w-full rounded-b-2xl left-0 top-0 fixed text-center bg-dark p-12">
          {navData.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.target}
              smooth={true}
              duration={500}
              offset={-80}
              className={cn(
                "block mt-6 hover:text-darker cursor-pointer text-xl pb-1",
                activeSection === item.target && "text-darkest"
              )}
              onClick={() => setOpen(false)} // Only close the menu
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarRight;
