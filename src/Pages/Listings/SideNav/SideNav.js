import React from "react";
import Styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Filters from "./Filter/FilterMain";

function SideNav() {
  return (
    <>
      <StyleWrapper>
        <Container>
          <Row>
            <Col>
              <Filters />
            </Col>
          </Row>
        </Container>
      </StyleWrapper>
    </>
  );
}

export default SideNav;

//styles
//same top padding as maindisplay
const StyleWrapper = Styled.div`
  background-color: darkgrey;
  padding-top: 20px; 
`;
