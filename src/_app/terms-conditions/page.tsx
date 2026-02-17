import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import TermsConditionsContent from '@/_components/TermsConditions/TermsConditionsContent'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='Terms & Conditions'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Terms & Conditions'
      />

      <TermsConditionsContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  )
}
