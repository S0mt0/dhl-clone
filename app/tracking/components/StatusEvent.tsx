import moment from "moment";
import Link from "next/link";

import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { MdDirectionsTransit } from "react-icons/md";

import { TShipment } from "@/sdk";
import { formatLocalTime } from "@/sdk/utils";

import _ from "../styles/tracking.module.scss";

const StatusEvent = ({ status }: { status: TShipment["status"] }) => {
  return (
    <article className={_.status}>
      <div className={_.timestamp}>
        <small>{moment(status.timestamp).format("dddd")}</small>
        <h3>{moment(status.timestamp).format("LL")}</h3>
        <small>{formatLocalTime(status.timestamp)}</small>
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
            <Link href="/checkout">PAY EXTRA COST OF SHIPPING</Link>
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
