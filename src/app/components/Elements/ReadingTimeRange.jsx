import React from "react";

import InputRange from "./InputRange";

export default function ReadingTimeRange() {
  const [values, setValues] = React.useState([5, 25]);

  return (
    <InputRange
      min={0}
      max={30}
      step={5}
      values={values}
      onChange={setValues}
      renderMarkLabel={(value) => <span>{value}m</span>}
    />
  );
}
