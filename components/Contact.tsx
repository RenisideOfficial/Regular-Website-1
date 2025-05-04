import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="m-12 lg:flex lg:flex-row flex flex-col justify-between align-center lg:mx-24 mx-8">
        <div className="lg:mx-[9%] gap-12 mt-24">
          <h1 className="lg:text-4xl text-3xl [text-shadow:3px_3px_6px_var(--color-gold)] mb-12">
            Get In Touch
          </h1>
          <ContactInfo />
        </div>
        <div className="mt-12">
          <h2 className="lg:text-3xl text-[2rem] [text-shadow:1px_1px_3px_var(--color-gold)] mb-6 text-left lg:text-center">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
