import Link from "next/link";

import { PolicyLists } from "./data";
import PrintButton from "@/app/components/shared/PrintButton";

import _ from "../style/policy.module.scss";

const Index = () => {
  return (
    <div className={_.policy_con}>
      <div className={_.print}>
        <PrintButton />
      </div>
      {/*  */}
      <div className={_.payment_policies}>
        <h2>Shipment Seizure and Customs Clearance Policy</h2>
        <div className={_.policies}>
          <ol>
            {PolicyLists.map((policy, i) => (
              <div key={i}>
                <li className={_.title}>{policy.title}:</li>
                <ul>
                  {policy.lists.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ol>
        </div>
        {/*  */}
        <div className={_.consent}>
          <p>
            By utilizing DHLimited&apos;s logistics services, you acknowledge
            and expressly agree to adhere to these terms and conditions
            regarding shipment seizure, customs clearance, and associated
            payments. Please do not hesitate to contact our dedicated{" "}
            <a
              href="mailto:dhlimited.office@gmail.com"
              rel="noreferrer noopener"
            >
              customer service
            </a>{" "}
            team for any further inquiries or assistance related to customs
            procedures.
          </p>
          <br />
          <p>
            If your shipment has been seized, you can redeem it{" "}
            <Link href={"/checkout"} style={{ fontWeight: "bolder" }}>
              here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
