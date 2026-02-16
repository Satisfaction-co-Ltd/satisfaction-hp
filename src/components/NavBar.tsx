'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuItem from './MenuItem'

type Menu = {
  label: string
  link: string
}

const MENUS: Menu[] = [
  { label: 'Top', link: '/' },
  { label: 'Company', link: '/company' },
  { label: 'Business', link: '/business' },
  { label: 'Recruit', link: '/recruit' },
  { label: 'Contact', link: '/contact' },
  // { label: 'Blog', link: '/blog' },
]

interface NavBarProps {
  contactBtnView?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  contactBtnView = true
}) => {
  const [menu, setMenu] = useState(true)
  const toggleNavbar = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
      if (window.scrollY > 170) {
        navbar?.classList.add('is-sticky');
      } else {
        navbar?.classList.remove('is-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show'
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <div id='navbar' className='navbar-area cs-navbar'>
        <div className='texap-nav'>
          <div className='container'>
            <nav className='navbar navbar-expand-md navbar-light bg-light'>
              <Link
                href='/'
                className='navbar-brand flex items-center cs-navbar__logo'
              >
                <Image
                  src='/images/logo-white.png'
                  alt='logo'
                  width={50}
                  height={50}
                />
                <span className='text-white'>Satisfaction co., Ltd.</span>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div className={classOne} id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                  {MENUS.map(menuItem => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
              </div>

              {contactBtnView && (
                <div className="others-options pc-contact-btn">
                  <div className="option-item">
                    <a href="/contact" className="contact-btn">お問い合わせ</a>
                    &emsp;
                    <a href="https://lin.ee/WEkHcKe" className="line-btn"><i className="ri-line-fill"></i> LINE友だち追加</a>
                  </div>
                </div>
              )}

            </nav>
          </div>
        </div>
      </div>

      {contactBtnView && (
        <div className="others-options mobile-fixed-contact-btn">
          <div className="option-item">
            <a href="/contact" className="contact-btn">お問い合わせ</a>
            <a href="https://lin.ee/WEkHcKe" className="line-btn"><i className="ri-line-fill"></i> LINE友だち追加</a>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
