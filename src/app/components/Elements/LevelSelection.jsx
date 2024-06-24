"use client";
import React, { useState } from "react";
import classnames from "classnames";
// import { useParams } from "react-router-dom";

const PlusSvg = (props) => (
  <svg
    {...props}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="#B8B8B8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" width="2" height="12" rx="1" />
    <rect y="7" width="2" height="12" rx="1" transform="rotate(-90 0 7)" />
  </svg>
);

const LevelButton = ({
  level,
  isSelected,
  onSelectLevel,
  className,
  selectedClassName,
}) => {
  return (
    <button
      onClick={onSelectLevel}
      className={classnames(
        "group inline-flex items-center px-6 py-2 gap-2 hover:text-white border border-current focus:ring-0 rounded-lg font-medium leading-1.5",
        className,
        isSelected ? "text-white" : "text-neutral3",
        { [selectedClassName]: isSelected }
      )}
    >
      <span
        className={`inline-block w-3 h-3 rounded-full group-hover:bg-white ${
          !isSelected ? selectedClassName : "bg-white"
        }`}
      />
      <span
        className={`hover:text-white text-neutral3 text-current ${
          !isSelected ? "text-neutral3" : "text-white"
        }`}
      >
        {level}
      </span>
      <PlusSvg
        className={`transition fill-current ${
          isSelected ? "group-hover:rotate-45" : "group-hover:scale-125"
        }`}
      />
    </button>
  );
};

export default function LevelSelection() {
  // const params = useParams();
  const [selected, setSelected] = useState("intermediate");

  return (
    <div className="flex flex-wrap items-center gap-4">
      <LevelButton
        level="Newbie"
        isSelected={selected === "newbie"}
        onSelectLevel={() => setSelected("newbie")}
        className="border-[#12CABF] hover:bg-[#12CABF]"
        selectedClassName="bg-[#12CABF]"
      />

      <LevelButton
        level="Intermediate"
        isSelected={selected === "intermediate"}
        onSelectLevel={() => setSelected("intermediate")}
        className="border-[#F27F16] hover:bg-[#F27F16]"
        selectedClassName="bg-[#F27F16]"
      />

      <LevelButton
        level="Advanced"
        isSelected={selected === "advanced"}
        onSelectLevel={() => setSelected("advanced")}
        className="border-[#F9250F] hover:bg-[#F9250F]"
        selectedClassName="bg-[#F9250F]"
      />
    </div>
  );
}
