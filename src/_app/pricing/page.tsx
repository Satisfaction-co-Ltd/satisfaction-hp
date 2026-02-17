import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import PricingPlanStyle1 from '@/_components/PricingPlan/PricingPlanStyle1'
import PricingPlanStyle2 from '@/_components/PricingPlan/PricingPlanStyle2'
import PricingPlanStyle3 from '@/_components/PricingPlan/PricingPlanStyle3'
import PricingPlanStyle4 from '@/_components/PricingPlan/PricingPlanStyle4'
import PricingPlanStyle5 from '@/_components/PricingPlan/PricingPlanStyle5'
import PartnerStyle2 from '@/_components/Common/PartnerStyle2'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='Pricing Plan'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Pricing Plan'
      />

      <PricingPlanStyle2 />

      <PricingPlanStyle1 />

      <div className='pt-100'>
        <PricingPlanStyle4 />
      </div>

      <PricingPlanStyle3 />

      <PartnerStyle2 />

      <PricingPlanStyle5 />

      <div className='pt-100'>
        <AppDownloadStyle2 />
      </div>

      <FooterStyleOne />
    </>
  )
}
