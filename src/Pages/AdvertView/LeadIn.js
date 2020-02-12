import React from "react";
// icons
import BedIcon from "@material-ui/icons/HotelOutlined";
import BathtubIcon from "@material-ui/icons/BathtubOutlined";
import CarIcon from "@material-ui/icons/DirectionsCarOutlined";
import DimensionIcon from "@material-ui/icons/Crop";
import { Row, Col } from "react-bootstrap";

export default function LeadIn() {
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col>
              <h4 style={addressStyle}>
                {"34 Noonan Ave, Paradise Beach VIC 4001"}
              </h4>
              <div style={iconWrapperStyle}>
                <i style={iconStyle}>{"House "}</i>
                <i style={iconStyle}>
                  <BedIcon />
                  {"2"}
                </i>
                <i style={iconStyle}>
                  <BathtubIcon />
                  {"2"}
                </i>
                <i style={iconStyle}>
                  <CarIcon />
                  {"2"}
                </i>
                <i style={iconStyle}>
                  <DimensionIcon />
                  {"200m2"}
                </i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={priceStyle}>{"$490,000"}</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

const iconWrapperStyle = {
  marginTop: "20px"
};

const iconStyle = {
  margin: "0 5px"
};

const addressStyle = {};

const priceStyle = {
  marginTop: "20px",
  fontWeight: ""
};
