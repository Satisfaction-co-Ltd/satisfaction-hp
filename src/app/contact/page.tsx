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

      <Footer />

    </>
  )
}

export default Contact
