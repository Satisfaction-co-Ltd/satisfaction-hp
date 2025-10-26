import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/_components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import GalleryContent from '@/_components/Gallery/GalleryContent'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='Gallery'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Gallery'
      />

      <GalleryContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  )
}
