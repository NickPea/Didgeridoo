import React from "react";
import SellerSelect from "./SellerSelect";
import PropertySelect from "./PropertySelect";
import MinPriceSelect from "./MinPriceSelect";
import MaxPriceSelect from "./MaxPriceSelect";
import BedsSlider from "./BedsSlider";
import BathroomsSlider from "./BathroomsSlider";
import KitchensSlider from "./KitchensSlider";
import OutdoorFeatures from "./OutdoorFeatures";
import IndoorFeatures from "./IndoorFeatures";
import LocationType from "./LocationType";
import EnergyFeatures from "./EnergyFeatures";
import LandSlider from "./LandSlider";
import YardSlider from "./YardSlider";
import AgeSlider from "./AgeSlider";
import FoundationFeatures from "./FoundationFeatures";
import ExteriorCladdingFeatures from "./ExteriorCladdingFeatures";
import RoofFeatures from "./RoofFeatures";

import { Typography } from "@material-ui/core";

function FilterMain() {
  return (
    <div className="d-flex flex-column">
      <SellerSelect />
      <LocationType />
      <PropertySelect />
      <div class="d-flex justify-content-around">
        <MinPriceSelect />
        <MaxPriceSelect />
      </div>
      {/* Main */}
      <BedsSlider />
      <BathroomsSlider />
      <KitchensSlider />
      <YardSlider />
      <LandSlider />
      <AgeSlider />
      {/* Features */}
      <Typography className="mb-2 text-center">Features</Typography>
      <IndoorFeatures />
      <OutdoorFeatures />
      <EnergyFeatures />
      {/* TODO: Network Connections */}
      <RoofFeatures />
      <ExteriorCladdingFeatures />
      <FoundationFeatures />
      {/* TODO: Flooring */}
      {/* TODO: Property State: reno'd, needs work, good, working condition, excellent */}
      {/* TODO: features: https://www.thebalance.com/home-amenities-features-home-buyers-1798249 */}
    </div>
  );
}

export default FilterMain;
