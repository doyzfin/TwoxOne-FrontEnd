import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
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
