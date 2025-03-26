"use client";
import { cn } from "@/libs/utils";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

const NavbarRight = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const navData = ["Home", "About Us", "Solutions", "Contact"];
  return (
    <>
      <div className="gap-2 hidden md:flex">
        {navData.map((item, index) => (
          <Link
            href="#"
            key={index}
            className={cn(
              "mx-6 hover:text-gray",
              isActive === index && "text-gray border-b-2 border-b-white"
            )}
            onClick={() => setIsActive(index)}
          >
            {item}
          </Link>
        ))}
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {open === true ? (
          <FaTimes className="z-50 fixed right-6 top-10" />
        ) : (
          <RiMenu3Line />
        )}
      </button>

      {open && (
        <div className="flex flex-col justify-center align-center w-full rounded-b-2xl left-0 top-0 fixed text-center bg-dark p-12">
          {navData.map((item, index) => (
            <Link
              href="#"
              key={index}
              className={cn(
                "mt-6 hover:text-gray",
                isActive === index && "text-darker"
              )}
              onClick={() => {
                setIsActive(index);
                setOpen(false);
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarRight;
