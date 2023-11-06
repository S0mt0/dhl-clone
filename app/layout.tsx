import "./globals.css";

import type { Metadata } from "next";

import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import GlobalPovider from "@/sdk/provider";

export const metadata: Metadata = {
  title: "DHLimited Home - Global Logistics and Shipping Nigeria",
  description:
    "DHLimited is the global leader in the logistics industry. Specializing in international shipping, courier services and transportation.",
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
