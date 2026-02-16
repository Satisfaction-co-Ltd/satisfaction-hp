"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>

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
                  <h6>事業内容</h6>
                  <p>
                    SES事業 / 請負開発 / 自社サービス
                  </p>
                </div>

                <div className="features-text">
                  <h6>所在地</h6>
                  <p>
                    本社
                    <br />
                    〒530-0001
                    <br />
                    大阪府大阪市北区梅田2丁目2-2
                    <br />
                    ヒルトンプラザウエスト オフィスタワー 18階
                  </p>
                  <p>
                    東京オフィス
                    <br />
                    〒108-6028
                    <br />
                    東京都港区港南2丁目15-1
                    <br />
                    品川インターシティＡ棟 28階
                  </p>
                </div>

                <div className="features-text">
                  <h6>設立</h6>
                  <p>
                    2019年 10月 17日
                  </p>
                </div>

                <div className="features-text">
                  <h6>従業員数</h6>
                  <p>
                    12人（2026年01月現在）
                  </p>
                </div>

                <div className="features-text">
                  <h6>主要取引銀行</h6>
                  <p>
                    三菱ＵＦＪ銀行、住信SBIネット銀行、尼崎信用金庫
                  </p>
                </div>

              </div>
            </div>

            <div className="col-lg-6 col-md-12 pt-100">
              <div className="map-container mb-4">
                <iframe
                  className="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.209599226722!2d135.49260531127726!3d34.69989298314319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e68d3b1203cf%3A0x7e481189efd517c4!2z44K144O844OW44Kz44O844OXIOaiheeUsOODkuODq-ODiOODs-ODl-ODqeOCtuOCpuOCp-OCueODiCDjgqrjg5XjgqPjgrnjgr_jg6_jg7w!5e0!3m2!1sja!2sjp!4v1734504977217!5m2!1sja!2sjp"
                  height="300"
                  width="100%"
                  style={{ border: '0', borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="map-container">
                <iframe
                  className="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.005253290143!2d139.741971!3d35.627597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a5b2c8fd45f%3A0xa8553e88cf572ccd!2z44K144O844OW44Kz44O844OXIOWTgeW3neOCpOODs-OCv-ODvOOCt-ODhuOCo0Hmo58!5e0!3m2!1sja!2sjp!4v1771226846070!5m2!1sja!2sjp"
                  height="300"
                  width="100%"
                  style={{ border: '0', borderRadius: '8px' }}
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
