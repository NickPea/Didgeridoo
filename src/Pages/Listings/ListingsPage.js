import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopNav from "./TopNav";
import SideNav from "./SideNav/SideNav";
import MainDisplay from "./MainDisplay";

function ListingsPage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <TopNav />
          </Col>
        </Row>
        <Row noGutters>
          <Col md={3}>
            <SideNav />
          </Col>
          <Col md={9}>
            <MainDisplay />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListingsPage;
