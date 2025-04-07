import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className="bg-darker p-12 space-y-6">
        <p>
          Harold Capital is a Lagos based Male founded and led investment firm.
        </p>
        <hr />
        <div className="lg:flex lg:flex-row flex flex-col gap-2 justify-baseline">
          <HiOutlineLocationMarker />
          <p>No 10 Kingsbay Estate Lekki County homes ikota Lagos, Nigeria</p>
        </div>
        <p className="lg:text-right text-center">
          © 2025 Harold Capital Management All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
