"use client";

import React from "react";
import TrustedPartners from "./TrustedPartners";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="new-app-main-banner-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-main-banner-content">
                <div className="content">
                  <Image
                    src="/logo.png"
                    alt="image"
                    width={500}
                    height={44}
                    style={{ marginBottom: '24px' }}
                  />

                  <div className="name-big-text">Work Joyfully, Live Stylishly.</div>

                  {/* <span
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    #Get Your 14 Days Free Trial
                  </span> */}

                  <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    楽しく、格好よく。
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    株式会社サティスファクションは、〇〇で△△な××を目指す、ソフトウェア開発企業です。
                    <br />
                    かくかくしかじか...
                  </p>

                  {/* <div
                    className="app-btn-box"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    <a
                      href="https://www.apple.com/store"
                      className="applestore-btn"
                      target="_blank"
                    >
                      <Image
                        src="/images/apple-store.png"
                        alt="image"
                        width={34}
                        height={35}
                      />
                      Download on the
                      <span>Apple Store</span>
                    </a>

                    <a
                      href="https://play.google.com/store/apps"
                      className="playstore-btn"
                      target="_blank"
                    >
                      <Image
                        src="/images/play-store.png"
                        alt="image"
                        width={27}
                        height={30}
                      />
                      Get It On
                      <span>Google Play</span>
                    </a>
                  </div> */}

                  <div className="content-shape">
                    <Image
                      src="/images/home-7-8-9/banner/content-shape.png"
                      alt="image"
                      width={1123}
                      height={850}
                      style={{ filter: 'hue-rotate(90deg)', opacity: '75%' }}
                    />
                  </div>
                </div>

                {/* <TrustedPartners /> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="new-app-main-banner-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {/* <Image
                  src="/images/home-7-8-9/banner/banner-1.png"
                  alt="image"
                  width={852}
                  height={745}
                /> */}

                <Image
                  src="/images/home-7-8-9/progress/progress.png"
                  alt="image"
                  width={852}
                  height={745}
                />

                {/* /images/home-7-8-9/progress/progress.png */}

                {/* <div className="wrap-shape-1">
                  <Image
                    src="/images/home-7-8-9/banner/shape-1.png"
                    alt="image"
                    width={120}
                    height={112}
                  />
                </div>
                <div className="wrap-shape-2">
                  <Image
                    src="/images/home-7-8-9/banner/shape-2.png"
                    alt="image"
                    width={145}
                    height={178}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="new-app-banner-bg-shape">
          <Image
            src="/images/home-7-8-9/banner/banner-shape.png"
            alt="image"
            width={1920}
            height={574}
          />
        </div>
        <div className="new-app-banner-strock-shape">
          <Image
            src="/images/home-7-8-9/banner/strock.png"
            alt="image"
            width={655}
            height={675}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
