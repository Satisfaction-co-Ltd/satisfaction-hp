import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import FaqContent from '@/_components/Faq/FaqContent'
import ContactInfo from '@/_components/Faq/ContactInfo'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />

      <FaqContent />

      <ContactInfo />

      <FooterStyleOne />
    </>
  )
}
