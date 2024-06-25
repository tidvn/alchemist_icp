import React from "react";
import classnames from "classnames";

const LogoItems = ({ className, props }) => (
  <div
    {...props}
    className={classnames("flex items-center leading-1", className)}
  >
    <img
      src="/logo.svg"
      width="150"
      height="60"
      className="mr-2 text-white"
      alt="SeerBOT"
    />
    {/* <span className="text-base font-semibold whitespace-nowrap text-white">
      The Alchemist
    </span> */}
  </div>
);

export default function MainListLogo() {
  return (
    <section className="sectionpy-[10px]">
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
