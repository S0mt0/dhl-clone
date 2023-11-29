"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { FaUserTie } from "react-icons/fa";

import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useGlobalProvider } from "@/sdk";

import _ from "../../../styles/header.module.scss";

const DesktopNavSticky = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        return setShowStickyNav(true);
      }
      setShowStickyNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const {
    mobileMenuStore: { closeMenu },
  } = useGlobalProvider();

  return (
    <header
      className={`${_.desktop_menu_sticky}`}
      id="no-print"
      style={{
        transform: showStickyNav ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav>
        <div>
          <Link href="/" title="DHL Logo" onClick={closeMenu}>
            <img src={"/dhl-logo.svg"} alt="DHL Logo" />
          </Link>

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
        </div>

        <div className={_.icon_group}>
          <FiSearch style={{ marginRight: "16px" }} />
          <FaUserTie />
          <BsChevronDown />
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavSticky;
