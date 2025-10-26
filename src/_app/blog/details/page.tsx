import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import BlogDetailsContent from '@/_components/Blog/BlogDetailsContent'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
      />

      <BlogDetailsContent />

      <FooterStyleOne />
    </>
  )
}
