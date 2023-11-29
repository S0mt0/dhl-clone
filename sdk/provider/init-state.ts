import { TGlobalContext, shipInit } from "..";

export const GlobalInitState: TGlobalContext = {
  shipmentStore: {
    state: {
      loading: false,
      success: false,
      error: false,
      trackingNumber: "",
      unknownShipment: "",
    },
    shipment: shipInit,
    actions: {
      shipDispatch: () => {},
    },
  },

  mobileMenuStore: {
    isMobileMenuOpen: false,
    closeMenu: () => null,
    openMenu: () => null,
  },
};
