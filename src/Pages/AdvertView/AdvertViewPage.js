import React from "react";
import ImageViewer from "./AdvertExplorer";
import { Container, Row, Col, Card } from "react-bootstrap";
import AdvertExplorer from "./AdvertExplorer";

function AdvertViewPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <Card>
              <Card.Header>{"Property Address"}</Card.Header>
              <Card.Body>
                <AdvertExplorer />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AdvertViewPage;
