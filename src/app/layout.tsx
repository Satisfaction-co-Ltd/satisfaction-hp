import '../_app/styles/bootstrap.min.css'
import '../_app/styles/fontawesome.min.css'
import '../_app/styles/remixicon.css'
import '../_app/styles/animate.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-18-image-lightbox/style.css'
import 'react-tabs/style/react-tabs.css'
import 'swiper/css'
import 'swiper/css/bundle'

// Global CSS
import '../_app/styles/styles.css'
import '../_app/globals.css'
import './styles/styles.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoTop from '@/_components/Layouts/GoTop'
import AosAnimation from '@/_components/Layouts/AosAnimation'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '株式会社サティスファクション',
  description: 'WORK STYLISH. LIVE PROUD.',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  )
}

export default RootLayout
