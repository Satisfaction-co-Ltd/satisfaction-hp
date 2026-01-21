import React from 'react'
import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>

      <NavBar />

      <PageBanner
        pageTitle='Privacy Policy'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Privacy Policy'
      />

      <PrivacyPolicyContent />

      <Footer />

    </>
  )
}
