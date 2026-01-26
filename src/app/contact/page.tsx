'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import Cta from '@/components/Cta'
import CtaForm from '@/components/CtaForm'
import Footer from '@/components/Footer'

// import MainBanner from '@/_components/HomeDemo1/MainBanner'

const Contact: React.FC = () => {
  return (
    <>

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Top"
        activePageText="問い合わせ"
      />

      <NavBar 
        contactBtnView={false}
      />

      <Cta />

      <p style={{textAlign: 'center'}}>↑↑↑ 上のようなボタンでフォームを別タブで開くほうがいいかも ↑↑↑</p>
      <p style={{textAlign: 'center'}}>↓↓↓  いったん、見た目の確認用にフォーム埋め込みを残しておく  ↓↓↓</p>
      <p style={{textAlign: 'center'}}>↓↓↓  埋め込むなら見た目のカスタムは必須レベルな気がする  ↓↓↓</p>

      <CtaForm />

      <Footer />

    </>
  )
}

export default Contact
