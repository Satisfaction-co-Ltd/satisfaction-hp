import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import MainBanner from '@/_components/HomeDemo1/MainBanner'
import Features from '@/_components/HomeDemo1/Features'
import IntroVideo from '@/_components/HomeDemo1/IntroVideo'
import BestAppEver from '@/_components/HomeDemo1/BestAppEver'
import KeyFeatures from '@/_components/HomeDemo1/KeyFeatures'
import AppProgressStyle1 from '@/_components/Common/AppProgressStyle1'
import AppDownloadStyle1 from '@/_components/Common/AppDownloadStyle1'
import AppScreenshotsStyle1 from '@/_components/AppScreenshots/AppScreenshotsStyle1'
import SoftwareIntegrations from '@/_components/Common/SoftwareIntegrations'
import PricingPlanStyle1 from '@/_components/PricingPlan/PricingPlanStyle1'
import ClientFeedbackStyle1 from '@/_components/Feedbacks/ClientFeedbackStyle1'
import FreeTrialStyle1 from '@/_components/Common/FreeTrialStyle1'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'

export default function Home() {
  return (
    <>
      <NavbarStyleOne />

      <MainBanner />

      <Features />

      <IntroVideo />

      <BestAppEver />

      <KeyFeatures />

      <AppProgressStyle1 />

      <AppDownloadStyle1 />

      <AppScreenshotsStyle1 />

      <SoftwareIntegrations />

      <PricingPlanStyle1 />

      <ClientFeedbackStyle1 />

      <FreeTrialStyle1 />

      <FooterStyleOne />
    </>
  )
}
