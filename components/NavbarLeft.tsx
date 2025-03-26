import Image from "next/image";
import Link from "next/link";
import React from "react";
import haroldImg from "../public/harold.svg";

const NavbarLeft = () => {
  return (
    <>
      <div>
        <Link
          href="#"
          className="flex gap-2 md:text-2xl text-[1.2rem] font-bold [text-shadow:1px_1px_3px_var(--color-primary)]"
        >
          <Image src={haroldImg} alt="#" />
          <h1>Harold Capital</h1>
        </Link>
      </div>
    </>
  );
};

export default NavbarLeft;
