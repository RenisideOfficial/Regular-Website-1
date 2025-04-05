"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactInfo = () => {
  const email = "haroldcapital001@gmail.com";
  const phoneNumber = "+2349039768812";

  const handleEmailClick = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${email}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleWhatsAppClick = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto [text-shadow:1px_1px_3px_var(--color-gold)]">
            Email:
          </p>
          <MdOutlineMail />
        </div>
        <a
          href="#"
          onClick={handleEmailClick}
          className="italic text-[#ADD8E6]"
        >
          {email}
        </a>
      </div>
      <div>
        <div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto [text-shadow:1px_1px_3px_var(--color-gold)]">
            WhatsApp:
          </p>
          <FaWhatsapp />
        </div>
        <a href="#" onClick={handleWhatsAppClick}>
          {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
