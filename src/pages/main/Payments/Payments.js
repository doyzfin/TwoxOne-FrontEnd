import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import styles from "./Payment.module.css";
import Pay from "../../../assets/img/logos_google-pay.png";
import { Link } from "react-router-dom";
class Order extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <Row className={styles.mainRow}>
            <Col xs={8}>
              <h1>Payment Info</h1>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={4}>Date & time</Col>
                    <Col xs={8}>Tuesday, 07 July 2020 at 02:00pm</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4}>Movie title</Col>
                    <Col xs={8}>Spider-Man: Homecoming</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4}>Cinema name</Col>
                    <Col xs={8}>CineOne21 Cinema</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4}>Number of tickets</Col>
                    <Col xs={8}>3 pieces</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4}>Total payment</Col>
                    <Col xs={8}>$30,00</Col>
                  </Row>
                </Card.Body>
              </Card>
              <h1>Choose a Payment Method</h1>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>

                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card>
                        <img src={Pay} alt="" />
                      </Card>
                    </Col>
                  </Row>
                  <hr />
                  <p>Or</p>
                  <p>
                    Pay via cash. <Link to="#">See how it work</Link>{" "}
                  </p>
                </Card.Body>
              </Card>
              <Row>
                <Col xs={6}>
                  <Button variant="primary" size="md">
                    Previous Step
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button variant="primary" size="md">
                    Pay your Order
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <h1>Personal Info</h1>
              <Card>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Jonas El Rodriguez"
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="jonasrodri123@gmail.com"
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>+62</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="number" placeholder="81445687121" />
                      </InputGroup>
                    </Form.Group>
                    <Button variant="warning" disabled block>
                      Fill your data correctly.
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Order;
