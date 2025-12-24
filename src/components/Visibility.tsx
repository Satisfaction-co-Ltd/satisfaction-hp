'use client'

import React from 'react'

// 信頼の可視化： 紹介率 / 定着率 / 平均単価
const Visibility: React.FC = () => {
  return (
    <>
      <div className='funfacts-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div
              className='col-lg-4 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='100'
              data-aos-once='true'
            >
              <div className='funfacts-box'>
                <div className='icon'>
                  <i className='ri-user-shared-line'></i>
                </div>
                <p>紹介率</p>
                <h3>
                  XXX<span className='sign'>%</span>
                </h3>
              </div>
            </div>

            <div
              className='col-lg-4 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='200'
              data-aos-once='true'
            >
              <div className='funfacts-box bg1'>
                <div className='icon'>
                  <i className='ri-shield-user-line'></i>
                </div>
                <p>定着率</p>
                <h3>
                  XXX<span className='sign'>%</span>
                </h3>
              </div>
            </div>

            <div
              className='col-lg-4 col-sm-6 col-md-6'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='300'
              data-aos-once='true'
            >
              <div className='funfacts-box bg2'>
                <div className='icon'>
                  <i className='ri-coins-line'></i>
                </div>
                <p>平均単価</p>
                <h3>
                  XXX<span className='sign'>万円</span>
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Visibility
