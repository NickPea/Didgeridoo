import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function TopNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h4>
            Didgeridoo&trade;
            <div style={{ fontSize: "0.6rem", textAlign: "right" }}>
              Australian Property Sales{" "}
              <b>
                <u>For Everyone.</u>
              </b>
            </div>
          </h4>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#buy">Buy</Nav.Link>
          <Nav.Link href="#sell">Sell</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default TopNav;
