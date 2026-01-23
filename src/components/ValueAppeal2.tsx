'use client'

import React from 'react'

// 価値訴求： 案件選択 / 透明性 / リモート / 紹介文化 
const ValueAppeal2: React.FC = () => {
  return (
    <>
      {/* セクションタイトル： あってもなくてもいい */}
      <div className="section-title pt-100">
        <span className='sub-title'>DESIGNED BY ENGINEERS</span>
        <h2>理想の働き方をデザインする。</h2>
        <p>エンジニア一人ひとりが理想の働き方を実現できるように。</p>
      </div>

      <div className='features-area pb-75'>
        <div className='container'>
          <div className='row justify-content-center'>

            <div className='col-xl-3 col-lg-4 col-6 col-md-6 xsw-100'>
              <div className='single-features-box'>
                <div className='icon'>
                  <i className="ri-checkbox-multiple-line"></i>
                </div>
                <h3>案件選択</h3>
                <p>
                  やりたい仕事は自分で決める。<br />エンジニア主体のアサインを実現します。
                </p>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-6 col-md-6 xsw-100'>
              <div className='single-features-box'>
                <div className='icon bg2'>
                  <i className="ri-terminal-window-line"></i>
                </div>
                <h3>透明性</h3>
                <p>
                  案件背景や現場のリアルな情報を共有。<br />風通しの良い環境を提供します。
                </p>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-6 col-md-6 xsw-100'>
              <div className='single-features-box'>
                <div className='icon bg3'>
                  <i className="ri-home-office-line"></i>
                </div>
                <h3>リモートワーク</h3>
                <p>
                  フルリモート案件を中心に、場所にとらわれない柔軟な働き方を支援します。
                </p>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-6 col-md-6 xsw-100'>
              <div className='single-features-box'>
                <div className='icon bg4'>
                  <i className="ri-team-line"></i>
                </div>
                <h3>紹介文化</h3>
                <p>
                  信頼の紹介制度。<br />質の高い仲間とプロジェクトを共に。
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ValueAppeal2
