"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BestAppEver: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-content">
                <h2>Most Probably You Are Getting Best App Ever</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Free Download App</h3>
                    <p>
                      Just log in with your mail account from play store and
                      using whatever you want for your business purpose.
                    </p>
                  </li>
                  <li>
                    <div className="icon bg2">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Trusted and Reliable</h3>
                    <p>
                      Most provabily best you can trust on it, just log in with
                      your mail account from play store and using whatever you
                      want for your business.
                    </p>
                  </li>
                  <li>
                    <div className="icon bg3">
                      <i className="ri-cloud-line"></i>
                    </div>
                    <h3>Cloud Storage</h3>
                    <p>
                      Cloud based storage for your data backup just log in with
                      your mail account from play store and using whatever you
                      want for your business purpose orem ipsum dummy.
                    </p>
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/sign-in" className="default-btn">
                    Start Free Trial
                  </Link>
                  <Link href="/features" className="link-btn">
                    See All Features
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="features-image text-center">
                <Image
                  src="/images/app/app-img1.png"
                  alt="app-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                  width={474}
                  height={737}
                />

                <div className="shape">
                  <Image
                    className="shape3"
                    src="/images/shape/shape2.png"
                    alt="shape"
                    width={149}
                    height={185}
                  />
                  <Image
                    className="shape4"
                    src="/images/shape/shape3.png"
                    alt="shape"
                    width={121}
                    height={363}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape1">
          <Image
            src="/images/shape/bg-shape1.png"
            alt="bg-shape"
            width={1922}
            height={777}
          />
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
