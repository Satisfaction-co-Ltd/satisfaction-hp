'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Navigation } from 'swiper/modules'
import Image from 'next/image'

const features = [
  {
    image: "/images/user/user1.jpg",
    name: "K. Tanaka",
    info: "フロントエンドエンジニア / 参画1年目",
    text: `商流や契約単価をすべて公開してくれる透明性に驚きました。
          以前は会社にいくら中抜きされているか分からず不安でしたが、ここでは納得した上で案件を選択できます。
          自分のスキルが正当に報酬に繋がっている実感がありますね。`,
  },
  {
    image: "/images/user/user2.jpg",
    name: "S. Sato",
    info: "バックエンドエンジニア / 参画2年目",
    text: `フルリモート環境で、地方の自宅から大規模なプロジェクトに参画しています。
          移動時間がゼロになった分、技術学習や家族との時間に充てられるようになりました。
          自分のライフスタイルに合わせた働き方をデザインできています。`,
  },
  {
    image: "/images/user/user3.jpg",
    name: "M. Itoh",
    info: "フルスタックエンジニア / 参画半年",
    text: `知人の紹介で参画しましたが、聞いていた通りの風通しの良さでした。
          スキルの高いエンジニア同士が信頼で繋がっているため、現場での意思疎通が非常にスムーズです。
          良い仲間と、ストレスのない環境で働ける喜びを感じています。`,
  }
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className='feedback-area pt-100 pb-75'>
        <div className='container'>
          <div className='section-title'>
            <span className='sub-title'>ENGINEERS' VOICES</span>
            <h2>誇れる仲間がいる。<br />頼れるチームがある。</h2>
          </div>

          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation={true}
            modules={[EffectCube, Navigation]}
            className='feedback-swiper-slides'
          >
            {features.map((item, index) => (
              <SwiperSlide>
              <div className='single-feedback-item'>
                <div className='client-info'>
                  <Image
                    src={item.image}
                    alt='user'
                    width={300}
                    height={300}
                  />
                  <div className='title'>
                    <h3>{item.name}</h3>
                    <span>{item.info}</span>
                  </div>
                </div>

                <p>
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
