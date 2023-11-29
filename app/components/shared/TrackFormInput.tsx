"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

import { useFetchShipmentFunc, useGlobalProvider } from "@/sdk";

import _ from "../../styles/home.module.scss";

const TrackFormInput = () => {
  const router = useRouter();
  const query = useSearchParams().get("tracking-id")?.trim();
  const pathname = usePathname()

  const { handleInputChange, trackingNumber } = useFetchShipmentFunc(query);

  const {
    mobileMenuStore: { closeMenu },
  } = useGlobalProvider();


  const toggleMenu = ()=>{
   if(pathname.includes(’tracking’)){
     closeMenu()
   }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/tracking?tracking-id=${trackingNumber.trim()}`);
        toggleMenu()
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
