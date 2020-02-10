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

function LandSlider() {
  const [noBeds, setnoBeds] = useState();
  const handleChange = (event, newValue) => setnoBeds(newValue);
  return (
    <>
      <Typography id="landSize" gutterBottom style={{ textAlign: "center" }}>
        Min Land Size (m2):
      </Typography>
      <Slider
        value={noBeds}
        onChange={handleChange}
        defaultValue={0}
        aria-labelledby="kitchens-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={value => `${value}+`}
        step={100}
        min={0}
        max={100000}
      />
    </>
  );
}

export default LandSlider;
