import { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

import _ from "../styles/tracking.module.scss";

type Data = {
  q: string;
  a: string;
};

const FaqUI = ({ data, i }: { data: Data; i: number }) => {
  const [activeQA, setActiveQA] = useState<number>(-1);
  const toggleQA = (index: number) => {
    setActiveQA((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className={_.qA} key={i}>
      <h3 onClick={() => toggleQA(i)}>
        <span>{data.q}</span>
        <span className={_.chevron}>
          {activeQA === i ? <PiCaretUpBold /> : <PiCaretDownBold />}
        </span>
      </h3>
      {activeQA === i && <p>{data.a}</p>}
    </div>
  );
};

export default FaqUI;
