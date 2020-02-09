import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@material-ui/core";

const prices = [
  "$0",
  "$25,000",
  "$50,000",
  "$75,000",
  "$100,000",
  "$125,000",
  "$150,000",
  "$175,000",
  "$200,000",
  "$225,000",
  "$250,000",
  "$275,000",
  "$300,000",
  "$325,000",
  "$350,000",
  "$375,000",
  "$400,000",
  "$425,000",
  "$450,000",
  "$475,000",
  "$500,000",
  "$550,000",
  "$600,000",
  "$650,000",
  "$700,000",
  "$750,000",
  "$800,000",
  "$850,000",
  "$900,000",
  "$950,000",
  "$1,000,000",
  "$1,100,000",
  "$1,200,000",
  "$1,300,000",
  "$1,400,000",
  "$1,500,000",
  "$1,600,000",
  "$1,700,000",
  "$1,800,000",
  "$1,900,000",
  "$2,000,000",
  "$2,250,000",
  "$2,500,000",
  "$2,750,000",
  "$3,000,000",
  "$3,500,000",
  "$4,000,000",
  "$4,500,000",
  "$5,000,000",
  "$6,000,000",
  "$7,000,000",
  "$8,000,000",
  "$9,000,000",
  "$10,000,000",
  "$12,000,000",
  "$15,000,000"
];

const formControlStyles = {
  minWidth: "140px",
  maxWidth: "300px"
};

const chipStyles = {
  margin: "2px"
};

function MaxPriceSelect() {
  const [selected, setselected] = useState(["$1,000,000"]);
  const handleChange = event => {
    setselected(event.target.value);
  };

  return (
    <>
      <FormControl style={formControlStyles}>
        <InputLabel id="maxPrice">Max. Price</InputLabel>
        <Select
          labelId="maxPrice"
          value={selected}
          onChange={handleChange}
          renderValue={selected => (
            <Chip label={selected} color="primary" style={chipStyles} />
          )}>
          {prices.map(opt => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default MaxPriceSelect;
