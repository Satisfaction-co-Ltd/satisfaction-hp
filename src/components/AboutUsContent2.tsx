"use client";

import React from "react";

const AboutUsContent2: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">

              <div className="about-content">
                {/* <span className="sub-title">PHILOSOPHY</span>
                <h2>TODO：ここに経営理念入れる？</h2> */}

            </div>
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
                <span className="sub-title">CEO'S MESSAGE</span>
                <h2>代表挨拶</h2>
                
                <p>株式会社サティスファクションの理念は、「楽しく、格好よく」働くことです。</p>
                
                <p>
                  私たちは、ITエンジニアによる技術提供や請負開発、自社サービスの展開など技術の力で社会の課題解決に貢献していくために活動しています。
                </p>

                <p>
                  もともと人材紹介からスタートした会社ですが、時代の流れやニーズを踏まえ、「エンジニアがより輝ける場をつくりたい」という想いで、現在はIT領域に力を入れています。
                </p>

                <p>
                  当社の社名「サティスファクション（満足）」には、クライアントはもちろん、社員やその家族、関わるすべての人々の幸せと充実を追求するという想いが込められています。
                </p>

                <p>
                  ITという創造力と技術力が問われる世界で、プロフェッショナルとしての誇りと覚悟を持ちながらも、楽しさと情熱を忘れずに日々の仕事に向き合っています。
                </p>

                <p>
                  また、社員の一人ひとりが自分らしく働ける環境づくりにも力を入れています。
                </p>

                <p>
                  柔軟な働き方の導入や、自己成長を支える制度の整備を通じて、心身ともに健やかで充実した日々を過ごせる職場環境を目指しています。
                </p>

                <p>
                  スタッフが心身ともに健やかで充実した毎日を送ることが、高品質なサービスを生み出す原動力になると考えているからです。
                </p>

                <p>
                  これからも、最先端の技術とクリエイティブな発想を武器に、よりよい社会の実現に貢献してまいります。そして、私たちが手がけるサービスを通じて、多くの人々に「満足」を届ける企業であり続けます。
                </p>

                <p>
                  今後とも、株式会社サティスファクションをどうぞよろしくお願いいたします。
                </p>

                <p className="text-align-right">
                  株式会社サティスファクション
                  <br />
                  代表取締役　二宮 隆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent2;
