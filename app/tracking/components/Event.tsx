import moment from "moment";

import { TEvent } from "@/sdk";
import { RiTriangleLine } from "react-icons/ri";

import { formatLocalTime } from "@/sdk/utils";

import _ from "../styles/tracking.module.scss";

const Event = ({ event }: { event: TEvent }) => (
  <article className={_.event}>
    <div className={_.timestamp}>
      <small>{moment(event.timestamp).format("dddd")}</small>
      <h3>{moment(event.timestamp).format("LL")}</h3>
      <small>{formatLocalTime(event.timestamp)} </small>
    </div>

    <div className={_.description}>
      <strong>{event.description}</strong>
      <p>{event.location.address.addressLocality}</p>
      <span>
        <RiTriangleLine />
      </span>
    </div>
  </article>
);

export default Event;
