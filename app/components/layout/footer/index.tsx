import * as icons from "react-icons/fa";
import _ from "../../../styles/footer.module.scss";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <footer className={_.footer} id="no-print">
      <div className={_.footer_links}>
        <ul>
          {footerData.map((data, i) => (
            <div key={i}>
              <h3>{data.heading}</h3>
              {data.links.map((link, i) => (
                <li key={i}>
                  <a href="#">
                    <span>{link.title}</span>
                    {typeof link.icon === "function" && <link.icon />}
                  </a>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      {/*  */}
      {/*  */}
      <div className={_.footer_other_links}>
        <div className={_.container_flex}>
          <div className={_.other_links}>
            <div className={_.footer_logo}>
              <picture>
                <img src="/glo-footer-logo.svg" alt="logo" />
              </picture>
            </div>
            <div className={_.links}>
              {[
                "fraud awareness",
                "legal notice",
                "terms of use",
                "privacy notice",
                "dispute resolution",
                "additional information",
              ].map((link, i) => (
                <p key={i}>{link}</p>
              ))}
            </div>
          </div>
          <div className={_.other_links_socials}>
            <h4>follow us</h4>
            <div className={_.social_icons}>
              <span>{<icons.FaYoutube />}</span>
              <span>{<icons.FaFacebookF />}</span>
              <span>{<icons.FaLinkedin />}</span>
              <span>{<icons.FaInstagram />}</span>
            </div>
          </div>
        </div>
        <div className={_.copyright}>
          <p>{new Date().getFullYear()} &copy; - all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
