'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Navigation } from 'swiper/modules'

import Image from 'next/image'
import Link from 'next/link';

const features = [
  // {
  //   slug: "y-u",
  //   image: "/images/user/y-u.jpg",
  //   name: "Y. U",
  //   info: "フロントエンドエンジニア / エンジニア歴7年",
  //   text: `前職でお世話になっていた先輩の紹介で入社を決めました。
  //         社長を含め全員がフレンドリーで、業務からプライベートまで相談しやすい風通しの良さが自慢です。
  //         現在はSESが中心ですが、今後は受託開発への挑戦や組織体制の強化など、会社としてさらに成長していくフェーズ。
  //         個々の強みを活かし、全員が幸せになれる組織を一緒に創っていける方をお待ちしています！`,
  // },
  {
    slug: "y-y",
    image: "/images/user/y-y.jpg",
    name: "Y. Y",
    info: "フルスタックエンジニア / エンジニア歴10年",
    text: `裁量を持って働ける、スキルを伸ばせる、という点を魅力に感じ入社を決めました。
          当初は少人数の環境に不安もありましたが、現在は会社を大きくしていくフェーズに立ち会える面白さを実感しています。
          仕事の進め方を自分でコントロールできるため、ワークライフバランスを大切にしながら着実に成長できる環境です。
          ナレッジ共有など、組織としての仕組み作りも一緒に楽しんでいける仲間を待っています！`,
  },
  {
    slug: "o-k",
    image: "/images/user/o-k.jpg",
    name: "O. K",
    info: "フルスタックエンジニア / エンジニア歴18年",
    text: `一緒に働いて楽しかった方から誘われ、これぞエンジニア！と言った働き方（良くも悪くも）ができる環境に惹かれ入社しました。
          現在は家族を優先した在宅勤務や時間調整など、柔軟な働き方を尊重してもらっています。
          裁量がある分、個人の判断や責任も伴いますが、プロとして自律的に動ける面白さがあります。
          会社を背負う自覚を持ちつつ、新しいものを一緒に創り上げていける方を楽しみにしています。`,
  },
  {
    slug: "m-u",
    image: "/images/user/m-u.jpg",
    name: "M. U",
    info: "SAPコンサルタント / エンジニア歴4年",
    text: `風通しが良く、自分の能力を最大限に発揮できる環境に惹かれ入社しました。
    代表との距離が近く、意見交換がスムーズなため、不安を即座に解消できるスピード感が魅力です。
    現在は、ユーザーの方々へより自信を持って提案できるよう、コミュニケーションの改善に励んでいます。
    一つひとつの対話を大切に、信頼されるエンジニアを目指し日々成長中です！`,
  },
  {
    slug: "k-s",
    image: "/images/user/k-s.jpg",
    name: "K. S",
    info: "バックエンドエンジニア / エンジニア歴8年",
    text: `前職の同僚からの紹介で出会った、社内の温かい雰囲気に惹かれ入社を決めました。
          現在はフルリモートという環境を活かし、生活リズムに合わせた柔軟な働き方を実現しています。
          少人数の組織ゆえに情報共有の仕組みなどは改善の余地がありますが、その分スピード感があり、新しい技術にも積極的に挑戦できる環境です。
          この変化を楽しみながら、共に成長していける仲間をお待ちしています！`,  
  },
  {
    slug: "r-t",
    image: "/images/user/r-t.jpg",
    name: "R. T",
    info: "営業部",
    text: `人生の岐路で親身にアドバイスをいただき、成長を後押ししてもらったことが入社の決め手です。
          現在は、自立したメンバーが自分の人生に真摯に向き合う、心地よい温度感の中で働いています。
          営業チームは立ち上げ期で手探りな部分もありますが、早く互いを助け合える体制を固め、組織の土台を築いていくのが今の目標です！`,
  },
  // {
  //   slug: "m-f",
  //   image: "/images/user/m-f.jpg",
  //   name: "M. F",
  //   info: "総務部",
  //   text: `『人をサポートすることが好き』という想いから、バックオフィスとして社員が安心して仕事に集中できる環境づくりに励んでいます。
  //         直接お会いする機会は多くありませんが、日々の丁寧な対応を通じて、会社の成長を明るく支える『縁の下の力持ち』でありたいと思っています。
  //         困ったときにいつでも気軽に頼ってもらえる、そんな心地よい組織を一緒に創っていきましょう！`,
  // },
  {
    slug: "h-y",
    image: "/images/user/h-y.jpg",
    name: "H. Y",
    info: "営業部",
    text: `社長の人柄と、個人のキャリアを大切に考えてくれる姿勢に惹かれて入社を決めました。
          フルリモート中心ですが、困った時にすぐ相談できる温かい雰囲気があり、何より仕事を楽しみながら取り組む社風が魅力です。
          今後は固定概念にとらわれず多角的な視点を養い、会社とともに自分自身の可能性もさらに広げていきたいと思っています！`,
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
