"use client";
import Link from "next/link";
import { countries } from "countries-list";
import { useState, useEffect } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import Image from "next/image";

import { useCheckoutFormData, useGlobalProvider } from "@/sdk";

import _ from "../styles/checkout.module.scss";

const CheckoutUI = () => {
  const [isMounted, setIsMounted] = useState(false);

  const {
    shipmentStore: { shipment },
  } = useGlobalProvider();

  const {
    form,
    handleChange,
    handleSubmit,
    isSubmitting,
    success,
    setInputOnlyIfTypeIsNumber,
    canSubmit,
  } = useCheckoutFormData();

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // List of all countries
  const countriesOptions = Object.values(countries).map(
    (country) => country.name
  );

  const buttonText = () => {
    if (isSubmitting) {
      return "Please wait...";
    } else if (success) {
      return "Payment successful";
    }

    return "Make Payment";
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={_.container}>
      <div className={_.overview_con}>
        <h3>Shipment Overview</h3>
        <div className={_.overview}>
          <p>
            <strong>Shipment:</strong>{" "}
            <span
              style={!shipment.trackingId ? { fontFamily: "monospace" } : {}}
            >
              {shipment.trackingId || "Unavailable"}
            </span>
          </p>
          <p>
            <strong>Location:</strong>{" "}
            <span
              style={!shipment.trackingId ? { fontFamily: "monospace" } : {}}
            >
              {shipment.status.location.address.addressLocality ||
                "Unavailable"}
            </span>
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              style={!shipment.trackingId ? { fontFamily: "monospace" } : {}}
            >
              {shipment.trackingId ? shipment.status.status : "Unavailable"}
            </span>
          </p>
          {shipment.status.status === "seized" && (
            <p>
              <strong>Fee:</strong>{" "}
              <span
                style={!shipment.trackingId ? { fontFamily: "monospace" } : {}}
              >
                $ {shipment.status?.bill?.toLocaleString()}
              </span>
            </p>
          )}
        </div>
      </div>
      <div className={_.checkout}>
        <div className={_.cards}>
          <div>
            <FaRegCreditCard />
            Credit or debit
          </div>
          <div>
            <Image
              src={"/discover.png"}
              alt="Discover Brand Logo"
              width={60}
              height={20}
            />
            <Image
              src={"/mastercard.png"}
              alt="Mastercard Brand Logo"
              width={60}
              height={20}
            />
            <Image
              src={"/visa.png"}
              alt="Visa Brand Logo"
              width={60}
              height={20}
            />
          </div>
        </div>
        <div className={_.info}>
          <form className={_.form} onSubmit={(e) => handleSubmit(e)}>
            <p>
              <input
                type="text"
                placeholder="Card number"
                value={form.cardNumber}
                onChange={(e) => setInputOnlyIfTypeIsNumber(e)}
                name="cardNumber"
              />
            </p>
            <div className={_.flex}>
              <p className={_.cardT}>
                <input
                  type="text"
                  name="expMonth"
                  placeholder="MM"
                  value={form.expMonth}
                  onChange={(e) => setInputOnlyIfTypeIsNumber(e)}
                  maxLength={2}
                />
                /
                <input
                  type="text"
                  name="expYear"
                  placeholder="YY"
                  value={form.expYear}
                  onChange={(e) => setInputOnlyIfTypeIsNumber(e)}
                  maxLength={2}
                />
              </p>
              <p>
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={form.cvv}
                  onChange={(e) => setInputOnlyIfTypeIsNumber(e)}
                  maxLength={3}
                />
              </p>
            </div>
            <p>
              <input
                type="text"
                name="cardName"
                placeholder="Name on card"
                value={form.cardName}
                onChange={(e) => handleChange(e)}
              />
            </p>
            <p>
              <select
                onChange={(e) => handleChange(e)}
                aria-label="Select your country"
                required
                value={form.country}
                name="country"
                id="country"
              >
                <option value={""}>Select country</option>
                {countriesOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </p>
            <p>
              {/* unused and uncontrolled input*/}
              <input type="text" placeholder="Postal code" />
            </p>
            <div className={_.total}>
              <strong>Total</strong>
              {shipment.trackingId && shipment.status.status === "seized" ? (
                <p>
                  <small>USD</small>
                  <span>$ {shipment.status?.bill?.toLocaleString()}</span>
                </p>
              ) : (
                <p
                  style={
                    !shipment.trackingId ? { fontFamily: "monospace" } : {}
                  }
                >
                  Unavailable
                </p>
              )}
            </div>
            <div className={_.submit}>
              <button
                type="submit"
                disabled={isSubmitting ? isSubmitting : !canSubmit}
              >
                {buttonText()}
              </button>
            </div>
          </form>
          {/*  */}
          <div className={_.disclaimer}>
            <p>
              By utilizing DHLimited&apos;s logistics services, you acknowledge
              and expressly agree to adhere to the{" "}
              <Link href={"/payment-policy"}>terms and conditions</Link>{" "}
              regarding shipment seizure, customs clearance, and associated
              payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutUI;
