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
            <Col xs={8}>
              <h1>Movie Selected</h1>
              <Card>
                <Row>
                  <Col xs={6}>Spider-Man: Homecoming</Col>
                  <Col xs={6}>
                    <Button>Change Movie</Button>
                  </Col>
                </Row>
              </Card>
              <h1>Choose your Seat</h1>
              <Card>
                <p>Screen</p>
                <Card></Card>
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
                      <Col></Col>
                      <Col>1</Col>
                      <Col>2</Col>
                      <Col>3</Col>
                      <Col>4</Col>
                      <Col>5</Col>
                      <Col>6</Col>
                      <Col>7</Col>
                      <Col></Col>
                      <Col>8</Col>
                      <Col>9</Col>
                      <Col>10</Col>
                      <Col>11</Col>
                      <Col>12</Col>
                      <Col>13</Col>
                      <Col>14</Col>
                    </Row>
                  </center>
                </Card.Body>
                <Card.Body>
                  <h1>Seating Key</h1>
                  <Row>
                    <Col>
                      <p>Available</p>
                    </Col>
                    <Col>
                      <p>Selected</p>
                    </Col>
                    <Col>
                      <p>Sold</p>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Body></Card.Body>
              </Card>
              <Row>
                <Col xs={6}>
                  <Button variant="primary" size="md" onClick={this.booking}>
                    Change your movie
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button variant="primary" size="md" onClick={this.booking}>
                    Booking
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <h1>Order Info</h1>
              <Card>
                <div>
                  <Card.Img variant="top" src={Sponsor1} />
                  <Card.Title>CineOne21 Cinema</Card.Title>
                </div>
                <Card.Body>
                  <Row>
                    <Col xs={4}>Movie selected</Col>
                    <Col xs={8}>Spider-Man: Homecoming</Col>
                  </Row>
                  <Row>
                    <Col xs={7}>Tuesday, 07 July 2020</Col>
                    <Col xs={5}>02:00pm</Col>
                  </Row>
                  <Row>
                    <Col xs={7}>One ticket price</Col>
                    <Col xs={5}>$10</Col>
                  </Row>
                  <Row>
                    <Col xs={7}>Seat choosed</Col>
                    <Col xs={5}>C4, C5, C6</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={7}>Total Payment</Col>
                    <Col xs={5}>$30</Col>
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
