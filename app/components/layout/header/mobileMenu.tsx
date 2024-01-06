"use client";
import { FlagIcon, type FlagIconCode } from "react-flag-kit";
import { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import Link from "next/link";

import MobileMenuNav from "./mobileMenuNav";
import TrackFormInput from "../../shared/TrackFormInput";

import { useGlobalProvider } from "@/sdk";
import _ from "../../../styles/header.module.scss";

const MobileMenu = ({
  country,
  countryISOCode,
}: {
  country: string;
  countryISOCode?: FlagIconCode;
}) => {
  const [openTab, setOpenTab] = useState<boolean>(true);
  const handleClick = () => setOpenTab((current) => !current);

  const {
    mobileMenuStore: { closeMenu, isMobileMenuOpen },
  } = useGlobalProvider();

  return (
    <>
      {isMobileMenuOpen ? (
        <div className={_.mobile_menu_con}>
          <MobileMenuNav />
          <div className={_.menu_con}>
            <div className={_.inp_con}>
              <div className={_.title} onClick={handleClick}>
                <h3>Track</h3>
                {openTab ? <PiCaretUpBold /> : <PiCaretDownBold />}
              </div>

              {openTab && (
                <div className={_.form_inp}>
                  <h3>Track your shipment</h3>
                  <TrackFormInput />
                </div>
              )}
            </div>

            {/*  */}
            {/*  */}
            <div className={_.cs}>
              <a
                href="mailto:DHLShipping.office@gmail.com"
                rel="noreferrer noopener"
                onClick={closeMenu}
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
