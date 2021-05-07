import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

class Schedule extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <h1>Form Schedule</h1>
          <Card>
            <Row>
              <Col sm={3}>A</Col>
              <Col sm={9}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label>Movie</Form.Label>
                        <Form.Control type="text" placeholder="as" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Movie</Form.Label>
                            <Form.Control type="text" placeholder="as" />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>Movie</Form.Label>
                            <Form.Control type="text" placeholder="as" />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Premiere</Form.Label>
                            <Row>
                              <Col>
                                <Card>A</Card>
                              </Col>
                              <Col>
                                <Card>a</Card>
                              </Col>
                              <Col>
                                <Card>B</Card>
                              </Col>
                            </Row>
                          </Form.Group>
                        </Form.Row>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="as" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Movie</Form.Label>
                            <Form.Control type="text" placeholder="as" />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label>Movie</Form.Label>
                            <Form.Control type="text" placeholder="as" />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Schedule</Form.Label>
                            <Row>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                              <Col sm={3}>A</Col>
                            </Row>
                          </Form.Group>
                        </Form.Row>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button>Submit</Button>
                <Button>Reset</Button>
              </Col>
            </Row>
          </Card>

          <h1>Data Schedule</h1>
          <Card>
            <Row>
              <Col>S</Col>
            </Row>
          </Card>

          <Footer />
        </Container>
      </>
    );
  }
}

export default Schedule;
