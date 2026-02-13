'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

const features = [
  {
    title: "案件選択",
    desc: "すべてを可能な限りオープンにし、納得したうえで参画を決めていただきます。\n情報の非対称性がある限り、本当の信頼は生まれないと考えています。",
    icon: "ri-checkbox-multiple-line",
    colorClass: ""
  },
  {
    title: "透明性",
    desc: "リスクや課題も含めて共有します。\n透明性は、安心のためではなく、対等なパートナーであるための前提条件。\nそれが私たちの考え方です。",
    icon: "ri-terminal-window-line",
    colorClass: "bg2"
  },
  {
    title: "環境",
    desc: "リモート／ハイブリッド／常駐など、\nプロジェクトごとに最適な環境を提案します。",
    icon: "ri-home-office-line",
    colorClass: "bg3"
  },
  {
    title: "紹介文化",
    desc: "満足しているからこそ紹介が生まれる。\n紹介が増えるほど、組織の質も高まる。\n私たちは「紹介が続くこと」を、会社の健全さと満足度の証だと考えています。",
    icon: "ri-team-line",
    colorClass: "bg4"
  }
];

const ValueAppeal: React.FC = () => {
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
                centeredSlides: false,
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

    </>
  )
}

export default ValueAppeal
