import React from 'react'
import NavbarStyleTwo from '@/_components/Layouts/NavbarStyleTwo'
import PageBannerStyle2 from '@/_components/Common/PageBannerStyle2'
import AppProgressStyle4 from '@/_components/Common/AppProgressStyle4'
import AppDownloadStyle1 from '@/_components/Common/AppDownloadStyle1'
import FunfactStyleTwo from '@/_components/Common/FunfactStyleTwo'
import ClientFeedbackStyle5 from '@/_components/Feedbacks/ClientFeedbackStyle5'
import IntroVideo from '@/_components/Common/IntroVideo'
import TeamMemberStyle2 from '@/_components/Common/TeamMemberStyle2'
import SoftwareIntegrations from '@/_components/Common/SoftwareIntegrations'
import PartnerStyle3 from '@/_components/Common/PartnerStyle3'
import FooterStyleTwo from '@/_components/Layouts/FooterStyleTwo'
import AboutUsContent from '@/_components/AboutUs/AboutUsContent'

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <AboutUsContent />

      <AppProgressStyle4 />

      <AppDownloadStyle1 />

      <FunfactStyleTwo />

      <ClientFeedbackStyle5 />

      <div className="pt-100">
        <IntroVideo />
      </div>

      <TeamMemberStyle2 />

      <PartnerStyle3 />

      <SoftwareIntegrations />

      <FooterStyleTwo />
    </>
  )
}
