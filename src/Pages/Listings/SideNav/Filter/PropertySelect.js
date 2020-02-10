import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@material-ui/core";

const options = [
  "All Propertie Types",
  "House",
  "Land",
  "Town House",
  "Apartments & Units"
];

const formControlStyles = {
  minWidth: "140px",
  maxWidth: "300px"
};

const chipContainerStyles = {
  display: "flex",
  flexWrap: "wrap"
};

const chipStyles = {
  margin: "2px"
};

function PropertySelect() {
  const [selected, setselected] = useState(["All Propertie Types"]);
  const handleChange = event => {
    setselected(event.target.value);
  };

  return (
    <>
      <FormControl style={formControlStyles}>
        <InputLabel id="propType">Property Type</InputLabel>
        <Select
          labelId="propType"
          multiple
          value={selected}
          onChange={handleChange}
          renderValue={selects => (
            <div style={chipContainerStyles}>
              {selects.map(value => (
                <Chip
                  key={value}
                  label={value}
                  color="primary"
                  style={chipStyles}
                />
              ))}
            </div>
          )}>
          {options.map(opt => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default PropertySelect;
