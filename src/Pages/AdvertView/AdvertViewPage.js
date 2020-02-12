import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeadIn from "./LeadIn";
import Description from "./Description";
import ImageViewer from "./ImageViewer";
import GoogleMap from "./GoogleMap";
import Contact from "./Contact";
import CommercialAd from "./CommericalAd";

function AdvertViewPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <ImageViewer />
            <hr />
            <Row>
              <Col md={6}>
                <LeadIn />
                <hr />
                <CommercialAd />
              </Col>
              <Col>
                <GoogleMap />
              </Col>
            </Row>
            <hr />
            <Description />
            <hr />
            <Contact />
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AdvertViewPage;
