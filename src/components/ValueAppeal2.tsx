'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Swiperのスタイルをインポート（Texapの既存のCSSがある場合は不要なこともありますが、念のため）
import 'swiper/css'
import 'swiper/css/pagination'

const features = [
  {
    title: "案件選択",
    desc: "やりたい仕事は自分で決める。\nエンジニア主体のアサインを実現します。",
    icon: "ri-checkbox-multiple-line",
    colorClass: ""
  },
  {
    title: "透明性",
    desc: "案件背景や現場のリアルな情報を共有。\n風通しの良い環境を提供します。",
    icon: "ri-terminal-window-line",
    colorClass: "bg2"
  },
  {
    title: "リモートワーク",
    desc: "フルリモート案件を中心に、場所にとらわれない柔軟な働き方を支援します。",
    icon: "ri-home-office-line",
    colorClass: "bg3"
  },
  {
    title: "紹介文化",
    desc: "信頼の紹介制度。\n質の高い仲間とプロジェクトを共に。",
    icon: "ri-team-line",
    colorClass: "bg4"
  }
];

const ValueAppeal2: React.FC = () => {
  return (
    <>
      <div className="section-title pt-100">
        <span className='sub-title'>DESIGNED BY ENGINEERS</span>
        <h2>理想の働き方をデザインする。</h2>
        <p>エンジニア一人ひとりが理想の働き方を実現できるように。</p>
      </div>

      <div className='features-area pb-75'>
        <div className='container'>
          {/* Swiperの設定：
            - 992px以上（PC）ではスライド機能を無効化（enabled: false）してグリッドのように見せる
            - それ以下ではスライド有効化
          */}
          <Swiper
            spaceBetween={25}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1.2, // スマホでは少し次のスライドが見えるように
                centeredSlides: true,
                enabled: true,
              },
              576: {
                slidesPerView: 2,
                enabled: true,
              },
              992: {
                slidesPerView: 4,
                enabled: false, // PCではスライドさせない
              }
            }}
            className="value-appeal-swiper"
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                {/* text-center: 全体的に中央寄せ / text-lg-start: PC(lg以上)では左寄せ */}
                <div className='single-features-box text-center text-lg-start' style={{ height: '100%', marginBottom: '35px' }}>
                  
                  {/* m-auto: アイコン自体を中央に / m-lg-0: PCでは左端に寄せる */}
                  <div className={`icon ${item.colorClass} m-auto m-lg-0`}>
                    <i className={item.icon}></i>
                  </div>
                  
                  <h3 style={{ marginTop: '10px' }}>{item.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* PC（992px以上）でスライダーの挙動を消して横並びを維持する設定 */
        @media (min-width: 992px) {
          .value-appeal-swiper .swiper-wrapper {
            display: flex !important;
            justify-content: center;
          }
        }
        
        /* スライダーの下のポインターの色調整（テンプレートの色に合わせて） */
        .value-appeal-swiper .swiper-pagination-bullet-active {
          background: #007aff; 
        }
      `}</style>
    </>
  )
}

export default ValueAppeal2