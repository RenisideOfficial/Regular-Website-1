import Image from "next/image";
import React from "react";

const Slide = ({ img, description }: Believe) => {
  return (
    <div className="flex flex-col items-center text-center p-4 mt-[20%]">
      <div className="relative w-[170px] h-[170px] mb-4">
        <Image
          src={img}
          alt="Harold Capital icon"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50px, 64px"
        />
      </div>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default Slide;
