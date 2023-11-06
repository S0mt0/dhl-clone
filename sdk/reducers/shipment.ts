import { ShipmentActions, TShipmentAction, ReducerState } from "..";

// WHOLISTIC SHIPMENT REDUCER
export const shipmentReducer = (
  shipState: ReducerState,
  action: TShipmentAction
): ReducerState => {
  const { type, payload } = action;

  switch (type) {
    case ShipmentActions.SET_TRACKING_NUMBER:
      return {
        ...shipState,
        state: {
          ...shipState.state,
          trackingNumber: payload,
        },
      };

    case ShipmentActions.FETCHING_SHIPMENT_DATA:
      return {
        ...shipState,
        state: {
          ...shipState.state,
          error: false,
          loading: true,
          success: false,
        },
      };

    case ShipmentActions.SET_ERROR:
      return {
        ...shipState,
        state: {
          ...shipState.state,
          error: true,
          loading: false,
          success: false,
        },
      };

    case ShipmentActions.SET_UNKNOWN_SHIPMENT:
      return {
        ...shipState,
        state: {
          ...shipState.state,
          unknownShipment: payload,
        },
      };

    case ShipmentActions.SET_SHIPMENT:
      return {
        ...shipState,
        state: {
          ...shipState.state,
          error: false,
          loading: false,
          success: true,
        },
        shipment: payload,
      };

    default:
      return shipState;
  }
};
