import React from "react";

import SubscriptionForm from "../Forms/SubscriptionForm";

export default function Banner1() {
  return (
    <section className="section bg-primary bg-[url('/img/academy-banner-bg.png')] bg-cover bg-center bg-no-repeat text-white py-18">
      <div className="container">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 leading-1">
            <span className="inline-block w-4 h-4 rounded-full bg-primary" />
            <span>Hot</span>
          </div>

          <h2 className="font-bold text-lg md:text-[2rem] leading-1.5 mb-2">
            Keep up with the market
          </h2>

          <p className="text-sm text-neutral5 md:text-base text-center md:text-left">
            Receive weekly updates on crypto sent to your email
          </p>

          <div className="mt-6 lg:mt-12 lg:max-w-[500px]">
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
