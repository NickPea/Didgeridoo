import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@material-ui/core";

const locations = [
  "All Location Types",
  "Suburbian",
  "City",
  "Coastal",
  "Waterfront",
  "Acerage",
  "Rural",
  "Mountains"
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

function LocationType() {
  const [selected, setselected] = useState(["All Location Types"]);
  const handleChange = event => {
    setselected(event.target.value);
  };

  return (
    <>
      <FormControl style={formControlStyles}>
        <InputLabel id="locationType">Location Type</InputLabel>
        <Select
          labelId="locationType"
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
          {locations.map(opt => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default LocationType;
