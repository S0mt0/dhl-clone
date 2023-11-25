import _ from "../styles/home.module.scss";
import { sectionData } from "./data";

const Sections = () => {
  const altText = sectionData.row.sectionImage.split(".")[0].split("/")[1];

  return (
    <section className={_.section}>
      <div className={_.section_flex}>
        <div className={_.desc_con}>
          <div className={_.head}>
            <h2>{sectionData.row.heading}</h2>
            <h3>{sectionData.row.subHeading}</h3>
            <p>{sectionData.row.paragraph}</p>
          </div>

          <div className={_.services_con}>
            <h4>Services Available</h4>
            <div className={_.services}>
              {sectionData.row.services.map((service, i) => {
                const altText =
                  typeof service.imgUrl === "string"
                    ? sectionData.row.sectionImage.split(".")[0].split("/")[1]
                    : "";

                const showIcon = () => {
                  if (typeof service.imgUrl === "string") {
                    return <img src={service.imgUrl} alt={altText} />;
                  } else if (typeof service.imgUrl === "function") {
                    return <service.imgUrl />;
                  } else "";
                };

                return (
                  <div key={i}>
                    <span>{showIcon()}</span>
                    <p>{service.Text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={_.cta}>
            <button>{sectionData.row.buttonText}</button>
          </div>
        </div>
        <div className={_.img_con}>
          <img src={sectionData.row.sectionImage} alt={altText} />
        </div>
      </div>

      <div className={_.section_flex}>
        <div className={_.img_con}>
          <img src={sectionData.row_reverse.sectionImage} alt={altText} />
        </div>
        <div className={_.desc_con}>
          <div className={_.head}>
            <h2>{sectionData.row_reverse.heading}</h2>
            <h3>{sectionData.row_reverse.subHeading}</h3>
            <p>{sectionData.row_reverse.paragraph}</p>
          </div>

          <div className={_.services_con}>
            <h4>Services Available</h4>
            <div className={_.services}>
              {sectionData.row_reverse.services.map((service, i) => {
                const altText =
                  typeof service.imgUrl === "string"
                    ? sectionData.row_reverse.sectionImage
                        .split(".")[0]
                        .split("/")[1]
                    : "";

                const showIcon = () => {
                  if (typeof service.imgUrl === "string") {
                    return <img src={service.imgUrl} alt={altText} />;
                  } else if (typeof service.imgUrl === "function") {
                    return <service.imgUrl />;
                  } else "";
                };

                return (
                  <div key={i}>
                    <span>{showIcon()}</span>
                    <p>{service.Text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={_.cta}>
            <button>{sectionData.row_reverse.buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
