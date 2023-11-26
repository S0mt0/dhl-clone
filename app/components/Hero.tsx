import _ from "../styles/home.module.scss";
import TrackFormInput from "./shared/TrackFormInput";

const Hero = () => {
  return (
    <div className={_.App__hero}>
      <div className={_.App__hero_content}>
        <div className={_.hero_inp_container}>
          <h2>track your shipment</h2>
          <TrackFormInput />
        </div>
        <div className={_.hero_quicklinks}>
          <div>
            <div className={_.quicklink_image}>
              <img src="/glo-core-online.svg" alt="" />
            </div>
            <div className={_.quicklink_text}>
              <h3>ship now</h3>
              <p>Find the right service</p>
            </div>
          </div>
          <div>
            <div className={_.quicklink_image}>
              <img src="/glo-core-getaquote.svg" alt="" />
            </div>
            <div className={_.quicklink_text}>
              <h3>get a quote</h3>
              <p>Estimate cost to share and compare</p>
            </div>
          </div>
          <div>
            <div className={_.quicklink_image}>
              <img src="/glo-core-gogreen-warehousing.svg" alt="" />
            </div>
            <div className={_.quicklink_text}>
              <h3>DHL for business</h3>
              <p>
                Shipping regulaly? Request a business account and profit from
                exclusive benefits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
