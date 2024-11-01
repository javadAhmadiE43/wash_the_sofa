import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import "./globals.css";
import { vazire, yekan } from "./font";

export const metadata: Metadata = {
  title: "مبل شویی اندیشه",
  description: "مبل شویی اندیشه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${yekan.variable} ${vazire.variable} antialiased`}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
