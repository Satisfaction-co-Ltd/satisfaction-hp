import React from 'react'
import NavbarStyleOne from '@/_components/Layouts/NavbarStyleOne'
import PageBannerStyle1 from '@/_components/Common/PageBannerStyle1'
import FooterStyleOne from '@/_components/Layouts/FooterStyleOne'
import BlogWithLeftSidebar from '@/_components/Blog/BlogWithLeftSidebar'

export default function Page() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle='Blog Left Sidebar'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Blog Left Sidebar'
      />

      <BlogWithLeftSidebar />

      <FooterStyleOne />
    </>
  )
}
