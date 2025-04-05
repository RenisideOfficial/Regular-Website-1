import Image from "next/image";
import React from "react";
import img1 from "../public/imgs/20770080_Sandy_Bus-37_Single-04.png";

const Hero = () => {
  return (
    <>
      <div className="lg:flex justify-between align-center mx-12 mt-24 font-bold gap-6">
        <div className="mt-18">
          <h1 className="lg:text-6xl text-3xl [text-shadow:3px_3px_6px_var(--color-gold)]">
            WELCOME TO HAROLD CAPITAL
          </h1>
          <p className="lg:text-3xl text-[1rem] [text-shadow:1px_1px_3px_var(--color-gold)] mt-4">
            HAROLD CAPITAL LTD is a full-service ethical investment management
            company specializing in Asset Management, Private Wealth Management,
            and Financial Advisory services.
          </p>
        </div>
        <Image
          src={img1}
          alt="img1"
          className="w-[70%] lg:w-[40%] mt-6 lg:-mt-4"
        />
      </div>
    </>
  );
};

export default Hero;
