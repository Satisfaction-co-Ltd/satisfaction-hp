'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Navigation } from 'swiper/modules'

import Image from 'next/image'
import Link from 'next/link';

const features = [
  {
    slug: "y-u",
    image: "/images/user/user1.jpg",
    name: "Y. U",
    info: "フロントエンドエンジニア",
    text: `前職でお世話になっていた先輩の紹介で入社を決めました。
          社長を含め全員がフレンドリーで、業務からプライベートまで相談しやすい風通しの良さが自慢です。
          現在はSESが中心ですが、今後は受託開発への挑戦や組織体制の強化など、会社としてさらに成長していくフェーズ。
          個々の強みを活かし、全員が幸せになれる組織を一緒に創っていける方をお待ちしています！`,
  },
  {
    slug: "y-y",
    image: "/images/user/user2.jpg",
    name: "Y. Y",
    info: "フロントエンドエンジニア",
    text: `裁量を持って働ける、スキルを伸ばせる、という点を魅力に感じ入社を決めました。
          当初は少人数の環境に不安もありましたが、現在は会社を大きくしていくフェーズに立ち会える面白さを実感しています。
          仕事の進め方を自分でコントロールできるため、ワークライフバランスを大切にしながら着実に成長できる環境です。
          ナレッジ共有など、組織としての仕組み作りも一緒に楽しんでいける仲間を待っています！`,
  },
  {
    slug: "o-k",
    image: "/images/user/user3.jpg",
    name: "O. K",
    info: "フロントエンドエンジニア",
    text: `一緒に働いて楽しかった方から誘われ、これぞエンジニア！と言った働き方（良くも悪くも）ができる環境に惹かれ入社しました。
          現在は家族を優先した在宅勤務や時間調整など、柔軟な働き方を尊重してもらっています。
          裁量がある分、個人の判断や責任も伴いますが、プロとして自律的に動ける面白さがあります。
          会社を背負う自覚を持ちつつ、新しいものを一緒に創り上げていける方を楽しみにしています。`,
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
              <SwiperSlide key={index}>
              <div className='single-feedback-item'>
                <div className='client-info'>
                  {/* <Link href={`/members/${item.slug}`} className="d-block"> */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      style={{ cursor: 'pointer' }}
                    />
                  {/* </Link> */}
                  <div className='title'>
                    {/* <Link href={`/members/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                      <h3 style={{ cursor: 'pointer' }}>{item.name}</h3>
                    {/* </Link> */}
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
