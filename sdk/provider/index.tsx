"use client";

import { useReducer, ReactNode } from "react";
import { GlobalContext } from "./context";
import { ReducerInitState, TGlobalContext, shipmentReducer } from "..";

const GlobalPovider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [shipment, shipmentDispatch] = useReducer(
    shipmentReducer,
    ReducerInitState
  );

  const value: TGlobalContext = {
    shipmentStore: {
      ...shipment,
      actions: {
        shipDispatch: shipmentDispatch,
      },
    },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalPovider;
