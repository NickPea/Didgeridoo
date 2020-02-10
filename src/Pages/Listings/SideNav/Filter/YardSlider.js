import React, { useState } from "react";
import { Typography, Slider } from "@material-ui/core";

const marks = [
  { value: 1 },
  { value: 2, label: "Min." },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9, label: "Max." },
  { value: 10 }
];

function YardSize() {
  const [noBeds, setnoBeds] = useState();
  const handleChange = (event, newValue) => setnoBeds(newValue);
  return (
    <>
      <Typography id="landSize" gutterBottom style={{ textAlign: "center" }}>
        Min. Yard Size (m2):
      </Typography>
      <Slider
        value={noBeds}
        onChange={handleChange}
        aria-labelledby="kitchens-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={value => `${value}+`}
        step={100}
        marks
        min={0}
        max={5000}
        defaultValue={0}
      />
    </>
  );
}

export default YardSize;
