import { BiSolidPlaneLand } from "react-icons/bi";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaHandHoldingWater, FaTruckMoving } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { GiCargoShip } from "react-icons/gi";
import { TbTrain } from "react-icons/tb";

export const sectionData = {
  row: {
    heading: "Document and Parcel Shipping",
    subHeading: "For All Shippers",
    paragraph:
      "Learn about DHL Express-the undisputed global leader in international express shipping.",
    sectionImage: "/woman-signs-for-package-0002.jpeg",
    buttonText: "Explore DHL Express",
    services: [
      {
        imgUrl: BiSolidPlaneLand,
        Text: "Next Possible Business Day",
      },
      {
        imgUrl: MdAddBusiness,
        Text: "Tailored Business Solutions",
      },
      {
        imgUrl: RiHomeOfficeFill,
        Text: "Flexible Import/Export Options",
      },
      {
        imgUrl: FaHandHoldingWater,
        Text: "Wide Variety of Optional Services",
      },
    ],
    className: "",
  },
  row_reverse: {
    heading: "Cargo Shipping",
    subHeading: "Business Only",
    paragraph:
      "Discover shipping and logistics service options from DHL Global Forwarding.",
    sectionImage: "/workers-at-the-container-port-0001.jpeg",
    buttonText: "Explore DHL Global Forwarding",
    services: [
      { imgUrl: BiSolidPlaneLand, Text: "Air Freight" },
      { imgUrl: GiCargoShip, Text: "Ocean Freight" },
      { imgUrl: FaTruckMoving, Text: "Road Freight" },
      { imgUrl: TbTrain, Text: "Rail Freight" },
    ],
    className: "row_reverse",
  },
};
