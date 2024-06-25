import React from "react";
import classnames from "classnames";

const LogoItems = ({ className, props }) => (
  <div
    {...props}
    className={classnames("flex items-center leading-1", className)}
  >
    <img
      src="/img/logo-circle-white.svg"
      width="28"
      height="28"
      className="mr-2"
      alt="The Alchemist"
    />
    <span className="text-base font-semibold whitespace-nowrap text-white">
      The Alchemist
    </span>
  </div>
);

export default function MainListLogo() {
  return (
    <section className="section bg-primary py-[10px]">
      <div className="container">
        <div className="marquee flex items-center justify-center md:justify-between gap-4">
          <LogoItems />

          <LogoItems className="hidden md:block" />

          <LogoItems className="hidden md:block" />

          <LogoItems className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
