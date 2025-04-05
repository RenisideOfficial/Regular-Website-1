import AboutUs from "@/components/AboutUs";
import Believe from "@/components/Believe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MoreInfo from "@/components/MoreInfo";

export default function Home() {
  return (
    <>
      <div>
        <section>
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section>
          <MoreInfo />
        </section>
        <section id="solutions">
          <Believe />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
