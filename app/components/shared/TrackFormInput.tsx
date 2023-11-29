"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useFetchShipmentFunc } from "@/sdk";

import _ from "../../styles/home.module.scss";

const TrackFormInput = ({ toggleMenu }: { toggleMenu?: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const query = useSearchParams().get("tracking-id")?.trim();

  const { handleInputChange, trackingNumber } = useFetchShipmentFunc(query);

  useEffect(() => {
    toggleMenu && toggleMenu();
  }, [toggleMenu, query]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/tracking?tracking-id=${trackingNumber.trim()}`);
        toggleMenu && trackingNumber.trim() === query?.trim() && toggleMenu();
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
