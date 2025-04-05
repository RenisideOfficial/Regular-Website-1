import Image from "next/image";
import React from "react";

const Slide = ({ img, description }: Believe) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Image src={img} alt="Harold Capital icon" width={300} height={300} />
      <p className="text-lg md:text-xl max-w-2xl mx-auto [text-shadow:1px_1px_3px_var(--color-gold)]">
        {description}
      </p>
    </div>
  );
};

export default Slide;
