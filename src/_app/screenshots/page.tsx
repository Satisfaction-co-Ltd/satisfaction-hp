import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppScreenshotsStyle1 from '@/_components/AppScreenshots/AppScreenshotsStyle1'
import AppScreenshotsStyle2 from '@/_components/AppScreenshots/AppScreenshotsStyle2'
import AppScreenshotsStyle3 from '@/_components/AppScreenshots/AppScreenshotsStyle3'
import AppScreenshotsStyle4 from '@/_components/AppScreenshots/AppScreenshotsStyle4'
import AppScreenshotsStyle5 from '@/_components/AppScreenshots/AppScreenshotsStyle5'
import AppScreenshotsStyle6 from '@/_components/AppScreenshots/AppScreenshotsStyle6'
import SoftwareIntegrations from '@/_components/Common/SoftwareIntegrations'
import AppDownloadStyle1 from '@/_components/Common/AppDownloadStyle1'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Screenshots"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Screenshots"
      />

      <AppScreenshotsStyle1 />

      <div className="pt-100">
        <AppScreenshotsStyle2 />
      </div>

      <AppScreenshotsStyle3 />

      <div className="pt-100">
        <AppScreenshotsStyle5 />
      </div>

      <AppScreenshotsStyle4 />

      <SoftwareIntegrations />

      <AppScreenshotsStyle6 />

      <div className="ptb-100">
        <AppDownloadStyle1 />
      </div>

      <FooterStyleOne />
    </>
  )
}
