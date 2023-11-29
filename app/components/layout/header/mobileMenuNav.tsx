import Link from "next/link";

import Image from "next/image";

import _ from "../../../styles/header.module.scss";
import MobileMenuButton from "./menu-btn";

const MobileMenuNav = () => {
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

        <MobileMenuButton />
      </nav>
    </header>
  );
};

export default MobileMenuNav;
