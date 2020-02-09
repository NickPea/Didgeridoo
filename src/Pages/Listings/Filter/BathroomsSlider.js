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

function BathroomsSlider() {
  const [noBeds, setnoBeds] = useState([1, 10]);
  const handleChange = (event, newValue) => setnoBeds(newValue);
  return (
    <>
      <Typography id="noBathrooms" gutterBottom>
        Bathrooms:
      </Typography>
      <Slider
        value={noBeds}
        onChange={handleChange}
        defaultValue={3}
        aria-labelledby="bathrooms-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={10}
      />
    </>
  );
}

export default BathroomsSlider;
