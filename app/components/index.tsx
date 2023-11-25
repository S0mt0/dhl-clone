import More from "./More";
import Sections from "./Sections";
import Hero from "./Hero";
import ServiceUpdate from "./service-update";

import _ from "../styles/home.module.scss";

const Index = () => {
  return (
    <div className={_.App__home}>
      <Hero />
      <ServiceUpdate />
      <Sections />
      <More />
    </div>
  );
};

export default Index;
