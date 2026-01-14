'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import Testimonials from '@/components/Testimonials'
import Culture from '@/components/Culture'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

// import MainBanner from '@/_components/HomeDemo1/MainBanner'

const Recruit: React.FC = () => {
  return (
    <>

      <PageBanner
        pageTitle="Recruit"
        homePageUrl="/"
        homePageText="Top"
        activePageText="リクルート"
      />

      <NavBar />

      <Testimonials />

      <Culture />

      <Cta />

      <Footer />

    </>
  )
}

export default Recruit
