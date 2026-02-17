import React from 'react'
import NavbarStyleTwo from '@/_components/Layouts/NavbarStyleTwo'
import MainBanner from '@/_components/HomeDemo8/MainBanner'
import BestFeatures from '@/_components/HomeDemo8/BestFeatures'
import TopFeatures from '@/_components/HomeDemo8/TopFeatures'
import AboutContent from '@/_components/HomeDemo8/AboutContent'
import KeyFeatures from '../../_components/HomeDemo8/KeyFeatures'
import AppScreenshots from '@/_components/HomeDemo8/AppScreenshots'
import AppIntroVideo from '@/_components/HomeDemo8/AppIntroVideo'
import Funfacts from '@/_components/HomeDemo8/Funfacts'
import AppDownload from '@/_components/HomeDemo8/AppDownload'
import ClientFeedback from '@/_components/HomeDemo8/ClientFeedback'
import PricingPlan from '@/_components/HomeDemo8/PricingPlan'
import BlogPost from '@/_components/Common/BlogPost'
import PartnerStyle2 from '@/_components/Common/PartnerStyle2'
import FooterStyleThree from '@/_components/Layouts/FooterStyleThree'

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />

      <BestFeatures />

      <TopFeatures />

      <AboutContent />

      <KeyFeatures />

      <AppScreenshots />

      <AppIntroVideo />

      <Funfacts />

      <AppDownload />

      <ClientFeedback />

      <PricingPlan />

      <div className='bg-f9f9f9'>
        <PartnerStyle2 />
      </div>

      <BlogPost />

      <FooterStyleThree />
    </>
  )
}
