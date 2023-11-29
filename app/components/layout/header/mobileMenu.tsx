"use client";
import { FlagIcon, type FlagIconCode } from "react-flag-kit";
import { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

import MobileMenuNav from "./mobileMenuNav";
import TrackFormInput from "../../shared/TrackFormInput";

import Link from "next/link";
import _ from "../../../styles/header.module.scss";

const MobileMenu = ({
  menuIsOpen,
  toggleMenu,
  country,
  countryISOCode,
}: {
  toggleMenu: () => void;
  menuIsOpen: boolean;
  country: string;
  countryISOCode?: FlagIconCode;
}) => {
  const [openTab, setOpenTab] = useState<boolean>(false);
  const handleClick = () => setOpenTab((current) => !current);

  return (
    <div className={_.mobile_menu_con}>
      <MobileMenuNav toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      <div className={_.menu_con}>
        <div className={_.inp_con}>
          <div className={_.title} onClick={handleClick}>
            <h3>Track</h3>
            {openTab ? <PiCaretUpBold /> : <PiCaretDownBold />}
          </div>

          {openTab && (
            <div className={_.form_inp}>
              <h3>Track your shipment</h3>
              {/* <TrackFormInput toggleMenu={toggleMenu} /> */}
            </div>
          )}
        </div>

        {/*  */}
        {/*  */}
        <div className={_.cs}>
          <a
            href="mailto:dhlimited.office@gmail.com"
            rel="noreferrer noopener"
            onClick={toggleMenu}
          >
            Customer Service
          </a>
        </div>

        {/*  */}
        {/*  */}
        {country && (
          <div className={_.country}>
            {countryISOCode && <FlagIcon code={countryISOCode} size={14} />}
            {country}&nbsp;({countryISOCode})
          </div>
        )}

        {/*  */}
        {/*  */}
        <div className={_.cs}>
          <Link href="/payment-policy" onClick={toggleMenu}>
            <small style={{ color: "grey" }}>Terms and Policies</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
