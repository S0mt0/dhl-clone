"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useGlobalProvider } from "@/sdk";

import _ from "../../../styles/header.module.scss";

const MobileMenuButton = () => {
  const {
    mobileMenuStore: { closeMenu, isMobileMenuOpen, openMenu },
  } = useGlobalProvider();

  return (
    <div className={_.menu_btn}>
      {isMobileMenuOpen ? (
        <MdClose onClick={closeMenu} />
      ) : (
        <GiHamburgerMenu onClick={openMenu} />
      )}
    </div>
  );
};

export default MobileMenuButton;
