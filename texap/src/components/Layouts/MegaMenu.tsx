import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const MegaMenu: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <>
      <li className="nav-item megamenu">
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="dropdown-toggle nav-link"
        >
          Pages
        </Link>

        <ul className="dropdown-menu">
          <li className="nav-item">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h6 className="submenu-title">Pages I</h6>
                  <ul className="megamenu-submenu">
                    <li>
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentRoute == "/team/" && "active"
                        }`}
                      >
                        Team 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team-2/"
                        className={`nav-link ${
                          currentRoute == "/team-2/" && "active"
                        }`}
                      >
                        Team 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/how-it-works/"
                        className={`nav-link ${
                          currentRoute == "/how-it-works/" && "active"
                        }`}
                      >
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery/"
                        className={`nav-link ${
                          currentRoute == "/gallery/" && "active"
                        }`}
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentRoute == "/services/" && "active"
                        }`}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className={`nav-link ${
                          currentRoute == "/pricing/" && "active"
                        }`}
                      >
                        Pricing Plan
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h6 className="submenu-title">Pages II</h6>
                  <ul className="megamenu-submenu">
                    <li>
                      <Link
                        href="/feedback/"
                        className={`nav-link ${
                          currentRoute == "/feedback/" && "active"
                        }`}
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sign-in/"
                        className={`nav-link ${
                          currentRoute == "/sign-in/" && "active"
                        }`}
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sign-up/"
                        className={`nav-link ${
                          currentRoute == "/sign-up/" && "active"
                        }`}
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/forget-password/"
                        className={`nav-link ${
                          currentRoute == "/forget-password/" && "active"
                        }`}
                      >
                        Forget Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy/"
                        className={`nav-link ${
                          currentRoute == "/privacy-policy/" && "active"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms-conditions/"
                        className={`nav-link ${
                          currentRoute == "/terms-conditions/" && "active"
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h6 className="submenu-title">Pages III</h6>
                  <ul className="megamenu-submenu">
                    <li>
                      <Link
                        href="/screenshots/"
                        className={`nav-link ${
                          currentRoute == "/screenshots/" && "active"
                        }`}
                      >
                        Screenshots
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentRoute == "/faq/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentRoute == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentRoute == "/404/" && "active"
                        }`}
                      >
                        404 Error Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/app-download/"
                        className={`nav-link ${
                          currentRoute == "/app-download/" && "active"
                        }`}
                      >
                        App Download
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentRoute == "/contact/" && "active"
                        }`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="d-block p-0"
                  >
                    <Image
                      src="/images/navbar.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default MegaMenu;
