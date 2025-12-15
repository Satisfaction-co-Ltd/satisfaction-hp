import React from 'react'
import NavbarStyleTwo from '@/_components/Layouts/NavbarStyleTwo'
import PageBannerStyle2 from '@/_components/Common/PageBannerStyle2'
import AppDownloadStyle1 from '@/_components/Common/AppDownloadStyle1'
import FooterStyleTwo from '@/_components/Layouts/FooterStyleTwo'
import TeamCard2 from '@/_components/Team/TeamCard2'

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle='Meet With Our Team Member'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Team'
      />

      <TeamCard2 />

      <div className='pb-100'>
        <AppDownloadStyle1 />
      </div>

      <FooterStyleTwo />
    </>
  )
}
