import React from "react";
import { Avatar, Paper, Button } from "@material-ui/core";
import MailIcon from "@material-ui/icons/MailOutline";
import { Row, Col } from "react-bootstrap";
import ProfPic from "./Assets/Avatar.jpg";

export default function Contact() {
  return (
    <Paper style={contactWrapperStyle}>
      <Row>
        <Col md={2} style={avatarWrapperStyle}>
          <Avatar alt={"NickPea"} src={ProfPic} style={avatarStyle} />
        </Col>
        <Col md={4} style={sellerWrapperStyle}>
          <h3>{"John Patterson"}</h3>
          <h6>Ph: {"0432 043 020"}</h6>
          <h6>Email: {"someone@somewhere.com"}</h6>
        </Col>
        <Col md={6} style={buttonWrapperStyle}>
          <Button variant="contained" color="primary" size="large">
            <h4 style={{ margin: "0", padding: "0" }}>Make an enquiry</h4>
            <MailIcon style={{ transform: "translate(10px,-1px)" }} />
          </Button>
        </Col>
      </Row>
    </Paper>
  );
}

const contactWrapperStyle = {
  backgroundColor: "lightgray",
  padding: "10px"
};
const sellerWrapperStyle = {};
const avatarWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const avatarStyle = {
  width: "120px",
  height: "120px",
  border: "5px solid grey"
};

const buttonWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
