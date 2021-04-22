import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import axiosApiIntances from "../../../utils/axios";

// import ReactPaginate from "react-paginate";
// import styles from "./Movie.module.css";
import Img from "../../../assets/img/Bw.png";
import { Container, Row, Col, Card } from "react-bootstrap";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieCategory: "",
      data: {},
      pagination: {},
      page: 1,
      id: "",
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
    // const { movieName } = this.state;
    console.log(this.state);

    return (
      <>
        <Container>
          <NavBar />
          <Container>
            <Row>
              <Col sm={3}>
                <Card>
                  <Card.Body>
                    <img alt="" src={Img} />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={9}></Col>
            </Row>
            <Row>
              <Col>
                <p>Synopsis</p>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Movies;
