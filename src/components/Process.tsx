'use client'

import React from 'react'
import Image from 'next/image'

const Process: React.FC = () => {
  return (
    <>
      <div className='how-it-works-area ptb-100'>
        <div className='container'>
          <p>
            TODO：ここの表示を変えたい
          </p>
          <div className='how-it-works-content'>
            <div className='number'>1</div>

            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 1</h3>
                  <span>面談</span>
                </div>
              </div>

              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    技術スタックとキャリアパスを深く理解。<br />時間を無駄にしない、本質的なマッチングのための対話を行います。
                  </p>
                  <Image
                    src='/images/dummy.png'
                    alt='create-account'
                    width={930}
                    height={520}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='how-it-works-content'>
            <div className='number'>2</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 2</h3>
                  <span>提案</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    既存の枠に囚われず、あなたのスキルが最も輝く環境を提案。<br />新しい働き方の選択肢を提示します。
                  </p>
                  <Image
                    src='/images/dummy.png'
                    alt='select-coin'
                    width={930}
                    height={520}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='how-it-works-content'>
            <div className='number'>3</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 3</h3>
                  <span>参画</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    未経験の領域でも安心して飛び込めるよう、参画前の準備や情報提供を徹底。<br />あなたの新しいスタートを後押しします。
                  </p>
                  <Image
                    src='/images/dummy.png'
                    alt='select-payment'
                    width={930}
                    height={520}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='how-it-works-content'>
            <div className='number'>4</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 4</h3>
                  <span>伴走</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    定期的なフィードバックループにより、現場の課題や条件のミスマッチを即座に解消。<br />常に最適な状態をキープします。
                  </p>
                  <Image
                    src='/images/dummy.png'
                    alt='payment-method'
                    width={930}
                    height={520}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Process
