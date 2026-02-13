'use client'

import React from 'react'
import Link from 'next/link'

const Culture: React.FC = () => {
  return (
    <>
      <div className='features-area ptb-100 bg-F7F7FF'>
        <div className='container'>
          <div className='section-title'>
            <span className='sub-title'>ENJOY PROFESSIONAL</span>
            <h2>あなたの人生はもっと良くなる。</h2>
          </div>

          <div className='row justify-content-center'>
            <div
              className='col-xl-4 col-lg-6 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='100'
              data-aos-once='true'
            >
              <div className='single-features-item'>
                <div className='icon'>
                  <i className='ri-emotion-happy-line'></i>
                </div>
                <h3>楽しく</h3>
                <p>
                  遊び心を妥協のない仕事に。好奇心に従い、理想の環境で挑戦するからこそ最高の成果は生まれる。
                </p>
              </div>
            </div>

            <div
              className='col-xl-4 col-lg-6 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='200'
              data-aos-once='true'
            >
              <div className='single-features-item'>
                <div className='icon bg2'>
                  <i className='ri-shield-flash-line'></i>
                </div>
                <h3>カッコよく</h3>
                <p>
                  過去の成功体験に縋らない。常に最新の技術と、最高にクールな働き方を更新し続けます。
                </p>
              </div>
            </div>

            <div
              className='col-xl-4 col-lg-6 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='300'
              data-aos-once='true'
            >
              <div className='single-features-item'>
                <div className='icon bg3'>
                  <i className='ri-hand-heart-line'></i>
                </div>
                <h3>誠実</h3>
                <p>
                  きれいごとだけじゃない。あなたの将来を自分事として考え、本気でぶつかり、本気で支えます。
                </p>
              </div>
            </div>

            <div
              className='col-xl-4 col-lg-6 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='400'
              data-aos-once='true'
            >
              <div className='single-features-item'>
                <div className='icon bg4'>
                  <i className='ri-eye-line'></i>
                </div>
                <h3>透明</h3>
                <p>
                  安心して働ける環境。<br />対等な仲間であるための前提条件。<br />それが私たちの考え方です。
                </p>
              </div>
            </div>

            <div
              className='col-xl-4 col-lg-6 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='500'
              data-aos-once='true'
            >
              <div className='single-features-item'>
                <div className='icon bg5'>
                  <i className='ri-service-line'></i>
                </div>
                <h3>感謝</h3>
                <p>
                  まだ見ぬ景色を共に見に行こう。<br />この挑戦を選んでくれたあなたを、全力で称賛し、歓迎します。
                </p>
              </div>
            </div>

            {/* <div
              className='col-xl-4 col-lg-6 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='600'
              data-aos-once='true'
            >
              <div className='single-features-item'>
                <div className='icon bg6'>
                  <i className='ri-pie-chart-2-line'></i>
                </div>
                <h3>Responsive Ready</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div> */}

            {/* <div className='col-xl-12 col-lg-12 col-sm-12 col-md-12'>
              <div className='view-more-box'>
                <Link href='/features' className='default-btn'>
                  View More
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
        }

        .col-xl-4, .col-lg-6, .col-sm-6, .col-md-6 {
          display: flex;
          flex-direction: column;
        }

        .single-features-item {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .single-features-item p {
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}

export default Culture
