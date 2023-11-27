"use client";
import Image from "next/image";
import { useState } from "react";
import {
  PiCaretDownBold,
  PiCaretRightBold,
  PiCaretUpBold,
} from "react-icons/pi";

import MobileMenuNav from "./mobileMenuNav";
import TrackFormInput from "../../shared/TrackFormInput";

import _ from "../../../styles/header.module.scss";
import Link from "next/link";

const MobileMenu = ({
  menuIsOpen,
  toggleMenu,
  country,
  countryFlagImgUrl,
}: {
  toggleMenu: () => void;
  menuIsOpen: boolean;
  country: string;
  countryFlagImgUrl?: string;
}) => {
  const [openTab, setOpenTab] = useState<boolean>(true);

  const handleClick = () => setOpenTab((current) => !current);

  return (
    <div className={_.mobile_menu_con}>
      <MobileMenuNav toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      <div className={_.menu_con}>
        <div className={_.inp_con}>
          <div className={_.title}>
            <h3>Track</h3>
             {openTab ? <PiCaretUpBold /> : <PiCaretDownBold />} 
            {/*  <PiCaretRightBold />*/}
          </div>

          {/*  <div className={_.form_inp}>
            <h3>Track your shipment</h3>
            <TrackFormInput toggleMenu={toggleMenu} />
          </div>
           */}

           {openTab && (
            <div className={_.form_inp}>
              <h3>Track your shipment</h3>
              <TrackFormInput toggleMenu={toggleMenu} />
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
            {countryFlagImgUrl && (
              <Image
                alt="flag"
                width={20}
                height={20}
                src={countryFlagImgUrl}
              />
            )}
            {country}
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
