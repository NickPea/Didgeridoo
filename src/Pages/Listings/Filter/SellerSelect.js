import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@material-ui/core";

const sellers = ["All Sellers", "Agent Only", "Private Only"];

const formControlStyles = {
  minWidth: "140px",
  maxWidth: "300px"
};

const chipStyles = {
  margin: "2px"
};

function SellerSelect() {
  const [selected, setselected] = useState("All Sellers");
  const handleChange = event => {
    setselected(event.target.value);
  };

  return (
    <>
      <FormControl style={formControlStyles}>
        <InputLabel id="sellerType">Seller Type</InputLabel>
        <Select
          labelId="sellerType"
          value={selected}
          onChange={handleChange}
          renderValue={selected => (
            <Chip label={selected} color="primary" style={chipStyles} />
          )}>
          {sellers.map(opt => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SellerSelect;
