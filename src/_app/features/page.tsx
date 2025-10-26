import React from 'react'
import NavbarStyleThree from '@/_components/Layouts/NavbarStyleThree'
import PageBannerStyle3 from '@/_components/Common/PageBannerStyle3'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import FeaturesCard from '@/_components/Features/FeaturesCard'

export default function Page() {
  return (
    <>
      <NavbarStyleThree />

      <PageBannerStyle3
        pageTitle="Products Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
      />

      <FeaturesCard />

      <div className="pt-100">
        <AppDownloadStyle2 />
      </div>

      <FooterStyleOne />
    </>
  )
}
