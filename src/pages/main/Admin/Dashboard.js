import React, { Component } from "react";
import { Container, Row, Col, Dropdown, Card, Button } from "react-bootstrap";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import styles from "./Dashboard.module.css";
// import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <Row>
            <Col sm={9}>
              <h1>Dashboard</h1>
              <Card>THIS FOR THE GRAPH</Card>
            </Col>
            <Col sm={3}>
              <h1>Filtered</h1>
              <Card>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Movie
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Premiere
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Location
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button>Filter</Button>
                <Button>Reset</Button>
              </Card>
            </Col>
          </Row>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Dashboard;
