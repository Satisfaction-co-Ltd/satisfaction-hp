import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import HowItWorksContent from '@/_components/HowItWorks/HowItWorksContent'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='How It Works'
        homePageUrl='/'
        homePageText='Home'
        activePageText='How It Works'
      />

      <HowItWorksContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  )
}
