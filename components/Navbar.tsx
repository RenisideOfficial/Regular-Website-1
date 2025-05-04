"use client";
import React, { useState, useEffect } from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // If at the very top of the page, set home as active
      if (window.scrollY === 0) {
        setActiveSection("home");
        return;
      }

      const sections = ["home", "about", "solutions", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More precise detection with larger threshold
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center transition-all duration-300 z-[1200] ${
        isScrolled
          ? "fixed top-0 left-0 right-0 backdrop-blur-md shadow-lg py-4 z-50"
          : "relative"
      } ${isScrolled ? "mx-0 px-6 md:px-12" : "m-8 mx-6 md:mx-12"}`}>
      <NavbarLeft />
      <NavbarRight activeSection={activeSection} />
    </header>
  );
};

export default Navbar;
