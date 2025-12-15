import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/_components/Common/AppDownloadStyle1'
import KeyFeatures from '@/_components/HomeDemo1/KeyFeatures'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import ServicesCard from '@/_components/Services/ServicesCard'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Services'
      />

      <ServicesCard />

      <KeyFeatures />

      <div className='ptb-100'>
        <AppDownloadStyle1 />
      </div>

      <FooterStyleOne />
    </>
  )
}
