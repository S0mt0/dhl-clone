import "./globals.css";

import { Metadata } from "next";

import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import GlobalPovider from "@/sdk/provider";

// export const metadata: Metadata = {
//   title: '...',
// }

export async function generateMetadata() {
  const IPData = await fetch(" https://ipapi.co/json/").then((response) =>
    response.json()
  );

  return {
    title: `DHLimited Home - Global Logistics and Shipping ${IPData?.country_name}`,
    description:
      "DHLimited is the global leader in the logistics industry. Specializing in international shipping, courier services and transportation.",
    icons: [{ url: "/favicon.png", href: "/favicon.png" }],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalPovider>
          <Header />
          {children}
          <Footer />
        </GlobalPovider>
      </body>
    </html>
  );
}
