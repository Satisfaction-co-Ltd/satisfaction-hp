import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import ContactForm from '@/_components/Contact/ContactForm'
import ContactInfo from '@/_components/Contact/ContactInfo'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
      />

      <ContactForm />

      <ContactInfo />

      <FooterStyleOne />
    </>
  )
}
