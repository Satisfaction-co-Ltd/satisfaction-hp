'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

const features = [
  {
    title: "AIマッチング基盤開発",
    tech_stack: "Go, OpenAI API, AWS",
    features: "フルリモート",
    description: "AIによるマッチング精度の最適化を図る先行開発プロジェクトです。"
  },
  {
    title: "大規模決済基盤・アーキテクチャ刷新",
    tech_stack: "Java, Spring Boot, Kubernetes, Google Cloud",
    features: "フルフレックス",
    description: "数千万人が利用する決済基盤のパフォーマンス改善と、レガシーからの脱却を目指す大規模プロジェクトです。"
  },
  {
    title: "社会課題解決・医療DX SaaS",
    tech_stack: "JRuby on Rails, React, Docker, Terraform",
    features: "社会貢献性重視",
    description: "医療従事者の負担を軽減し、命の現場を支えるプロダクトの刷新。"
  },
  {
    title: "グローバルEC・モダンフロントエンド",
    tech_stack: "TypeScript, Next.js, Tailwind CSS, Vercel",
    features: "フルリモート",
    description: "国境を越えたユーザー体験をデザインするフロントエンド開発です。"
  },
  {
    title: "インタラクティブ・体験型UI実装",
    tech_stack: "React, Three.js, GSAP, WebGL",
    features: "クリエイティブ重視",
    description: "Webサイトの概念を覆す、「遊び心」を何よりも大切にするプロジェクトです。"
  },
  {
    title: "ハイブリッド/マルチクラウド最適化",
    tech_stack: "AWS, Google Cloud, Azure, Docker",
    features: "フルリモート",
    description: "ベンダーに縛られず、事業フェーズに最適なクラウド戦略を提案。インフラから開発効率を最大化させるプロジェクトです。"
  }
];

const ProjectIntroduction: React.FC = () => {
  return (
    <>
      <div className='feedback-area pt-100'>
        <div className='container'>
          <div className='section-title'>
            <span className='sub-title'>PROJECT INTRODUCTION</span>
            <h2>案件紹介</h2>
            <p>案件の一部をご紹介</p>
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className='feedback-slides'
          >
            {features.map((item, index) => (
              <SwiperSlide key={index} className='single-feedback-box'>
              <div className='client-info'>
                <div className='d-flex align-items-center'>
                  <div className='icon'>
                    <i className="ri-file-fill" style={{ fontSize: '40px' }}></i>
                  </div>
                  <div className='title'>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="info-item">
                  <span className="label">Tech Stack</span>
                  <span className="value">{item.tech_stack}</span>
                </div>
                <div className="info-item">
                  <span className="label">Features</span>
                  <span className="value">{item.features}</span>
                </div>
                <div className="info-item">
                  <span className="label">Description</span>
                  <p className="value">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProjectIntroduction
