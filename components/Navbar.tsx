"use client";
import React, { useState, useEffect } from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set home as active on initial load
    setActiveSection("home");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "solutions", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 backdrop-blur-md shadow-lg py-4 z-50"
          : "relative"
      } ${isScrolled ? "mx-0 px-6 md:px-12" : "m-8 mx-6 md:mx-12"}`}
    >
      <NavbarLeft />
      <NavbarRight activeSection={activeSection} />
    </header>
  );
};

export default Navbar;
