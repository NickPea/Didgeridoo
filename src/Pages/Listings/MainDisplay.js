import React from "react";
import Styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

import SearchBar from "./SearchBar";
import Advert from "./Advert";

function MainDisplay() {
  return (
    <>
      <StyleWrapper>
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Advert />
            </Col>
          </Row>
        </Container>
      </StyleWrapper>
    </>
  );
}

export default MainDisplay;

//styles
//same top padding as sidenav
const StyleWrapper = Styled.div`
  background-color: lightgrey;
  padding-top: 20px;
`;
