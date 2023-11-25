"use client";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import _ from "../../../styles/header.module.scss";

const MobileMenuNav = ({
  menuIsOpen,
  toggleMenu,
}: {
  toggleMenu: () => void;
  menuIsOpen: boolean;
}) => {
  return (
    <header
      className={`${_.mobile_menu_sticky}`}
      id="no-print"
      style={{
        position: "initial",
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

export default MobileMenuNav;
