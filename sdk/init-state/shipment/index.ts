import { ReducerState, TShipment } from "@/sdk";

export const shipInit: TShipment = {
  trackingId: "",

  origin: {
    address: {
      addressLocality: "",
      label: "",
    },
  },

  destination: {
    address: {
      addressLocality: "",
      label: "",
    },
  },

  status: {
    timestamp: "",

    location: {
      address: {
        addressLocality: "",
      },
    },

    status: "pending",

    description: "",

    bill: 0,
  },

  events: [],
};

export const ReducerInitState: ReducerState = {
  state: {
    loading: false,
    success: false,
    error: false,
    trackingNumber: "",
    unknownShipment: "",
  },

  shipment: shipInit,
};
