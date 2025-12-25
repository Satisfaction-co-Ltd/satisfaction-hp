'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import Introduction from '@/components/Introduction'
import Process from '@/components/Process'
import Footer from '@/components/Footer'

// import MainBanner from '@/_components/HomeDemo1/MainBanner'

const Business: React.FC = () => {
  return (
    <>

      <PageBanner
        pageTitle="Business"
        homePageUrl="/"
        homePageText="Top"
        activePageText="事業紹介"
      />

      <NavBar />

      <Introduction />

      <Process />

      <Footer />

    </>
  )
}

export default Business
