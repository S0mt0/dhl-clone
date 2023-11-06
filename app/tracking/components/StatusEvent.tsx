import moment from "moment";
import Link from "next/link";

import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { MdDirectionsTransit } from "react-icons/md";

import { TShipment } from "@/sdk";

import _ from "../styles/tracking.module.scss";

const StatusEvent = ({ status }: { status: TShipment["status"] }) => {
  const time = new Date(status.timestamp);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return (
    <article className={_.status}>
      <div className={_.timestamp}>
        <small>{moment(status.timestamp).format("dddd")}</small>
        <h3>{moment(status.timestamp).format("LL")}</h3>
        <small>{formattedTime} Local time</small>
      </div>
      <div className={_.description}>
        <strong
          style={status.status === "delivered" ? { color: "#67A31D" } : {}}
        >
          {status.description}
        </strong>
        <p>{status.location.address.addressLocality}</p>
        {/*  */}
        {status.status === "seized" && (
          <small>
            To redeem your shipment, kindly{" "}
            <Link href="/payment-policy">read for more details.</Link>
          </small>
        )}
        {/*  */}
        <span>
          {status.status === "delivered" ? (
            <BsFillCheckCircleFill fill="#67A31D" />
          ) : status.status === "seized" ? (
            <BsFillExclamationTriangleFill fill="#d40511" />
          ) : (
            <MdDirectionsTransit fill="#868686" />
          )}
        </span>
        {/*  */}
      </div>
    </article>
  );
};

export default StatusEvent;
