import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";

import _ from "../styles/home.module.scss";

const ServiceUpdate = () => {
  return (
    <div className={_.update_con}>
      <div>
        <h2>Important Service Updates</h2>
        <div>
          <div className={_.update_card}>
            <div className={_.icon_large}>
              <Image
                height={36}
                width={36}
                src={"/globe-rgb-red.svg"}
                alt="globe"
              ></Image>
            </div>
            <div className={_.msg}>
              <h3>Ukrain Situation Update</h3>
              <p>Read more</p>
            </div>
            <div className={_.icon_small}>
              <FiExternalLink />
            </div>
          </div>
          <div className={_.update_card}>
            <div className={_.icon_large}>
              <Image
                height={36}
                width={36}
                src={"/mobile-phone-rgb-red.svg"}
                alt="phone"
              ></Image>
            </div>
            <div className={_.msg}>
              <h3>SMS Scam Alerts</h3>
              <p>
                Lookout for malware titled &quot;Download Our Application to
                Track Your Parcel&quot;
              </p>
            </div>
            <div className={_.icon_small}>
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdate;
