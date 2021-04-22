import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Container, Form } from "react-bootstrap";
class View extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <Form inline>
            <input type="text" placeholder="Search" />
            <input type="date" />
          </Form>
          <Footer />
        </Container>
      </>
    );
  }
}

export default View;
