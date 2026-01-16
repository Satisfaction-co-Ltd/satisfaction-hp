'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import Cta from '@/components/Cta'
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

      <NavBar />

      <Cta />

      <div className="pb-100 pt-100">
        <div className="container">
          <p>TODO：協業の問い合わせ(Googleフォームとか使う？)</p>
          <p>プライバシーポリシーも必要</p>
        </div>
      </div>


      <Footer />

    </>
  )
}

export default Contact
