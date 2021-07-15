import React, { Component } from "react";
import styles from "./Home.module.css";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axiosApiIntances from "../../../utils/axios";
import ModalView from "../../../components/Home/ModalViewAll";
import Cards from "../../../components/Home/Cards";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HomeImg from "../../../assets/img/Group 15.png";
import Line from "../../../assets/img/Line 7.png";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { getAllMovie } from "../../../redux/actions/movie";
import ReactPaginate from "react-paginate";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: [],
      data2: [],
      isLogin: false,
      setModalShow: false,
      isClose: false,
      isUp: false,
      isMonth: false,
      isAdmin: false,
      month: [
        {
          numMonth: "09",
          month: "September",
        },
        {
          numMonth: "10",
          month: "October",
        },
        {
          numMonth: "11",
          month: "November",
        },
        {
          numMonth: "12",
          month: "December",
        },

        {
          numMonth: "01",
          month: "January",
        },
        {
          numMonth: "02",
          month: "Febuary",
        },
        {
          numMonth: "03",
          month: "March",
        },
        {
          numMonth: "04",
          month: "April",
        },
        {
          numMonth: "05",
          month: "May",
        },
      ],
      button: "",
      search: "",
      sort: "",
      page: 1,
      limit: 4,
      pagination: {},
    };
  }
  componentDidMount() {
    this.getData();
    this.getDataMonth();
  }
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };
  getData = () => {
    const { search, sort, page, limit } = this.state;
    this.props.getAllMovie(search, sort, page, limit).then((res) => {
      this.setState({
        data: res.value.data.data,
        pagination: res.value.data.pagination,
      });
    });
  };
  getDataMonth = (numMonth) => {
    axiosApiIntances
      .get(`movie/month/${numMonth}`)
      .then((res) => {
        this.setState({ data2: res.data.data });
      })
      .catch((err) => console.log(err));
  };
  handleMonth = (numMonth) => {
    if (this.state.button !== numMonth) {
      this.setState({ isMonth: true, button: numMonth });
    } else {
      this.setState({ isMonth: false, button: numMonth });
    }

    this.getDataMonth(numMonth);
  };
  handleImage = (event) => {
    event.preventDefault();
    this.props.history.push("/movie-page");
  };
  handleMovieDetails = (event, id) => {
    event.preventDefault();
    this.props.history.push(`/movie-page/${id}`);
  };
  handleModalView = () => {
    this.setState({ setModalShow: true, isUp: false });
  };
  handleClose = () => {
    this.setState({ setModalShow: false });
  };
  handleViewAll = () => {
    this.setState({ setModalShow: true, isUp: true });
  };
  handleLogout = () => {
    this.props.logout();
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    const { setModalShow, isUp, isMonth } = this.state;

    return (
      <>
        <Container>
          <NavBar login={this.state.isLogin} handleLogout={this.handleLogout} />
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
                <p className={styles.view} onClick={this.handleModalView}>
                  View All
                </p>
                <ModalView
                  show={setModalShow}
                  handleClose={this.handleClose}
                  getData={this.state.data}
                  getAllMovie={this.getData}
                  mv={this.handleMovieDetails}
                  upComing={this.handleViewAll}
                />
              </Col>
            </Row>
            <Row className={styles.allMovies}>
              {this.props.movie.data.map((item, index) => {
                const { movie_id, movie_image } = item;
                return (
                  <Col sm={3} className={styles.imgAll} key={index}>
                    {
                      <div className={styles.image}>
                        <img
                          className={styles.image__img}
                          src={`https://twoxone-app.herokuapp.com/backend1/api/${movie_image}`}
                          onClick={(event) =>
                            this.handleMovieDetails(event, movie_id)
                          }
                          alt="Bricks"
                        />
                        <div
                          className={styles.image__overlay}
                          onClick={(event) =>
                            this.handleMovieDetails(event, movie_id)
                          }
                        >
                          <div className={styles.image__title}>
                            {item.movie_name}
                          </div>
                          <p className={styles.image__description}>
                            {item.movie_category}
                          </p>
                        </div>
                      </div>
                    }
                  </Col>
                );
              })}
            </Row>
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.props.movie.pagination.totalPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={styles.pagination}
              subContainerClassName={`${styles.pages}${styles.pagination}`}
              activeClassName={styles.active}
            />
          </Container>
          <Container className={styles.Cont2}>
            <Row>
              <Col xs={8}>
                <div className={styles.boxShow}>
                  <p className={styles.now1}>Upcoming Movies</p>
                </div>
              </Col>
              <Col xs={4}>
                <p className={styles.view} onClick={this.handleViewAll}>
                  View All
                </p>
                <ModalView
                  show={setModalShow}
                  handleClose={this.handleClose}
                  getData={this.state.data}
                  mv={this.handleMovieDetails}
                  upComing={isUp}
                  pagination={this.state.pagination}
                />
              </Col>
            </Row>
            <div className={styles.flexContainer}>
              {this.state.month.map((item, index) => {
                return (
                  <Button
                    key={index}
                    className={styles.btnMonth}
                    onClick={() => this.handleMonth(item.numMonth)}
                  >
                    {item.month}
                  </Button>
                );
              })}
            </div>
            <Cards
              data={this.state.data}
              data2={this.state.data2}
              mvDetails={this.handleMovieDetails}
              month={isMonth}
            />
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie,
});

const mapDispatchToProps = { logout, getAllMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
