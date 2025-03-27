import Image from "next/image";
import React from "react";
import img1 from "../public/imgs/18771522_6029519.png";
import verified from "../public/verified_green.svg";

const MoreInfo = () => {
  return (
    <>
      <div className="lg:flex justify-between align-center mx-12 mt-[15%] font-bold gap-6">
        <div>
          <div className="flex gap-4">
            <h3 className="lg:text-5xl text-3xl [text-shadow:3px_3px_6px_var(--color-primary)]">
              Legal
            </h3>
            <Image src={verified} alt="verified" width={30} />
          </div>
          <p className="lg:text-3xl text-[1rem] [text-shadow:1px_1px_3px_var(--color-primary)] mt-12">
            HAROLD CAPITAL is the brand name used by HAROLD MARKET'S LTD. It is
            a powerhouse of Risk management which is used for significant
            investment returns.
          </p>
        </div>
        <Image
          src={img1}
          alt="img1"
          className="w-[70%] lg:w-[45%] mt-6 lg:-mt-4"
        />
      </div>
    </>
  );
};

export default MoreInfo;
