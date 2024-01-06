import "./globals.css";

import { Metadata } from "next";

import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import GlobalPovider from "@/sdk/provider";

export const metadata: Metadata = {
  title: "DHLShipping Home - Global Logistics and International Shipping.",
  description:
    "DHLShipping is the global leader in the logistics industry. Specializing in international shipping, courier services and transportation.",
  icons: [{ url: "/favicon.png", href: "/favicon.png" }],
};

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
