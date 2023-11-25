"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { FaUserTie } from "react-icons/fa";

import _ from "../../../styles/header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

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
          <Link href="/" title="DHL Logo">
            <img src={"/dhl-logo.svg"} alt="DHL Logo" />
          </Link>

          <ul>
            <li>
              <a href="#">
                <span>Track</span>
                <BsChevronDown />
              </a>
            </li>
            <li>
              <a href="#">
                <span>Track</span>
                <BsChevronDown />
              </a>
            </li>
            <li>
              <a href="#">
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