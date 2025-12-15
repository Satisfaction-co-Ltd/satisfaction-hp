import React from 'react'
import NavbarStyleThree from '@/_components/Layouts/NavbarStyleThree'
import MainBanner from '@/_components/HomeDemo5/MainBanner'
import PartnerStyle1 from '@/_components/Common/PartnerStyle1'
import AboutUsArea from '@/_components/HomeDemo5/AboutUsArea'
import Features from '@/_components/HomeDemo5/Features'
import KeyFeatures from '@/_components/HomeDemo5/KeyFeatures'
import AppScreenshotsStyle5 from '@/_components/AppScreenshots/AppScreenshotsStyle5'
import PricingPlanStyle5 from '@/_components/PricingPlan/PricingPlanStyle5'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import ClientFeedbackStyle5 from '@/_components/Feedbacks/ClientFeedbackStyle5'
import FreeTrialStyle3 from '@/_components/Common/FreeTrialStyle3'
import BlogPost from '@/_components/Common/BlogPost'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'

export default function Page() {
  return (
    <>
      <NavbarStyleThree />

      <MainBanner />

      <PartnerStyle1 />

      <AboutUsArea />

      <Features />

      <KeyFeatures />

      <AppScreenshotsStyle5 />

      <PricingPlanStyle5 />

      <div className='pt-100'>
        <AppDownloadStyle2 />
      </div>

      <ClientFeedbackStyle5 />

      <div className='pt-100'>
        <FreeTrialStyle3 />
      </div>

      <BlogPost />

      <FooterStyleOne />
    </>
  )
}
