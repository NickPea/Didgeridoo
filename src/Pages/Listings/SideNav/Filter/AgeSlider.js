import React, { useState } from "react";
import { Typography, Slider } from "@material-ui/core";

const marks = [
  { value: 10 },
  { value: 20, label: "Min." },
  { value: 30 },
  { value: 40 },
  { value: 50 },
  { value: 60 },
  { value: 70 },
  { value: 80 },
  { value: 90, label: "Max." },
  { value: 100 }
];

function AgeSlider() {
  const [noBeds, setnoBeds] = useState([0, 100]);
  const handleChange = (event, newValue) => setnoBeds(newValue);
  return (
    <>
      <Typography id="landSize" gutterBottom style={{ textAlign: "center" }}>
        Age (years):
      </Typography>
      <Slider
        value={noBeds}
        onChange={handleChange}
        aria-labelledby="age-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={value => (value === 100 ? `${value}+` : `${value}`)}
        step={5}
        marks
      />
    </>
  );
}

export default AgeSlider;
