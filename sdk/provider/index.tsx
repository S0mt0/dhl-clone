"use client";

import { useReducer, ReactNode, useState, useEffect } from "react";
import { GlobalContext } from "./context";
import { ReducerInitState, TGlobalContext, shipmentReducer } from "..";

const GlobalPovider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [shipment, shipmentDispatch] = useReducer(
    shipmentReducer,
    ReducerInitState
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const openMenu = () => setIsMobileMenuOpen(true);

  const value: TGlobalContext = {
    shipmentStore: {
      ...shipment,
      actions: {
        shipDispatch: shipmentDispatch,
      },
    },

    mobileMenuStore: {
      isMobileMenuOpen,
      closeMenu,
      openMenu,
    },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalPovider;
