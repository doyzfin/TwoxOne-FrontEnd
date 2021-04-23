import React, { Component } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axiosApiIntances from "../../../utils/axios";
import Cards from "../../../components/Home/Cards";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HomeImg from "../../../assets/img/Group 15.png";
import Line from "../../../assets/img/Line 7.png";
import Spd from "../../../assets/img/spd.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: [],
      isLogin: false,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    console.log("Get Data");
    axiosApiIntances
      .get(`movie`)
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((err) => console.log(err));
  };
  handleImage = (event) => {
    event.preventDefault();
    this.props.history.push("/movie-page");
  };
  handleMovieDetails = (event, id) => {
    event.preventDefault();
    this.props.history.push(`/movie-page/${id}`);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Container>
          <NavBar login={this.state.isLogin} />
          <Container>
            <Row>
              <Col sm={6}>
                <div className={styles.box1}>
                  <p className={styles.titleHome}>
                    Nearest Cinema, Newest Movie,
                  </p>
                  <br />
                  <p className={styles.titleHome1}>Find out now!</p>{" "}
                </div>
              </Col>
              <Col sm={6}>
                <img alt="" src={HomeImg} className={styles.imgHome} />
              </Col>
            </Row>
          </Container>
          <Container className={styles.Cont1}>
            <Row>
              <Col xs={6}>
                <div className={styles.boxShow}>
                  <p className={styles.now}>Now Showing</p>
                  <img alt="" src={Line} className={styles.line} />
                </div>
              </Col>
              <Col xs={6}>
                <Link to="/view" className={styles.view}>
                  View All
                </Link>
              </Col>
            </Row>
            <div className={styles.flexContainer}>
              {this.state.data.map((item, index) => {
                const { movie_id } = item;
                return (
                  // <>
                  <div className={styles.imgAll} key={index}>
                    <img
                      alt=""
                      src={Spd}
                      onClick={(event) =>
                        this.handleMovieDetails(event, movie_id)
                      }
                    />
                  </div>
                  // </>
                );
              })}
            </div>
          </Container>
          <Container className={styles.Cont2}>
            <Row>
              <Col xs={8}>
                <div className={styles.boxShow}>
                  <p className={styles.now1}>Upcoming Movies</p>
                </div>
              </Col>
              <Col xs={4}>
                <Link to="/view" className={styles.view1}>
                  View All
                </Link>
              </Col>
            </Row>
            <div className={styles.flexContainer}>
              <Button className={styles.btnMonth}>September</Button>
              <Button className={styles.btnMonth}>October</Button>
              <Button className={styles.btnMonth}>November</Button>
              <Button className={styles.btnMonth}>Desember</Button>
              <Button className={styles.btnMonth}>January</Button>
              <Button className={styles.btnMonth}>Febuary</Button>
              <Button className={styles.btnMonth}>March</Button>
              <Button className={styles.btnMonth}>April</Button>
              <Button className={styles.btnMonth}>May</Button>
            </div>
            <Cards />
          </Container>
          <Container className={styles.Cont3}>
            <Card className={styles.card2}>
              <div className={styles.top}>
                <p className={styles.topTittle}>Be the vanguard of the</p>
                <p className={styles.topNote}>Moviegoers</p>
              </div>
              <div className={styles.middle}>
                <Form inline className={styles.form}>
                  <Form.Control
                    placeholder="Type your email"
                    className={styles.cntrl}
                  ></Form.Control>
                  <Button className={styles.btn}>Join now</Button>
                </Form>
              </div>
              <div className={styles.bottom}>
                <p className={styles.bottomText}>
                  By joining you as a Tickitz member,
                  <br /> we will always send you the latest updates via email .
                </p>
              </div>
            </Card>
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Home;
