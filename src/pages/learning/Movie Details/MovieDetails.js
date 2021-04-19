import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    console.log(this.props.location.search);
    return (
      <>
        <h1>Movie Details Page</h1>
      </>
    );
  }
}

export default MovieDetails;
