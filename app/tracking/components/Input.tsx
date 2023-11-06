"use client";

import { FormEvent } from "react";

import { useFetchShipmentFunc } from "@/sdk";

import _ from "../styles/tracking.module.scss";

const Input = () => {
  const { fetchShipment, handleInputChange, trackingNumber } =
    useFetchShipmentFunc();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchShipment(trackingNumber);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={_.form} id="no-print">
      <input
        type="text"
        placeholder="Enter your tracking number(s)"
        autoComplete="on"
        value={trackingNumber}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button type="submit" disabled={!trackingNumber?.trim()}>
        track
      </button>
    </form>
  );
};

export default Input;
