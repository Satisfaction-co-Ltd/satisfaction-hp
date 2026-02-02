'use client'

import NavBar from '@/components/NavBar'
import PageBanner from '@/components/PageBanner'
import BlogGridPost from '@/components/Blog/BlogGridPost'
import Footer from '@/components/Footer'


export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle='Blog Grid'
        homePageUrl='/'
        homePageText='Top'
        activePageText='ブログ'
      />

      <NavBar />


      <BlogGridPost />

      <Footer />

    </>
  )
}
