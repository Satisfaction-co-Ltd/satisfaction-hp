import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import PrivacyPolicyContent from '@/_components/PrivacyPolicy/PrivacyPolicyContent'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='Privacy Policy'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Privacy Policy'
      />

      <PrivacyPolicyContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  )
}
