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
// import Profile from "../assets/img/Ellipse 11.png";
import { withRouter } from "react-router-dom";
// import axiosApiIntances from "../utils/axios";
import { connect } from "react-redux";
import { getDataUserAll } from "../redux/actions/profile";
import { login } from "../redux/actions/auth";
// import { logout } from "../redux/actions/auth";

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
    this.props.getDataUserAll();
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
  getUserDataId = () => {
    this.props.getUserData();
  };

  handlePP = () => {
    // const { login } = this.props;
    // localStorage.clear();
    // localStorage.setItem("token", this.props.auth.data.token);
    // this.setState({ isLogin: login });
    // if (!localStorage.getItem("token")) {
    //   this.props.history.push("/login");
    // }
    // this.props.history.push("/login");
  };
  render() {
    const { show } = this.state;
    console.log(this.props.auth);
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
                  <Link to="/dashboard" className={styles.link1}>
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/manage-schedule" className={styles.link1}>
                    Manage Movie
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/manage-schedule" className={styles.link1}>
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
                  <Link
                    to={`profile-page/${localStorage.getItem("userId")}`}
                    className={styles.link1}
                  >
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
            {/* {this.state.isLogin ? (
              <img alt="" src={Profile} className={styles.pp} />
            ) : (
              // <Button className={styles.btn} onClick={this.handlePP}>
              //   Log Out
              // </Button>
            )} */}
            <Button className={styles.btn} onClick={this.props.handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = { getDataUserAll, login };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
