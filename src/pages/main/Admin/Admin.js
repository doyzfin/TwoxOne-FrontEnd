import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Admin.module.css";
import Spd from "../../../assets/img/spd.png";
class Order extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <Row className={styles.mainBackground}>
            <Col>
              <h1 className={styles.mainText}>Form Movie</h1>
              <Card className={styles.mainCard1}>
                <Card.Body>
                  <Row>
                    <Col sm={3}>
                      <Card className={styles.cardImg}>
                        <Card.Img src={Spd} />
                      </Card>
                    </Col>
                    <Col sm={9}>
                      <Form>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Movie Name
                              </Form.Label>
                              <Form.Control
                                placeholder="Spider-Man: Homecoming"
                                className={styles.controlForm}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Director
                              </Form.Label>
                              <Form.Control
                                placeholder="Jon Watts"
                                className={styles.controlForm}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Release date
                              </Form.Label>
                              <Form.Control
                                placeholder="07/05/2020"
                                className={styles.controlForm}
                              />
                            </Form.Group>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Category
                              </Form.Label>
                              <Form.Control
                                placeholder="Action, Adventure, Sci-Fi"
                                className={styles.controlForm}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Casts
                              </Form.Label>
                              <Form.Control
                                placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                                className={styles.controlForm}
                              />
                            </Form.Group>
                            <Form.Row>
                              <Form.Group as={Col}>
                                <Form.Label className={styles.labelForm1}>
                                  Duration Hour
                                </Form.Label>
                                <Form.Control
                                  placeholder="2"
                                  className={styles.controlForm}
                                />
                              </Form.Group>
                              <Form.Group as={Col}>
                                <Form.Label className={styles.labelForm1}>
                                  Duration Minute
                                </Form.Label>
                                <Form.Control
                                  placeholder="13"
                                  className={styles.controlForm}
                                />
                              </Form.Group>
                            </Form.Row>
                          </Form.Group>
                        </Form.Row>
                      </Form>
                    </Col>
                  </Row>
                  <div>
                    <p className={styles.synName}>Synopsis</p>

                    <Card>
                      <Card.Body className={styles.synContent}>
                        Thrilled by his experience with the Avengers, Peter
                        returns home, where he lives with his Aunt May,
                      </Card.Body>
                    </Card>
                  </div>
                  <div className={styles.btnRight}>
                    <Button className={styles.btnReset}>Reset</Button>
                    <Button className={styles.btnSubmit}>Submit</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={styles.mainBackground}>
            <Col>
              <Row>
                <Col sm={6}>
                  <h1 className={styles.mainText1}>Data Movie</h1>
                </Col>
                <Col sm={6}>
                  <Form inline className={styles.formBottom}>
                    <Form.Group>
                      <Form.Control as="select" className={styles.inputSort}>
                        <option className={styles.inputSort}>Sort</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        placeholder="Search Movie Name ..."
                        className={styles.inputSearch}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Card className={styles.mainCardBottom}>
                <Row className={styles.overRow}>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={3}>
                    <Card className={styles.cardBottom}>
                      <Card.Img
                        src={Spd}
                        variant="top"
                        className={styles.imgCard}
                      />
                      <Card.Title className={styles.mvTitles}>
                        Black Widow
                      </Card.Title>
                      <Card.Body className={styles.mvCategory}>
                        Action, Adventure, Sci-Fi
                      </Card.Body>
                      <Card.Body>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnUpdt}
                        >
                          Update
                        </Button>
                        <Button
                          block
                          variant="outline-primary"
                          className={styles.btnDlt}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
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
