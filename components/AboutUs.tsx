import React from "react";
import img2 from "../public/imgs/20058522_6240058.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="lg:flex justify-between align-center mx-12 mt-[25%] font-bold gap-6">
        <Image
          src={img2}
          alt="img2"
          className="w-[70%] lg:w-[45%] mt-6 lg:-mt-6"
        />
        <p className="text-base lg:text-3xl [text-shadow:1px_1px_3px_var(--color-gold)] mt-4">
          HAROLD CAPITAL specializes in strategic and analytic
          investment/speculation services in Nigeria and is duly licensed and
          authorized by CAC {"(Federal Corporate Affairs Commission)"} NIGERIA
        </p>
      </div>
    </>
  );
};

export default AboutUs;
