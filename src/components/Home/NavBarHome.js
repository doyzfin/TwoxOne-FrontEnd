import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../NavBar.module.css";
// import Logo from "../../assets/img/Tickitz1.png";
import Search from "../../assets/img/Vector.svg";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      show: false,
    };
  }
  handleNavbar = (event) => {
    event.preventDefault();
    this.props.history.push("/home");
    console.log("handleNavbar");
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand onClick={(event) => this.handleNavbar(event)}>
            <p className={styles.mainLogo}>TwoxOne</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Link to="/movie-page" className={styles.link1}>
                  Movie
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/movie-page" className={styles.link1}>
                  Cinema
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/order-page" className={styles.link1}>
                  Buy Ticket
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <NavDropdown
                title="Location"
                id="location-dropdown"
                className={styles.location}
              >
                <NavDropdown.Item>Bogor</NavDropdown.Item>
                <NavDropdown.Item>Jakarta</NavDropdown.Item>
                <NavDropdown.Item>Purwokerto</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <img
              alt=""
              src={Search}
              className={styles.search}
              onClick={this.handleShow}
            />
            <Modal show={show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Search Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>H1</p>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
            <Button className={styles.btn}>Sign Up</Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
