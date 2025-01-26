"use client";

import React from "react";

const AboutUsContent2: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {/* TODO: 社長の写真 */}
            {/* <div className="col-lg-6 col-md-12">
              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/team/team4.jpg"
                  alt="about"
                  width={500}
                  height={500}
                />
              </div>
            </div> */}

            {/* TODO: 社長の写真を貼る場合はこちらのタグを使う */}
            {/* <div className="col-lg-6 col-md-12"> */}
            <div>
              <div className="about-content">
                <span className="sub-title">CEO's Message</span>
                <h2>代表挨拶</h2>

                <p>当社は、「クライアント、スタッフ、その家族が満足できるような会社にしたい」という想いを胸に、日々事業を拡大しつつあります。名前に込めた「サティスファクション（満足）」には、関わるすべての人々の幸せと充実感を追求するという私たちの信念が詰まっています。</p>
                <p>私たちの理念は、「楽しく、格好よく」働くことです。<br />システム開発という技術と発想力が求められる分野において、楽しさと情熱を大切にしながらも、プロフェッショナルとしての誇りを持ち、魅力的な成果を提供することを目指しています。</p>
                <p>また、現代社会において重要性が増している「働き方改革」にも積極的に取り組んでおります。スタッフが心身ともに健やかで充実した毎日を送ることが、ひいては高品質なサービスを生み出す原動力になると考えています。柔軟な働き方の導入や、自己成長を支える環境の整備により、スタッフ一人ひとりが自分らしく働ける会社を目指しています。</p>
                <p>これからも、最先端の技術とクリエイティブな発想を活かし、クライアントの課題解決と価値創造に全力を尽くしてまいります。そして、私たちが生み出すプロダクトやサービスを通じて、皆さまの満足をお届けする企業であり続けます。</p>
                <p>どうぞ今後とも、株式会社サティスファクションをよろしくお願い申し上げます。</p>
                <hr />
                <p>株式会社サティスファクション<br />代表取締役　二宮 隆</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent2;
