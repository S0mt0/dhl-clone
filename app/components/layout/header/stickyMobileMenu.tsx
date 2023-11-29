"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useGlobalProvider } from "@/sdk";

import _ from "../../../styles/header.module.scss";
import MobileMenuButton from "./menu-btn";

const MobileNavSticky = () => {
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
      className={`${_.mobile_menu_sticky}`}
      id="no-print"
      style={{
        transform: showStickyNav ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav>
        <Link href="/" title="DHL Logo">
          <img src={"/dhl-logo.svg"} alt="DHL Logo" />
        </Link>

        <MobileMenuButton />
      </nav>
    </header>
  );
};

export default MobileNavSticky;
