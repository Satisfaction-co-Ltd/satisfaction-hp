'use client'

import React from 'react'
import Link from 'next/link'
import TrustedPartners from '@/_components/HomeDemo1/TrustedPartners'
import Image from 'next/image'

const MainBanner: React.FC = () => {
  return (
    <>
      <div className='main-banner-area cs-main-banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='main-banner-content'>
                <div className='content'>
                  {/* <span
                    className='sub-title'
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay='100'
                  >
                    #Get your 14 days free trail
                  </span> */}

                  <h1
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay='200'
                  >
                    WORK STYLISH.
                    <br />
                    LIVE PROUD.
                  </h1>

                  <div
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay='200'
                    className='text-white cs-main-banner__catchphrase'
                  >
                    誇りを感じる働き方。家族に誇れる会社へ。
                  </div>

                  <div
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay='200'
                    className='text-white cs-main-banner__catchphrase'
                  >
                    本気なエンジニアが、世界を変えていく。
                  </div>

                  {/* <Link
                    href='/app-download'
                    className='default-btn'
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay='300'
                  >
                    Start Free Trial
                  </Link> */}
                </div>

                {/* Trusted Partners Component */}
                {/* <TrustedPartners /> */}
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div
                className='main-banner-image'
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='400'
                style={{ marginBottom: '36px' }}
              >
                {/* <Image
                  src='/images/banner/banner-app1.png'
                  alt='image'
                  width={389}
                  height={780}
                /> */}

                {/* <Image
                  src='/images/home-7-8-9/progress/progress.png'
                  alt='image'
                  width={815}
                  height={588}
                /> */}

                <Image
                  src='/images/home-7-8-9/app-ever/app-ever.png'
                  alt='image'
                  width={817}
                  height={727}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Images */}
        {/* <div className='shape-overlay'></div> */}
        <div className='banner-shape1'>
          <Image
            src='/images/shape/shape9.png'
            alt='image'
            width={121}
            height={362}
          />
        </div>
        <div className='banner-shape2'>
          <Image
            src='/images/shape/shape7.png'
            alt='image'
            width={78}
            height={47}
          />
        </div>
        <div className='banner-shape3'>
          {/* <Image
            src='/images/shape/shape2.png'
            alt='image'
            width={149}
            height={185}
          /> */}
          <Image
            src='/images/shape/shape10.png'
            alt='image'
            width={78}
            height={47}
          />
        </div>
        <div className='banner-shape4'>
          <Image
            src='/images/shape/shape6.png'
            alt='image'
            width={221}
            height={221}
          />
        </div>
        {/* <div className='banner-shape5'>
          <Image
            src='/images/shape/shape7.png'
            alt='image'
            width={99}
            height={195}
          />
          <Image
            src='/images/shape/shape7.png'
            alt='image'
            width={78}
            height={47}
          />
        </div> */}
      </div>
    </>
  )
}

export default MainBanner
