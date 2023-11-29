"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { FiExternalLink, FiSearch } from "react-icons/fi";
import { BsChevronDown, BsGlobe2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FlagIconCode } from "react-flag-kit";

import axios from "axios";

import MobileNavSticky from "./stickyMobileMenu";
import DesktopNavSticky from "./stickyDesktopMenu";
import MobileMenu from "./mobileMenu";
import BackTopButton from "../../back-to-top-btn";

import _ from "../../../styles/header.module.scss";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [countryISOCode, setCountryISOCode] = useState<FlagIconCode | null>(
    null
  );

  const toggleMenu = () => {
    setMenuIsOpen((current) => !current);
  };

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menuIsOpen]);

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
        <MobileNavSticky toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
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

          <div className={_.menu_btn}>
            {!menuIsOpen ? (
              <GiHamburgerMenu onClick={toggleMenu} />
            ) : (
              <MdClose onClick={toggleMenu} />
            )}
          </div>
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
      {!menuIsOpen && <BackTopButton />}
      {menuIsOpen && (
        <MobileMenu
          toggleMenu={toggleMenu}
          menuIsOpen={menuIsOpen}
          country={country}
          countryISOCode={countryISOCode!}
        />
      )}
    </>
  );
};

export default Header;
