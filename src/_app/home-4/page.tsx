import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import MainBanner from '@/_components/HomeDemo4/MainBanner'
import PartnerStyle2 from '@/_components/Common/PartnerStyle2'
import IntroVideo from '@/_components/HomeDemo4/IntroVideo'
import Features from '@/_components/HomeDemo4/Features'
import BestAppEver from '@/_components/HomeDemo4/BestAppEver'
import KeyFeatures from '@/_components/HomeDemo4/KeyFeatures'
import AppProgressStyle3 from '@/_components/Common/AppProgressStyle3'
import AppDownloadStyle3 from '@/_components/Common/AppDownloadStyle3'
import AppScreenshotsStyle4 from '@/_components/AppScreenshots/AppScreenshotsStyle4'
import SoftwareIntegrationsThree from '@/_components/Common/SoftwareIntegrationsThree'
import PricingPlanStyle4 from '@/_components/PricingPlan/PricingPlanStyle4'
import ClientFeedbackStyle4 from '@/_components/Feedbacks/ClientFeedbackStyle4'
import FreeTrialStyle2 from '@/_components/Common/FreeTrialStyle2'
import FooterStyleTwo from '@/_components/Layouts/FooterStyleTwo'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <MainBanner />

      <PartnerStyle2 />

      <IntroVideo />

      <Features />

      <BestAppEver />

      <KeyFeatures />

      <AppProgressStyle3 />

      <AppDownloadStyle3 />

      <AppScreenshotsStyle4 />

      <SoftwareIntegrationsThree />

      <PricingPlanStyle4 />

      <ClientFeedbackStyle4 />

      <div className='ptb-100'>
        <FreeTrialStyle2 />
      </div>

      <FooterStyleTwo />
    </>
  )
}
