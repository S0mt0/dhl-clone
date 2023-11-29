"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { FiExternalLink, FiSearch } from "react-icons/fi";
import { BsChevronDown, BsGlobe2 } from "react-icons/bs";
import { FlagIconCode } from "react-flag-kit";

import axios from "axios";

import { useGlobalProvider } from "@/sdk";

import MobileNavSticky from "./stickyMobileMenu";
import DesktopNavSticky from "./stickyDesktopMenu";
import MobileMenu from "./mobileMenu";

import _ from "../../../styles/header.module.scss";
import MobileMenuButton from "./menu-btn";
import BackToTopButton from "../../back-to-top-btn";

const Header = () => {
  const [country, setCountry] = useState("");
  const [countryISOCode, setCountryISOCode] = useState<FlagIconCode | null>(
    null
  );

  const {
    mobileMenuStore: { isMobileMenuOpen },
  } = useGlobalProvider();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let isMounted = true;

    const getCountry = async () => {
      try {
        const { data } = await axios.get(" https://ipapi.co/json/");

        isMounted && setCountry(data?.country_name);
        isMounted && setCountryISOCode(data?.country);
      } catch (error: any) {
        console.error(error?.message);
      }
    };

    getCountry();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <header className={_.Header} id="no-print">
        <MobileNavSticky />
        <DesktopNavSticky />
        <nav>
          <Link href="/" title="DHL Logo" className={_.logo}>
            <img src={"/dhl-logo.svg"} alt="DHL Logo" />
          </Link>

          <ul>
            <li>
              <a>
                <span>Find a Location</span>
                <FiExternalLink />
              </a>
            </li>
            <li>
              <a>
                <FiSearch />
                <span>Search</span>
              </a>
            </li>
            <li>
              <a>
                <BsGlobe2 />
                <span>{country}</span>
              </a>
            </li>
          </ul>

          <MobileMenuButton />
        </nav>
        {/*  */}
        {/*  */}
        <div className={_.sub_nav}>
          <ul>
            <li>
              <a>
                <span>Track</span>
                <BsChevronDown />
              </a>
            </li>
            <li>
              <a>
                <span>Track</span>
                <BsChevronDown />
              </a>
            </li>
            <li>
              <a>
                <span>Customer Service</span>
              </a>
            </li>
          </ul>
          <a>
            <span>Customer Portal Logins</span>
            <BsChevronDown />
          </a>
        </div>
      </header>
      <MobileMenu country={country} countryISOCode={countryISOCode!} />
      <BackToTopButton />
    </>
  );
};

export default Header;
