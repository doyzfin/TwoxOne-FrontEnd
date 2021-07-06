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
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import warn from "../../../assets/img/Vector.png";
import styles from "./Payment.module.css";
import Pay from "../../../assets/img/logos_google-pay.png";
import { Link, withRouter } from "react-router-dom";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      pay: [
        {
          idPay: 1,
          namePay: "Google Pay",
        },
        {
          idPay: 2,
          namePay: "Visa",
        },
        {
          idPay: 3,
          namePay: "Gojek",
        },
        {
          idPay: 4,
          namePay: "Paypal",
        },
        {
          idPay: 5,
          namePay: "Dana",
        },
        {
          idPay: 6,
          namePay: "BCA",
        },
        {
          idPay: 7,
          namePay: "BRI",
        },
        {
          idPay: 8,
          namePay: "OVO",
        },
      ],
      selectedPay: "",
      isSelect: false,
      form: {
        fullName: "",
        email: "",
        phone: "",
      },
    };
  }
  handleAdmin = () => {
    this.props.history.push("admin-page");
  };
  selectedUser = (num) => {
    this.setState({
      selectedPay: [...this.state.selectedPay, num],
    });
    if (this.state.selectedPay.length < 1) {
      this.setState({ isSelect: true });
    } else {
      this.setState({ selectedPay: "" });
    }
  };
  handlePrev = (event) => {
    event.preventDefault();
    this.props.history.push("order-page");
  };
  render() {
    localStorage.setItem(`methodPay`, this.state.selectedPay);
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title>
          {`Metode Pembayaran  ${this.state.selectedPay}`}
        </Popover.Title>
        <Popover.Content>
          <strong>Enjoy your Movie</strong>
        </Popover.Content>
      </Popover>
    );
    return (
      <>
        <Container>
          <NavBar />
          <Row className={styles.mainRow}>
            <Col sm={8}>
              <h1 className={styles.mainText}>Payment Info</h1>
              <Card className={styles.mainCard}>
                <Card.Body>
                  <Row>
                    <Col xs={4} className={styles.note1}>
                      Date & time
                    </Col>
                    <Col xs={8} className={styles.note2}>
                      {localStorage.getItem(`dateTime`)} at{" "}
                      {localStorage.getItem(`timeBook`)}
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4} className={styles.note1}>
                      Movie title
                    </Col>
                    <Col xs={8} className={styles.note2}>
                      {localStorage.getItem(`movieName`)}
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4} className={styles.note1}>
                      Cinema name
                    </Col>
                    <Col xs={8} className={styles.note2}>
                      {localStorage.getItem(`premiereName`)}
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4} className={styles.note1}>
                      Number of tickets
                    </Col>
                    <Col xs={8} className={styles.note2}>
                      {localStorage.getItem(`lengthTicket`)} pieces
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={4} className={styles.note1}>
                      Total payment
                    </Col>
                    <Col xs={8} className={styles.note3}>
                      {localStorage.getItem(`totalPrice`)},00
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <h1 className={styles.mainText}>Choose a Payment Method</h1>
              <Card className={styles.mainCard2}>
                <Card.Body>
                  <Row className={styles.rowOver}>
                    {this.state.pay.map((item, index) => {
                      return (
                        <Col sm={3} key={index}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popover}
                            disabled
                          >
                            <Card
                              className={styles.cardImg}
                              onClick={() => this.selectedUser(item.namePay)}
                            >
                              <img
                                src={Pay}
                                alt=""
                                className={styles.imgCard}
                              />
                            </Card>
                          </OverlayTrigger>
                        </Col>
                      );
                    })}
                  </Row>
                  <hr />
                  <p className={styles.textOr}>Or</p>
                  <p className={styles.textPay}>
                    Pay via cash.{" "}
                    <Link to="#" className={styles.linkPay}>
                      See how it work
                    </Link>{" "}
                  </p>
                </Card.Body>
              </Card>
              <Row className={styles.btnBottom}>
                <Col sm={6}>
                  <Button
                    className={styles.btnPrev}
                    onClick={(event) => this.handlePrev(event)}
                  >
                    Previous Step
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button className={styles.btnPay} onClick={this.handleAdmin}>
                    Pay your Order
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <h1 className={styles.mainText}>Personal Info</h1>
              <Card className={styles.mainCard3}>
                <Card.Body>
                  <Form>
                    <Form.Group
                      controlId="formName"
                      className={styles.groupForm}
                    >
                      <Form.Label className={styles.labelForm}>
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Jonas El Rodriguez"
                        className={styles.controlForm}
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="formEmail"
                      className={styles.groupForm}
                    >
                      <Form.Label className={styles.labelForm}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="jonasrodri123@gmail.com"
                        className={styles.controlForm}
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="formNumber"
                      className={styles.groupForm}
                    >
                      <Form.Label className={styles.labelForm}>
                        Phone Number
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text className={styles.textInput}>
                            +62
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="number"
                          placeholder="81445687121"
                          className={styles.controlForm}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Button
                      variant="warning"
                      disabled
                      block
                      className={styles.btnWarn}
                    >
                      <Row>
                        <Col xs={1} className={styles.imgWarn}>
                          <img alt="" src={warn} />
                        </Col>
                        <Col className={styles.warn}>
                          Fill your data correctly.
                        </Col>
                      </Row>
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

export default withRouter(Payment);
