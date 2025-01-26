"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterStyleFour: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-area-style-with-black-color">
        <div className="footer-white-shape">
          <Image
            src="/images/home-7-8-9/footer/footer-shape.png"
            alt="image"
            width={1920}
            height={682}
          />
        </div>
      </div>
    </>
  );
};

export default FooterStyleFour;
