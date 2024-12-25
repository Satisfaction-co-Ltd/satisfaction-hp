"use client";

import React from "react";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div className="key-features-area pt-100 pb-75">
        <div className="container">
          <div className="section-title title-with-bg-text">
            <div className="big-title">What We Do</div>
            <span className="sub-title">What We Do</span>
            <h2>事業内容</h2>
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
                  <i className="ri-eye-line"></i>
                </div>
                <h3>SES開発</h3>
                <p>
                  SES契約による技術支援を行います。
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
                  <i className="ri-stack-line"></i>
                </div>
                <h3>請負開発</h3>
                <p>
                  請負開発による要件定義、設計、開発を行います。
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
                  <i className="ri-leaf-line"></i>
                </div>
                <h3>自社サービス</h3>
                <p>
                  自社サービスの開発、運営を行います。
                </p>
              </div>
            </div>

            {/* <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two">
                <div className="icon bg2">
                  <i className="ri-secure-payment-line"></i>
                </div>
                <h3>Fully Secured</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="key-features-card">
                <div className="icon">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>Cloud Storage</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two">
                <div className="icon bg2">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Responsive Ready</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div> */}
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

export default KeyFeatures;
