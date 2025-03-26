import AboutUs from "@/components/AboutUs";
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
      </div>
    </>
  );
}
