import React, { Component } from "react";
import styles from "./MovieDetail.module.css";
import NavBar from "../../../components/learning/NavBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import qs from "query-string";
import Seat from "../../../components/learning/Seat/Seat";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14", "B1", "C1"],
    };
  }

  componentDidMount() {}
  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat],
    });
  };
  booking = () => {
    const booking = JSON.stringify(this.state.selectedSeat);
    localStorage.setItem("bookingSeat", booking);
  };
  render() {
    const { reservedSeat, selectedSeat } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1 className={`${styles.headingColor} mr-auto`}>
            MovieDetail Page !
          </h1>
          <NavBar />
          <hr />
          <Row>
            <Col md={8}>
              <Card>
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
                </Card.Body>
                <Card.Body>
                  <Button
                    variant="primary"
                    size="md"
                    block
                    onClick={this.booking}
                  >
                    Booking
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieDetail;
