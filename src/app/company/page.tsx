'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import AboutUsContent2 from '@/components/AboutUsContent2'
import AboutUsContent from '@/components/AboutUsContent'
import Footer from '@/components/Footer'

// import MainBanner from '@/_components/HomeDemo1/MainBanner'

const Company: React.FC = () => {
  return (
    <>

      <PageBanner
        pageTitle="Company"
        homePageUrl="/"
        homePageText="Top"
        activePageText="会社概要"
      />

      <NavBar />

      <AboutUsContent2 />

      <AboutUsContent />

      <Footer />

    </>
  )
}

export default Company
