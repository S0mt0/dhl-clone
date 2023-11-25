"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import MobileMenuNav from "./mobileMenuNav";

import _ from "../../../styles/header.module.scss";

const MobileMenu = ({
  menuIsOpen,
  toggleMenu,
}: {
  toggleMenu: () => void;
  menuIsOpen: boolean;
}) => {
  return (
    <div className={_.mobile_menu_con}>
      <MobileMenuNav toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      <div>mobile menu</div>
    </div>
  );
};

export default MobileMenu;
