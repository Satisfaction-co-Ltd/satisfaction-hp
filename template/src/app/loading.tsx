"use client";

import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="preloader-area">
        <div className="d-table">
          <div className="d-table-cell">
            <Image
              src="/images/black-logo.png"
              alt="logo"
              width={138}
              height={44}
            />
            <p>Loading...</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-area {
          position: fixed;
          background: #fff;
          width: 100%;
          top: 0;
          height: 100%;
          z-index: 1010;
          left: 0;
          text-align: center;
          opacity: 0.96;
        }
        .preloader-area img {
          margin-bottom: 5px;
        }
        .preloader-area p {
          font-size: 17px;
        }
      `}</style>
    </>
  );
};