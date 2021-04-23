import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./Order.module.css";
import Seat from "../../../components/Order/Seat/Seat";
import Sponsor1 from "../../../assets/img/1.png";
class Order extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14", "B1", "C1"],
      isLogin: true,
    };
  }
  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat],
    });
    console.log(seat);
  };
  booking = () => {
    console.log("Booking");
    const booking = JSON.stringify(this.state.selectedSeat);
    localStorage.setItem("bookingSeat", booking);
  };
  render() {
    const { reservedSeat, selectedSeat } = this.state;
    return (
      <>
        <Container>
          <NavBar login={this.state.isLogin} />
          <Row className={styles.mainRow}>
            <Col sm={8}>
              <h1 className={styles.mainText}>Movie Selected</h1>
              <Card className={styles.firstCard}>
                <Row>
                  <Col xs={6} className={styles.mvName}>
                    Spider-Man: Homecoming
                  </Col>
                  <Col xs={6}>
                    <Button
                      variant="outline-secondary"
                      className={styles.btnChange}
                    >
                      Change Movie
                    </Button>
                  </Col>
                </Row>
              </Card>
              <h1 className={styles.mainText}>Choose your Seat</h1>
              <Card className={styles.boxSecond}>
                <p className={styles.screen}>Screen</p>
                <Card className={styles.cardScreen}></Card>
                <Card.Body>
                  <Seat
                    seatAlphabet="A"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="B"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="C"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="D"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="E"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="F"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <Seat
                    seatAlphabet="G"
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <center>
                    <Row>
                      <Col className={styles.colNum}></Col>
                      <Col className={styles.colNum}>1</Col>
                      <Col className={styles.colNum}>2</Col>
                      <Col className={styles.colNum}>3</Col>
                      <Col className={styles.colNum}>4</Col>
                      <Col className={styles.colNum}>5</Col>
                      <Col className={styles.colNum}>6</Col>
                      <Col className={styles.colNum}>7</Col>
                      <Col className={styles.colNum}></Col>
                      <Col className={styles.colNum}>8</Col>
                      <Col className={styles.colNum}>9</Col>
                      <Col className={styles.colNum}>10</Col>
                      <Col className={styles.colNum}>11</Col>
                      <Col className={styles.colNum}>12</Col>
                      <Col className={styles.colNum}>13</Col>
                      <Col className={styles.colNum}>14</Col>
                    </Row>
                  </center>
                </Card.Body>
                <Card.Body>
                  <h1 className={styles.seatKey}>Seating Key</h1>
                  <Row>
                    <Col>
                      <Row>
                        <Col xs={1} className={styles.seat1}></Col>
                        <Col>
                          <p className={styles.statusSeat}>Available</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col xs={1} className={styles.seat2}></Col>
                        <Col>
                          <p className={styles.statusSeat}>Selected</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col xs={1} className={styles.seat3}></Col>
                        <Col>
                          <p className={styles.statusSeat}>Sold</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Body></Card.Body>
              </Card>
              <Row className={styles.rowButton}>
                <Col sm={6}>
                  <Button
                    variant="primary"
                    size="md"
                    className={styles.btnChangeMv}
                  >
                    Change your movie
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button
                    variant="primary"
                    size="md"
                    className={styles.btnBook}
                  >
                    Booking
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <h1 className={styles.mainText}>Order Info</h1>
              <Card className={styles.boxThird}>
                <div>
                  <Card.Body>
                    <img alt="" src={Sponsor1} className={styles.sponsorImg} />
                  </Card.Body>
                  <Card.Title className={styles.nameSponsor}>
                    CineOne21 Cinema
                  </Card.Title>
                </div>
                <Card.Body>
                  <Row>
                    <Col xs={4} className={styles.subCard}>
                      Movie selected
                    </Col>
                    <Col xs={8} className={styles.subCard1}>
                      Spider-Man: Homecoming
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={7} className={styles.subCard}>
                      Tuesday, 07 July 2020
                    </Col>
                    <Col xs={5} className={styles.subCard1}>
                      02:00pm
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={7} className={styles.subCard}>
                      One ticket price
                    </Col>
                    <Col xs={5} className={styles.subCard1}>
                      $10
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={7} className={styles.subCard}>
                      Seat choosed
                    </Col>
                    <Col xs={5} className={styles.subCard1}>
                      C4, C5, C6
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={7} className={styles.subCardPayName}>
                      Total Payment
                    </Col>
                    <Col xs={5} className={styles.subCardPay}>
                      $30
                    </Col>
                  </Row>
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
