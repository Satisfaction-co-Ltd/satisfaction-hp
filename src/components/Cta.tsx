
"use client";

import React from "react";
import Image from "next/image";

const Cta: React.FC = () => {
  return (
    <>
      <div className="pb-100 pt-100">
        <div className="container">
          <div className="free-trial-content">
            <span className="sub-title">DESIGN YOUR FUTURE</span>
            <h2>あなたも、誇れる働き方を。</h2>
            <p className="text-white">「理想」は人それぞれ。だからこそ、まずはあなたの想いや希望を聞かせてください。<br />
            無理な勧誘はありません。透明な環境で、あなたが自分らしく輝ける場所を、一緒に探してみませんか？</p>

            {/* TODO: この方式だとメール送信のロジックが必要 */}
            {/* <form
              className="free-trial-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className="input-newsletter"
                placeholder="Enter Your Email Address"
                name="email"
              />
              <button type="submit" className="default-btn">
                まずは相談する
              </button>
            </form> */}

            {/* Shape Images */}
            {/* <div className="shape8">
              <Image
                src="/images/shape/shape7.png"
                alt="shape"
                width={78}
                height={47}
              />
            </div>
            <div className="shape9">
              <Image
                src="/images/shape/shape8.png"
                alt="shape"
                width={125}
                height={101}
              />
            </div> */}

            {/* <p className="text-white" style={{ textAlign: 'center', paddingTop: '50px' }}>
              お問い合わせ先:&nbsp;contact@satis-f.co.jp
            </p> */}

            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
              <div className="view-more-box">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8sdG7BWhv53QU-gOC6sccP5lbWHiGk8DD-z5HaHSpKO-F8A/viewform?usp=dialog"
                  className="contact-btn"
                  target="_blank"
                >
                  お問い合わせフォーム
                </a>
              </div>
            </div>

            {/* Animation lines */}
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;


