import React from "react";
import { Container, Col, Form, FormControl, FormGroup } from "react-bootstrap";

function SearchBar() {
  return (
    <div>
      <Form>
        <Container>
          <Form.Row>
            <Col md={10}>
              <FormGroup>
                <FormControl placeholder="Address..." />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <FormControl type="submit" value="Search" />
              </FormGroup>
            </Col>
          </Form.Row>
        </Container>
      </Form>
    </div>
  );
}

export default SearchBar;
