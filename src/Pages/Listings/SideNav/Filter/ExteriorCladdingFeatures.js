import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const exPanStyle = {
  backgroundColor: "darkgrey",
  border: "none",
  boxShadow: "none"
};
const exPanSumStyle = {
  backgroundColor: "lightgrey",
  borderRadius: "5px 5px 0 0"
};
const exPanDetStyle = {
  backgroundColor: "white",
  border: "none",
  boxShadow: "none"
};

function ExteriorCladdingFeatures() {
  const [checkState, setcheckState] = useState({
    isFurnished: false,
    isBuiltIns: false,
    isEnsuite: false,
    isStudy: false,
    isGamesRoom: false,
    isFireplace: false,
    isGym: false,
    isCellarBasement: false
  });
  const handleChecked = name => event => {
    setcheckState({ ...checkState, [name]: event.target.checked });
  };
  return (
    <>
      <ExpansionPanel style={exPanStyle}>
        <ExpansionPanelSummary
          style={exPanSumStyle}
          expandIcon={<ExpandMoreIcon />}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Exterior Cladding</FormLabel>
          </FormControl>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={exPanDetStyle}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isFurnished}
                  onChange={handleChecked("isFurnished")}
                  value="isFurnished"
                  color="primary"
                />
              }
              label="Furnished"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isBuiltIns}
                  onChange={handleChecked("isBuiltIns")}
                  value="isBuiltIns"
                  color="primary"
                />
              }
              label="Built-In Wardrobes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isFireplace}
                  onChange={handleChecked("isFireplace")}
                  value="isFireplace"
                  color="primary"
                />
              }
              label="Fireplace"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isEnsuite}
                  onChange={handleChecked("isEnsuite")}
                  value="isEnsuite"
                  color="primary"
                />
              }
              label="Ensuite"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isStudy}
                  onChange={handleChecked("isStudy")}
                  value="isStudy"
                  color="primary"
                />
              }
              label="Study"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isGamesRoom}
                  onChange={handleChecked("isGamesRoom")}
                  value="isGamesRoom"
                  color="primary"
                />
              }
              label="GamesRoom"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isGym}
                  onChange={handleChecked("isGym")}
                  value="isGym"
                  color="primary"
                />
              }
              label="Gym"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.isCellarBasement}
                  onChange={handleChecked("isCellarBasement")}
                  value="isCellarBasement"
                  color="primary"
                />
              }
              label="Cellar/Basement"
            />
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default ExteriorCladdingFeatures;
