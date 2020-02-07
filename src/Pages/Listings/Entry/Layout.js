import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "../SideNav";

function Layout() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={9}></Col>
          <Col sm={3}>
            <SideNav />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
