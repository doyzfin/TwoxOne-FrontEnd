import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Alert } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <>
        <Card>
          <Row>
            <Col sm={8}>
              <p>Hari Tanggal</p>
              <h1>Movie Name</h1>
            </Col>
            <Col sm={4}>Gambar Cinema</Col>
          </Row>
          <hr />
          <Row>
            <Col sm={6}>
              <Alert variant={"success"}>
                This is a {"success"} alert with{" "}
              </Alert>
            </Col>
            <Col sm={6}>Gambar Cinema</Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default NavBar;
