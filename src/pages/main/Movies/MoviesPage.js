import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import axiosApiIntances from "../../../utils/axios";
import Premiere from "../../../components/MoviePage/Premiere";
// import ReactPaginate from "react-paginate";
// import styles from "./Movie.module.css";
import Img from "../../../assets/img/Bw.png";
import { Container, Row, Col, Card } from "react-bootstrap";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "Spider-Man: Homecoming",
      movieCategory: "Adventure, Action, Sci-Fi",
      movieReleaseDate: "June 28, 2017",
      movieDirect: "Jon Watss",
      movieDuration: "2 hours 13 minutes ",
      movieCast: "Tom Holland, Michael Keaton, Robert Downey Jr., ...",
      synopsis:
        "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      data: {},
      pagination: {},
      page: 1,
      id: "",
      isLogin: true,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = (id) => {
    console.log("Get Data");

    axiosApiIntances
      .get(`movie`)
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.data });
      })
      .catch((err) => console.log(err));
  };
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };
  render() {
    const {
      movieName,
      movieCategory,
      movieReleaseDate,
      movieDirect,
      movieDuration,
      movieCast,
      synopsis,
    } = this.state;
    console.log(this.state);

    return (
      <>
        <Container>
          <NavBar login={this.state.isLogin} />
          <Container>
            <Row>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    <img alt="" src={Img} />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={9}>
                <div>
                  <h1>{movieName}</h1>
                  <p>{movieCategory}</p>
                </div>
                <div>
                  <p>Release Date</p>
                  <p>{movieReleaseDate}</p>
                </div>
                <div>
                  <p>Duration</p>
                  <p>{movieDuration}</p>
                </div>
                <div>
                  <p>Directed by</p>
                  <p>{movieDirect}</p>
                </div>
                <div>
                  <p>Cast</p>
                  <p>{movieCast}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Synopsis</p>
                <p>{synopsis}</p>
              </Col>
            </Row>
            <Premiere />
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Movies;
