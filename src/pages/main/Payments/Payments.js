import React, { Component } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Container } from "react-bootstrap";
class Order extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <h1>Order Page</h1>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Order;
