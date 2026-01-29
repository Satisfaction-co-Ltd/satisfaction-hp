'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import Testimonials from '@/components/Testimonials'
import Culture from '@/components/Culture'
import JobList from '@/components/JobList'
import ProjectIntroduction from '@/components/ProjectIntroduction'
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

      <JobList />

      <ProjectIntroduction />

      <Cta />

      <Footer />

    </>
  )
}

export default Recruit
