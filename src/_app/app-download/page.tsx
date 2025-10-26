import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/_components/Common/AppDownloadStyle1'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import PartnerStyle3 from '@/_components/Common/PartnerStyle3'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='App Download'
        homePageUrl='/'
        homePageText='Home'
        activePageText='App Download'
      />

      <div className='pt-100'>
        <AppDownloadStyle2 />
      </div>

      <div className='pb-100'>
        <AppDownloadStyle1 />
      </div>

      <PartnerStyle3 />

      <FooterStyleOne />
    </>
  )
}
