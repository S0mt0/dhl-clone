import { FiExternalLink, FiSearch } from "react-icons/fi";
import { BsChevronDown, BsGlobe2 } from "react-icons/bs";

import axios from "axios";

import _ from "../../../styles/header.module.scss";
import Link from "next/link";

const Header = async () => {
  // const { data } = await axios.get(" https://ipapi.co/json/");

  return (
    <header className={_.Header} id="no-print">
      <nav>
        <Link href="/" title="DHL Logo">
          <img src={"/dhl-logo.svg"} alt="DHL Logo" />
        </Link>

        <ul>
          <li>
            <a href="#">
              <span>Find a Location</span>
              <FiExternalLink />
            </a>
          </li>
          <li>
            <a href="#">
              <FiSearch />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsGlobe2 />
              <span>Nigeria</span>
              {/* <span>{data.country_name}</span> */}
            </a>
          </li>
        </ul>
      </nav>
      <div className={_.sub_nav}>
        <ul>
          <li>
            <a href="#">
              <span>Track</span>
              <BsChevronDown />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Track</span>
              <BsChevronDown />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Customer Service</span>
            </a>
          </li>
        </ul>
        <a href="#">
          <span>Customer Portal Logins</span>
          <BsChevronDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
