import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/img/Tickitz1.png";
import Search from "../../assets/img/Vector.svg";
import Profile from "../../assets/img/Ellipse 11.png";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand href="/home">
            <img alt="" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mr.auto">
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
            <img alt="" src={Search} className={styles.search} />
            <img alt="" src={Profile} className={styles.pp} />
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
