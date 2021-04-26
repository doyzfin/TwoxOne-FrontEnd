import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
// import Logo from "../assets/img/spd.png";
import Search from "../assets/img/Vector.svg";
import Profile from "../assets/img/Ellipse 11.png";
import { withRouter } from "react-router-dom";
// import axiosApiIntances from "../utils/axios";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLogin: "",
      show: false,
    };
  }
  componentDidMount() {
    this.handlePP();
  }

  handleNavbar = (event) => {
    event.preventDefault();
    this.props.history.push("/home");
    console.log("handleNavbar");
  };
  handleShow = (event) => {
    this.setState({ show: true });
    this.setState({ [event.target.data]: event.target.value });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  handlePP = () => {
    const { login } = this.props;

    this.setState({ isLogin: login });
  };
  render() {
    const { show } = this.state;
    console.log(this.props.admin);
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand onClick={(event) => this.handleNavbar(event)}>
            <p className={styles.mainLogo}>TwoxOne</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mr.auto">
            {this.props.admin ? (
              <Nav className="mr-auto">
                <Nav.Item>
                  <Link to="/home" className={styles.link1}>
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/payment-page" className={styles.link1}>
                    Manage Movie
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/profile-page" className={styles.link1}>
                    Manage Schedule
                  </Link>
                </Nav.Item>
              </Nav>
            ) : (
              <Nav className="mr-auto">
                <Nav.Item>
                  <Link to="/home" className={styles.link1}>
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/payment-page" className={styles.link1}>
                    Payment
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/profile-page" className={styles.link1}>
                    Profile
                  </Link>
                </Nav.Item>
              </Nav>
            )}

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
              onClick={(event) => this.handleShow(event)}
            />
            <Modal show={show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Search Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form inline>
                  <Form.Control placeholder="Search Movie Name"></Form.Control>
                  <Button>Search</Button>
                </Form>
                <Row></Row>
              </Modal.Body>
              <Modal.Footer>© 2020 Tickitz. All Rights Reserved.</Modal.Footer>
            </Modal>
            {this.state.isLogin ? (
              <img alt="" src={Profile} className={styles.pp} />
            ) : (
              <Button className={styles.btn} onClick={this.handlePP}>
                Sign Up
              </Button>
            )}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
