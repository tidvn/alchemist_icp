import Header from "@/components/Layout/Header";
import { Footer } from "@/components/footer/Footer";
import React from "react";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <title>The Alchemist - Home</title>
      <Header />
      <section className="mt-16">
        <div>{children}</div>
        <Footer />
      </section>
    </div>
  );
}
