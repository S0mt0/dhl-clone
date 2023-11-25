"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import _ from "../../../styles/header.module.scss";

const MobileNavSticky = ({
  menuIsOpen,
  toggleMenu,
}: {
  toggleMenu: () => void;
  menuIsOpen: boolean;
}) => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

        <div className={_.menu_btn}>
          {!menuIsOpen ? (
            <GiHamburgerMenu onClick={toggleMenu} />
          ) : (
            <MdClose onClick={toggleMenu} />
          )}{" "}
        </div>
      </nav>
    </header>
  );
};

export default MobileNavSticky;
