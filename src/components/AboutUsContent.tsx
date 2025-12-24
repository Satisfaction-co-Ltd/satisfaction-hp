"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">About Us</span>

                <h2>会社情報</h2>

                <div className="features-text">
                  <h6>会社名</h6>
                  <p>株式会社サティスファクション</p>
                </div>

                <div className="features-text">
                  <h6>代表取締役</h6>
                  <p>二宮 隆</p>
                </div>

                <div className="features-text">
                  <h6>所在地</h6>
                  <p>
                    〒530-0001　大阪府大阪市北区梅田2丁目2-2
                    <br />
                    ヒルトンプラザウエスト オフィスタワー18階
                  </p>
                </div>

                {/* <div className="features-text">
                  <h6>Our App</h6>
                  <p>
                    Most provabily best you can trust on it, just log in with
                    your mail account from play store and using whatever you
                    want for your business.
                  </p>
                </div> */}

                {/* <div className="features-text">
                  <h6>Our Mission</h6>
                  <p>
                    Cloud based storage for your data backup just log in with
                    your mail account from play store and using whatever you
                    want for your business purpose orem ipsum dummy of your
                    business purpose text.
                  </p>
                </div> */}

                {/* <div className="btn-box">
                  <Link
                    href="https://play.google.com/store/apps"
                    className="default-btn"
                  >
                    Start Free Trial
                  </Link>
                  <Link href="/features" className="link-btn">
                    See All Features
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <iframe
                  className="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.209599226722!2d135.49260531127726!3d34.69989298314319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e68d3b1203cf%3A0x7e481189efd517c4!2z44K144O844OW44Kz44O844OXIOaiheeUsOODkuODq-ODiOODs-ODl-ODqeOCtuOCpuOCp-OCueODiCDjgqrjg5XjgqPjgrnjgr_jg6_jg7w!5e0!3m2!1sja!2sjp!4v1734504977217!5m2!1sja!2sjp"
                  height="400"
                  width="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
