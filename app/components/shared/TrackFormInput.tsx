"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useFetchShipmentFunc } from "@/sdk";

import _ from "../../styles/home.module.scss";

const TrackFormInput = () => {
  const router = useRouter();
  const query = useSearchParams().get("tracking-id")?.trim();

  const { handleInputChange, trackingNumber } = useFetchShipmentFunc(query);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/tracking?tracking-id=${trackingNumber.trim()}`);
      }}
      className={_.form}
    >
      <input
        type="text"
        placeholder="Enter your tracking number(s)"
        value={trackingNumber}
        onChange={(e) => handleInputChange(e.target.value)}
        name="tracking-number"
        id="tracking-number"
        autoComplete="on"
      />
      <button type="submit" disabled={!trackingNumber.trim()}>
        track
      </button>
    </form>
  );
};

export default TrackFormInput;
