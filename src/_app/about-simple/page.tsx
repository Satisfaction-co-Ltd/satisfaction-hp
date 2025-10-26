import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import FunfactStyleOne from '@/_components/Common/FunfactStyleOne'
import AppProgressStyle2 from '@/_components/Common/AppProgressStyle2'
import SoftwareIntegrationsTwo from '@/_components/Common/SoftwareIntegrationsTwo'
import TeamMemberStyle1 from '@/_components/Common/TeamMemberStyle1'
import PartnerStyle3 from '@/_components/Common/PartnerStyle3'
import ClientFeedbackStyle1 from '@/_components/Feedbacks/ClientFeedbackStyle1'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import AboutUsContent2 from '@/_components/AboutUs/AboutUsContent2'
import TotalUserInThisWorld from '@/_components/AboutUs/TotalUserInThisWorld'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='About Us'
        homePageUrl='/'
        homePageText='Home'
        activePageText='About Us'
      />

      <AboutUsContent2 />

      <FunfactStyleOne />

      <AppProgressStyle2 />

      <TotalUserInThisWorld />

      <SoftwareIntegrationsTwo />

      <TeamMemberStyle1 />

      <PartnerStyle3 />

      <ClientFeedbackStyle1 />

      <FooterStyleOne />
    </>
  )
}
