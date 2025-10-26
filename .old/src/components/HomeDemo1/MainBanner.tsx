"use client";

import React from "react";
import Link from "next/link";
import TrustedPartners from "@/components/HomeDemo1/TrustedPartners";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="main-banner-content">
                <div className="content">
                  <span
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    #Get your 14 days free trail
                  </span>

                  <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    The Revolutionary App That Makes Your Life Easier Than
                    Others Apps
                  </h1>

                  <Link
                    href="/app-download"
                    className="default-btn"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Start Free Trial
                  </Link>
                </div>

                {/* Trusted Partners Component */}
                <TrustedPartners />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Image
                  src="/images/banner/banner-app1.png"
                  alt="image"
                  width={389}
                  height={780}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Images */}
        <div className="shape-overlay"></div>
        <div className="banner-shape1">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={121}
            height={362}
          />
        </div>
        <div className="banner-shape2">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={78}
            height={47}
          />
        </div>
        <div className="banner-shape3">
          <Image
            src="/images/shape/shape2.png"
            alt="image"
            width={149}
            height={185}
          />
        </div>
        <div className="banner-shape4">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={99}
            height={195}
          />
        </div>
        <div className="banner-shape5">
          <Image
            src="/images/shape/shape11.png"
            alt="image"
            width={221}
            height={221}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
