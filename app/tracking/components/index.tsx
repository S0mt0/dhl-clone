"use client";
import {
  PiCaretDownBold,
  PiCaretUpBold,
  PiNewspaperFill,
} from "react-icons/pi";
import { VscInfo } from "react-icons/vsc";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import moment from "moment";

import { useFetchShipmentFunc } from "@/sdk";
import { formatLocalTime } from "@/sdk/utils";

import Input from "./Input";
import { faq } from "./FAQ";
import Event from "./Event";
import StatusEvent from "./StatusEvent";
import FaqUI from "./FaqUI";
import PrintButton from "@/app/components/shared/PrintButton";

import _ from "../styles/tracking.module.scss";

const Index = () => {
  const path = useSearchParams();
  const trackingId = path.get("tracking-id")?.trim();

  const { fetchShipment, error, loading, shipment, success, unknownShipment } =
    useFetchShipmentFunc();

  useEffect(() => {
    trackingId && fetchShipment(trackingId);
  }, [trackingId]);

  const [activeTab, setActiveTab] = useState({ a: false, b: false });
  const toggleTab = (tab: "a" | "b") => {
    if (tab === "a") {
      setActiveTab((prev) => ({ ...prev, a: !prev.a }));
    } else if (tab === "b") {
      setActiveTab((prev) => ({ ...prev, b: !prev.b }));
    }
  };

  return (
    <div>
      <div className={_.title}>
        <h2>{!error ? "Track: Express" : "Track & Trace"}</h2>
      </div>
      <div className={_.shipment_details_wrapper}>
        <div className={_.search}>
          <Input />
        </div>
        {loading ? (
          <div className={_.loader}>
            <img src="/loader.svg" alt="please wait..." />
          </div>
        ) : (
          <div className={_.shipment_details_con}>
            {/*  */}
            <div className={_.overview}>
              <div>
                <p> Tracking Code: {shipment.trackingId}</p>
                <p>
                  This shipment is handled by: <span>DHLimited Express</span>
                </p>
              </div>
              <PrintButton />
            </div>
            {/* - */}
            {/* - */}
            <div>status</div>
            {/* - */}
            {/* - */}
            {success && shipment.trackingId && (
              <div className={_.more_shipment_details}>
                <h3 onClick={() => toggleTab("a")}>
                  <span>More Shipment Details</span>
                  <span className={_.chevron}>
                    {activeTab.a ? <PiCaretUpBold /> : <PiCaretDownBold />}
                  </span>
                </h3>
                {activeTab.a && (
                  <div className={_.more_details}>
                    <div className={_.title}>
                      <p className={_.col1}>
                        {shipment.status.status === "delivered"
                          ? "Delivery"
                          : shipment.status.status === "seized"
                          ? "Seizure"
                          : "Status"}{" "}
                        Date / Time
                      </p>
                      <p className={_.col2}>
                        {moment(shipment.status.timestamp).format(
                          "MMMM D, YYYY"
                        )}{" "}
                        {formatLocalTime(shipment.status.timestamp)}
                      </p>
                    </div>
                    {/*  */}
                    <div className={_.row}>
                      <p className={_.col1}>
                        To protect your privacy, more delivery details are
                        available after validation
                      </p>
                      {shipment.status.status === "seized" && (
                        <p className={_.col2}>
                          <Link href={"/checkout"}>
                            <span>Redeem Shipment</span> <PiNewspaperFill />
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* - */}
            {/* - */}
            {success && shipment.trackingId && (
              <div className={_.all_shipment_updates}>
                <h3 onClick={() => toggleTab("b")}>
                  <span>All Shipment Updates</span>
                  <span className={_.chevron}>
                    {activeTab.b ? <PiCaretUpBold /> : <PiCaretDownBold />}
                  </span>
                </h3>
                {activeTab.b && (
                  <div className={_.all_events_con}>
                    <StatusEvent status={shipment.status} />
                    {shipment?.events?.length &&
                      shipment.events.map((event, i) => {
                        return <Event event={event} key={i} />;
                      })}
                  </div>
                )}
              </div>
            )}
            {/* - */}
            {/* - */}
            {error && (
              <div className={_.not_found}>
                <div className={_.info}>
                  <VscInfo />
                </div>
                <div className={_.info_message}>
                  <h4>{unknownShipment}</h4>
                  <p>
                    Sorry, your tracking attempt was not successful. Please
                    check your tracking number.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {!loading && (
        <div className={_.qa_intro}>
          <p>
            If you would prefer to speak to someone personally about the
            location of your shipment, please
            <br />
            <a
              href="mailto:dhlimited.office@gmail.com"
              rel="noreferrer noopener"
            >
              contact DHLimited Express Customer Service
            </a>
          </p>

          <h2>Quick Answers to Common Tracking Questions</h2>
        </div>
      )}

      {!loading && success && (
        <div className={_.more_details_}>
          {faq.faqSuccess.map((data, i) => (
            <FaqUI data={data} i={i} key={i} />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className={_.more_details_}>
          {faq.faqNotFound.map((data, i) => (
            <FaqUI data={data} i={i} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
