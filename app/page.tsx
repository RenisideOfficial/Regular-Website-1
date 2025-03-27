import AboutUs from "@/components/AboutUs";
import Believe from "@/components/Believe";
import Hero from "@/components/Hero";
import MoreInfo from "@/components/MoreInfo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <AboutUs />
        <MoreInfo />
        <Believe />
      </div>
    </>
  );
}
