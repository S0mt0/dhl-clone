import { ChangeEvent, FormEvent, useContext, useState, useEffect } from "react";

import { GlobalContext } from "../provider/context";
import {
  APISingleShipResponse,
  CardDetails,
  ShipmentActions,
  shipInit,
} from "..";

import axios from "axios";

// -------------------------Global Context Provider-------------------------
export const useGlobalProvider = () => useContext(GlobalContext);

// -------------------------------------------------------------------------

export const useFetchShipmentFunc = (query?: string) => {
  const {
    shipmentStore: {
      state: { error, loading, success, trackingNumber, unknownShipment },
      actions: { shipDispatch },
      shipment,
    },
    mobileMenuStore: { closeMenu },
  } = useGlobalProvider();

  useEffect(() => {
    if (query) {
      shipDispatch({
        type: ShipmentActions.SET_TRACKING_NUMBER,
        payload: query,
      });
    }
  }, [query, shipDispatch]);

  const fetchShipment = async (trackingId: string) => {
    shipDispatch({ type: ShipmentActions.FETCHING_SHIPMENT_DATA });

    try {
      const { data } = await axios.get(
        `https://dashboard-01-server-4fd151ce1921.herokuapp.com/api/v1/shipment/tracking?trackingId=${trackingId}`
      );

      const {} = data.data;

      shipDispatch({
        type: ShipmentActions.SET_SHIPMENT,
        payload: data?.data?.shipment,
      });
    } catch (error: any) {
      console.log(error?.response?.data);

      shipDispatch({
        type: ShipmentActions.SET_UNKNOWN_SHIPMENT,
        payload: error?.response?.data?.data?.trackingId,
      });

      shipDispatch({
        type: ShipmentActions.SET_SHIPMENT,
        payload: shipInit,
      });

      shipDispatch({ type: ShipmentActions.SET_ERROR });
    } finally {
      closeMenu();
    }
  };

  const handleInputChange = (input: string) => {
    shipDispatch({
      type: ShipmentActions.SET_TRACKING_NUMBER,
      payload: input,
    });
  };

  return {
    fetchShipment,
    shipment,
    error,
    success,
    loading,
    shipDispatch,
    trackingNumber,
    handleInputChange,
    unknownShipment,
  };
};

export const useCheckoutFormData = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const {
    shipmentStore: {
      shipment: { trackingId },
    },
  } = useGlobalProvider();

  const init: CardDetails = {
    cardName: "",
    cardNumber: "",
    country: "",
    cvv: "",
    expMonth: "",
    expYear: "",
    trackingId,
  };
  const [form, setForm] = useState<CardDetails>(init);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.persist();
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const setInputOnlyIfTypeIsNumber = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;

    const regEx = /^\d+$/;

    if (regEx.test(value) || value === "") {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const canSubmit = Object.values(form).every((field) => field.trim() !== "");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await axios.post(
        "https://dashboard-01-server-4fd151ce1921.herokuapp.com/api/v1/checkout",
        form
      );

      setIsSubmitting(false);
      setForm(init);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 8000);
    } catch (error: any) {
      setIsSubmitting(false);
      setSuccess(false);
      console.log(error);
    }
  };

  return {
    form,
    isSubmitting,
    handleSubmit,
    handleChange,
    setInputOnlyIfTypeIsNumber,
    success,
    canSubmit,
  };
};
