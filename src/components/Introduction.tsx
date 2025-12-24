"use client";

import React from "react";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <>
      <div className="key-features-area pt-100 pb-75">
        <div className="container">
          <div className="section-title title-with-bg-text">
            <div className="big-title">What We Do</div>
            <span className="sub-title">What We Do</span>
            {/* <h2>事業内容</h2> */}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="key-features-card">
                <div className="icon">
                  <i className="ri-team-fill hue-rotate-90"></i>
                </div>
                <h3>SES事業</h3>
                <p>
                  準委任契約による開発支援を行います。
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two">
                <div className="icon bg2">
                  <i className="ri-service-line"></i>
                </div>
                <h3>請負開発</h3>
                <p>
                  請負契約による開発を行います。
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="key-features-card">
                <div className="icon">
                  <i className="ri-leaf-line hue-rotate-90"></i>
                </div>
                <h3>自社サービス</h3>
                <p>
                  自社サービスの開発、運営を行います。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="key-features-shape-1">
          <Image
            src="/images/home-7-8-9/features/shape-1.png"
            alt="image"
            width={123}
            height={151}
          />
        </div>
        <div className="key-features-shape-2">
          <Image
            src="/images/home-7-8-9/features/shape-2.png"
            alt="image"
            width={149}
            height={153}
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
