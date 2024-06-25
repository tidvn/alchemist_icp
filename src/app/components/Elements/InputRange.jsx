import React from "react";
import { Range, getTrackBackground } from "react-range";

const noop = () => {};

export default function InputRange({
  step = 10,
  min = 0,
  max = 100,
  values = [0],
  onChange = noop,
  renderMarkLabel = noop,
  ...rest
}) {
  return (
    <div className="InputRange flex justify-center flex-wrap">
      <Range
        {...rest}
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        renderMark={({ props, index }) => (
          <div
            {...props}
            className="InputRange__mark flex items-center justify-center"
            style={{
              ...props.style,
              height: "16px",
              width: "2px",
              background:
                "linear-gradient(40.34deg, #000D88 -24.29%, #000E8E 18.78%, #000960 59.93%, #000000 104.82%)",
            }}
          >
            <span className="InputRange__mark__label absolute top-full text-xs mt-1">
              {renderMarkLabel(index * step, index)}
            </span>
          </div>
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="InputRange__track"
            style={{
              ...props.style,
              height: "1rem",
              width: "100%",
              display: "flex",
            }}
          >
            <div
              ref={props.ref}
              className="InputRange__track__background"
              style={{
                height: "8px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#d0d0d2", "#000d88", "#d0d0d2"],
                  min,
                  max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <button
            {...props}
            className="InputRange__thumb p-0 m-0 border-0 focus:ring-8"
            style={{
              ...props.style,
              height: "1rem",
              width: "1rem",
              borderRadius: "1rem",
              backgroundColor: "#1a64f0",
            }}
          ></button>
        )}
      />
    </div>
  );
}
