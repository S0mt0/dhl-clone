"use client";
import { BsFillPrinterFill } from "react-icons/bs";

const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      id="no-print"
      className="printBtn"
    >
      <span>Print</span>
      <BsFillPrinterFill />
    </button>
  );
};

export default PrintButton;
