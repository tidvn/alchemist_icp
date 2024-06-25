"use client";
import Header from "@/app/components/Layout/Header";
import { Footer } from "@/app/components/footer/Footer";
import React from "react";

export default function AITradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <title>SeerBOT - AI Trade</title>
      <Header />
      <section className="mt-20">
        <div>{children}</div>
        <Footer />
      </section>
    </div>
  );
}
