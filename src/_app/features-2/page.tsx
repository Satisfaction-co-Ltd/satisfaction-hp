import React from 'react'
import NavbarStyleThree from '@/_components/Layouts/NavbarStyleThree'
import PageBannerStyle3 from '@/_components/Common/PageBannerStyle3'
import AppDownloadStyle3 from '@/_components/Common/AppDownloadStyle3'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import FeaturesCardStyle2 from '@/_components/Features/FeaturesCardStyle2'

export default function Page() {
  return (
    <>
      <NavbarStyleThree />

      <PageBannerStyle3
        pageTitle="Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
      />

      <FeaturesCardStyle2 />

      <AppDownloadStyle3 />

      <FooterStyleOne />
    </>
  )
}
