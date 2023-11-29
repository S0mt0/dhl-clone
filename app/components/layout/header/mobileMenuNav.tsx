"use client";

import Link from "next/link";

import Image from "next/image";

import { useGlobalProvider } from "@/sdk";

import MobileMenuButton from "./menu-btn";

import _ from "../../../styles/header.module.scss";

const MobileMenuNav = () => {
  const {
    mobileMenuStore: { closeMenu },
  } = useGlobalProvider();

  return (
    <header
      className={`${_.mobile_menu_sticky}`}
      id="no-print"
      style={{
        position: "initial",
      }}
    >
      <nav>
        <Link href="/" title="DHL Logo" onClick={closeMenu}>
          <img src={"/dhl-logo.svg"} alt="DHL Logo" />
        </Link>

        <MobileMenuButton />
      </nav>
    </header>
  );
};

export default MobileMenuNav;
