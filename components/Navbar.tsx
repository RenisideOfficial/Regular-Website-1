import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between align-center m-8 mx-6 md:mx-12">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </>
  );
};

export default Navbar;
