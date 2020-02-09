import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup
} from "@material-ui/core";

function OutdoorFeatures() {
  const [checkState, setcheckState] = useState({
    isFenced: false,
    isGarage: false,
    isCarport: false,
    isDeck: false,
    isShed: false,
    isPool: false,
    isSpa: false,
    isOutdoorArea: false,
    isTennisCourt: false
  });
  const handleChecked = name => event => {
    setcheckState({ ...checkState, [name]: event.target.checked });
  };
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Outdoor Features</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isGarage}
                onChange={handleChecked("isGarage")}
                value="isGarage"
                color="primary"
              />
            }
            label="Garage"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isCarport}
                onChange={handleChecked("isCarport")}
                value="isCarport"
                color="primary"
              />
            }
            label="Carport"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isFenced}
                onChange={handleChecked("isFenced")}
                value="isFenced"
                color="primary"
              />
            }
            label="Fenced"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isDeck}
                onChange={handleChecked("isDeck")}
                value="isDeck"
                color="primary"
              />
            }
            label="Deck"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isShed}
                onChange={handleChecked("isShed")}
                value="isShed"
                color="primary"
              />
            }
            label="Shed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isOutdoorArea}
                onChange={handleChecked("isOutdoorArea")}
                value="isOutdoorArea"
                color="primary"
              />
            }
            label="Outdoor Area"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isPool}
                onChange={handleChecked("isPool")}
                value="isPool"
                color="primary"
              />
            }
            label="Pool"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isSpa}
                onChange={handleChecked("isSpa")}
                value="isSpa"
                color="primary"
              />
            }
            label="Spa"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkState.isTennisCourt}
                onChange={handleChecked("isTennisCourt")}
                value="isTennisCourt"
                color="primary"
              />
            }
            label="Tennis Court"
          />
        </FormGroup>
      </FormControl>
    </>
  );
}

export default OutdoorFeatures;
