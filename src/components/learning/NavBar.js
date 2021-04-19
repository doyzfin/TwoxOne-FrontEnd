import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Link to="/learning/basic-react">Basic</Link> |{" "}
        <Link to="/learning/basic-home">Home</Link> |{" "}
        <Link to="/learning/basic-movie-details">Movie Details</Link>
      </>
    );
  }
}

export default NavBar;
