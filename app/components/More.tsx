import { FiExternalLink } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";

import _ from "../styles/home.module.scss";

const More = () => {
  return (
    <div className={_.more_con}>
      <div className={_.more}>
        <div className={_.col1}>
          <img
            src="/truck-drives-through-forest-0001.jpeg"
            alt="truck-drives-through-forest"
          />
          <div className={_.content}>
            <h4>
              <span>Green Logistics</span>
              <BsChevronRight />
            </h4>
            <p>
              Sustainable business begins with sustainable supply chains. As the
              pioneer of green logistics, we have an unmatched portfolio of
              green logistics solutions. Find out what we have to offer, why
              we&apos;re committed to sustainability, and how our industry is
              helping deliver an even better world.
            </p>
          </div>
        </div>
        <div className={_.col2}>
          <img src="dl-about-us-gci-2022.jpeg" alt="dl-about-us-gci" />
          <div className={_.content}>
            <h4>
              <span>DHL Global Connectedness Index</span>
              <FiExternalLink />
            </h4>
            <p>
              The DHL Global Connectedness Index 2022 Update takes a
              comprehensive, data-driven look at the events of 2022. Find out
              how the world&apos;s trading system recovered from the initial
              pandemic shock, what longlasting vulnerabilities have been
              exposed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
