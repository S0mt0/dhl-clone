"use client";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import _ from "../../../styles/header.module.scss";
import Image from "next/image";

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
          <Image src={"/dhl-logo.svg"} alt="DHL Logo" width={136} height={40} />
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
