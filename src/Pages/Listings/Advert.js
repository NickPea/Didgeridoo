import React from "react";
import Styled from "styled-components";
import { Container, Col, Row, Card } from "react-bootstrap";
import NoImage from "./Assets/noImg_2.jpg";

const StyledCard = Styled.div`
  margin-bottom: 15px;
`;

function Advert() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-center">
          {/* Mapped Card */}
          <Col sm={6} md={4}>
            <StyledCard>
              <Card>
                <Card.Header>House</Card.Header>
                <Card.Img variant="top" src={NoImage} />
                <Card.Body>
                  <Card.Title>$190,000</Card.Title>
                  <hr />
                  <Card.Subtitle>
                    34 Sea Breeze Ave, Golden Beach Vic 4001
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </StyledCard>
          </Col>
          {/* Mapped Card */}
          {/* Mapped Card */}
          <Col sm={6} md={4}>
            <StyledCard>
              <Card>
                <Card.Header>House</Card.Header>
                <Card.Img variant="top" src={NoImage} />
                <Card.Body>
                  <Card.Title>$190,000</Card.Title>
                  <hr />
                  <Card.Subtitle>
                    34 Sea Breeze Ave, Golden Beach Vic 4001
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </StyledCard>
          </Col>
          {/* Mapped Card */}
          {/* Mapped Card */}
          <Col sm={6} md={4}>
            <StyledCard>
              <Card>
                <Card.Header>House</Card.Header>
                <Card.Img variant="top" src={NoImage} />
                <Card.Body>
                  <Card.Title>$190,000</Card.Title>
                  <hr />
                  <Card.Subtitle>
                    34 Sea Breeze Ave, Golden Beach Vic 4001
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </StyledCard>
          </Col>
          {/* Mapped Card */}
          {/* Mapped Card */}
          <Col sm={6} md={12}>
            <StyledCard>
              <Card>
                <Card.Header>House</Card.Header>
                <Card.Img variant="top" src={NoImage} />
                <Card.Body>
                  <Card.Title>$190,000</Card.Title>
                  <hr />
                  <Card.Subtitle>
                    34 Sea Breeze Ave, Golden Beach Vic 4001
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </StyledCard>
          </Col>
          {/* Mapped Card */}
        </Row>
      </Container>
    </div>
  );
}

export default Advert;

//Notes:
//use a prop to change col-width to 8 & 12 for allowing 'featured ads'
