import Image from "next/image";
import React from "react";
import haroldImg from "../public/harold.svg";

const NavbarLeft = () => {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={handleHomeClick}
        className="flex gap-2 md:text-2xl cursor-pointer text-[1.2rem] font-bold [text-shadow:1px_1px_3px_var(--color-gold)]"
      >
        <Image src={haroldImg} alt="#" />
        <h1>Harold Capital</h1>
      </button>
    </div>
  );
};

export default NavbarLeft;
