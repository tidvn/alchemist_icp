import React from "react";
import { Button } from "flowbite-react";

const SubscriptionForm = () => {
  return (
    <form className="SubscriptionForm">
      <label
        htmlFor="subscription"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>

      <div className="relative flex flex-col gap-6 items-center sm:block">
        <input
          type="email"
          id="subscription"
          className="block w-full py-5 px-8 text-base text-gray-900 border-2 border-primary rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email address"
          required
        />

        <div className="sm:absolute right-2.5 bottom-2.5">
          <Button
            type="submit"
            className="bg-gradient-2 font-base font-semibold rounded-xl"
          >
            Get Started
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SubscriptionForm;
