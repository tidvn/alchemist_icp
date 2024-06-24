import React from "react";
import classnames from "classnames";

const styles = {
  newbie: "bg-[rgba(18,202,191,0.2)] text-[#12CABF]",
  intermediate: "bg-[rgba(242,127,22,0.2)] text-[#F27F16]",
  advanced: "bg-[rgba(249,37,15,0.2)] text-[#F9250F]",
};

const labels = {
  newbie: "Newbie",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export default function TopicLevelLabel({ level }) {
  return (
    <span
      className={classnames(
        "inline-flex border border-current items-center gap-2 px-3 py-[6px] text-xs rounded-lg leading-1",
        styles[level]
      )}
    >
      <span className="inline-block w-2 h-2 rounded-full bg-current"></span>
      <span className="text-neutral1">{labels[level]}</span>
    </span>
  );
}
