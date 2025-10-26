import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import PartnerStyle3 from '@/_components/Common/PartnerStyle3'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import TeamCard from '@/_components/Team/TeamCard'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard />

      <PartnerStyle3 />

      <FooterStyleOne />
    </>
  )
}
