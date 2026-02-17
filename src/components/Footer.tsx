// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='footer-area'>
        <div className='container'>
          <div className='footer-content'>
            <Link href='/' className='logo'>
              <Image
                src='/images/logo-white.png'
                alt='logo'
                width={50}
                height={50}
              />
              <span className='text-white ri-xl'> Satisfaction co., Ltd.</span>
            </Link>

            <ul className='social-links'>
              <li>
                <a href='https://lin.ee/WEkHcKe' target='_blank'>
                  <i className='ri-line-fill'></i>
                </a>
              </li>
              {/* <li>
                <a href='https://twitter.com/' target='_blank'>
                  <i className='ri-twitter-x-fill'></i>
                </a>
              </li> */}
              {/* <li>
                <a href='https://www.instagram.com/' target='_blank'>
                  <i className='ri-instagram-fill'></i>
                </a>
              </li> */}
              {/* <li>
                <a href='https://www.linkedin.com/' target='_blank'>
                  <i className='ri-linkedin-fill'></i>
                </a>
              </li> */}
              {/* <li>
                <a href='https://www.messenger.com/' target='_blank'>
                  <i className='ri-messenger-fill'></i>
                </a>
              </li> */}
              {/* <li>
                <a href='https://github.com/' target='_blank'>
                  <i className='ri-github-fill'></i>
                </a>
              </li> */}
            </ul>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link href='/' className='nav-link'>
                  Top
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/company' className='nav-link'>
                  Company
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/business' className='nav-link'>
                  Business
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/recruit' className='nav-link'>
                  Recruit
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/contact' className='nav-link'>
                  Contact
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link href='/blog' className='nav-link'>
                  Blog
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link href='/privacy-policy' className='nav-link'>
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <p className='copyright'>
              Copyright &copy; {currentYear} <strong>Satisfaction co., Ltd.</strong>
              {/* All Rights
              Reserved by{' '}
              <a href='https://envytheme.com/' target='_blank'>
                EnvyTheme
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
