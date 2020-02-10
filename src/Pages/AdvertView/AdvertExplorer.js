import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import House1 from "./Assets/house1.jpg";

function AdvertExplorer() {
  return (
    <>
      <Tabs>
        <Tab label="Images" />
        <Tab label="Features" />
        <Tab label="Seller" />
        <Tab label="Map" />
      </Tabs>
    </>
  );
}

export default AdvertExplorer;
