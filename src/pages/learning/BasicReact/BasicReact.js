import React, { Component } from "react";
// import "./BasicReact.css";
import styles from "./BasicReact.module.css";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import NavBar from "../../../components/learning/NavBar";

class BasicReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Muhammad Alfin Ramadhan",
      search: "",
      isShow: "True",
      data: [
        {
          movie_id: 1,
          movie_name: "Zack Snyder Justice League",
        },
        {
          movie_id: 2,
          movie_name: "The Batman",
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("Component running");
  }
  componentDidUpdate() {
    console.log("Component Update running");
  }
  handleClick() {
    console.log("Declaration");
    console.log("This", this);
  }
  handleClick2 = () => {
    console.log("Arrow function");
    console.log("This", this);
    this.setState({ name: "Alfin" });
  };
  handleClick3 = (id) => {
    console.log("Send Argument Id : ");
    console.log("id", id);
  };
  changeText = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleParams = (id, event) => {
    console.log("Go To Movie Details Page");
    // console.log(this.props);
    this.props.history.push(`/learning/basic-movie-details?movieId=${id}`);
  };
  render() {
    console.log(this.state);
    const { name, search } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Basic React</h1>
          <NavBar />
          <h1>Hello {name} !</h1>
          <hr />
          <h3>Events</h3>
          <button onClick={this.handleClick}>Click Me !</button>
          <button onClick={this.handleClick2}>Click Me 2 !</button>
          <button onClick={() => this.handleClick3(1)}>Click Me 3 !</button>
          <h6>Search Key : {search}</h6>
          <input
            placeholder="Search ...."
            name="search"
            onChange={(event) => this.changeText(event)}
          />
          <hr />
          <h3>Link & URL Params</h3>
          <a href="/learning/basic-movie-details">With Anchor</a>
          <br />
          <Link to="/learning/basic-movie-details">With Line</Link>
          <br />
          <Button
            variant="primary"
            onClick={(event) => this.handleParams(99, event)}
          >
            Detail
          </Button>{" "}
          <hr />
          <h3>Styling in React</h3>
          <h2 className={styles.header}>Styling in BasicReact.css</h2>
          <hr />
          <h3>Conditional</h3>
          {this.state.isShow ? <h5>Show its True</h5> : <h5>Show is False</h5>}
          <hr />
          <h3>Looping/Mapping</h3>
          {this.state.data.map((item, index) => {
            return <li key={index}>{item.movie_name}</li>;
          })}
        </Container>
      </>
    );
  }
}

export default BasicReact;
