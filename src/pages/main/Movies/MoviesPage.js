import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import axiosApiIntances from "../../../utils/axios";
import Premiere from "../../../components/MoviePage/Premiere";
// import ReactPaginate from "react-paginate";
import styles from "./Movie.module.css";
import Img from "../../../assets/img/Bw.png";
import { Container, Row, Col, Card } from "react-bootstrap";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      premiere: {},
      pagination: {},
      page: 1,
      id: "",
      isLogin: true,
      isAdmin: false,
      selectedTime: "",
      isSelect: false,
    };
  }
  componentDidMount() {
    console.log(this.props.match.params);
    const { id } = this.props.match.params;
    this.getData(id);
  }
  getData = (id) => {
    axiosApiIntances
      .get(`movie/${id}`)
      .then((res) => {
        this.setState({ data: res.data.data[0] });
      })
      .catch((err) => console.log(err));
  };
  selectedUser = (time) => {
    this.setState({
      selectedTime: [...this.state.selectedTime, time],
    });
    if (this.state.selectedTime.length < 1) {
      this.setState({ isSelect: true });
    } else {
      this.setState({ isSelect: false });
    }
  };
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };

  render() {
    console.log(this.state.data);
    const {
      movie_id,
      movie_name,
      movie_category,
      movie_release_date,
      movie_duration,
      movie_director,
      movie_cast,
      movie_synopsis,
      movie_image,
    } = this.state.data;
    localStorage.setItem(`timeBook`, this.state.selectedTime);

    return (
      <>
        <Container>
          <NavBar login={this.state.isLogin} />
          <Container fluid>
            <Row>
              <Col sm={4}>
                <Card className={styles.cardImg}>
                  <Card.Img
                    src={`http://localhost:3001/api/${movie_image}`}
                    className={styles.imgMain}
                  />
                </Card>
              </Col>
              <Col sm={8}>
                <div className={styles.dataMv}>
                  <p className={styles.mvTitle}>{movie_name}</p>
                  {localStorage.setItem(`movieName`, `${movie_name}`)}
                  <p className={styles.mvCategory}>{movie_category}</p>
                </div>
                <div>
                  <p className={styles.subMv}>Release Date</p>
                  <p className={styles.mainMv}>{movie_release_date}</p>
                </div>
                <div>
                  <p className={styles.subMv}>Duration</p>
                  <p className={styles.mainMv}>{movie_duration}</p>
                </div>
                <div>
                  <p className={styles.subMv}>Directed by</p>
                  <p className={styles.mainMv}>{movie_director}</p>
                </div>
                <div>
                  <p className={styles.subMv}>Cast</p>
                  <p className={styles.mainMv}>{movie_cast}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.syn}>
                  <p className={styles.synName}>Synopsis</p>
                  <p className={styles.synContent}>{movie_synopsis}</p>
                </div>
              </Col>
            </Row>
            <Premiere
              selectUser={this.selectedUser.bind(this)}
              selectStyle={this.state.isSelect}
              movieId={movie_id}
            />
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Movies;
