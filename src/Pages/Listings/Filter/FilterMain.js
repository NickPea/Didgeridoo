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

function FilterMain() {
  return (
    <div className="d-flex flex-column">
      <SellerSelect />
      <LocationType />
      <PropertySelect />
      <MinPriceSelect />
      <MaxPriceSelect />
      <BedsSlider />
      <BathroomsSlider />
      <KitchensSlider />
      <IndoorFeatures />
      <OutdoorFeatures />
    </div>
  );
}

export default FilterMain;
