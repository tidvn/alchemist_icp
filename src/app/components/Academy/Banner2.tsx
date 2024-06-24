import React from "react";
import { Button } from "flowbite-react";

export default function Banner2() {
  return (
    <section className="section bg-primary bg-[url('/img/academy-banner-bg.png')] bg-cover bg-center bg-no-repeat text-white py-18">
      <div className="container">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start text-xs text-neutral5 md:text-base text-center md:text-left">
            <p className="w-[12px] h-[12px] rounded-full bg-primary" />
            <p className="ml-2">Hot</p>
          </div>

          <h2 className="font-bold text-lg text-white leading-1.5 px-3 md:px-0 mb-2 md:text-[32px] text-center md:text-left">
            Feeling overwhelmed by the vastness of knowledge?
          </h2>

          <p className="text-xs text-neutral5 mb-8 md:text-base text-center md:text-left">
            Not to worry. We are here to assist you in navigating the exciting
            realm of cryptocurrency with confidence.
          </p>

          <div className="text-center md:text-left">
            <Button pill>Start learning</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
