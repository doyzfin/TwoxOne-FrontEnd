import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Modal,
  Button,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ReactPaginate from "react-paginate";
import qs from "query-string";

import Search from "../assets/img/Vector.svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDataUser } from "../redux/actions/profile";
import { login } from "../redux/actions/auth";
import { getAllMovie } from "../redux/actions/movie";

class NavBar extends Component {
  constructor() {
    super();
    const urlParams = qs.parse(window.location.search);
    this.state = {
      data: {},
      dataMovie: [],
      pagination: {},
      isLogin: "",
      show: false,
      search: urlParams.search ? urlParams.search : "",
      sort: urlParams.sort ? urlParams.sort : "movie_id ASC",
      page: urlParams.page ? urlParams.page : 1,
      limit: urlParams.limit ? urlParams.limit : 4,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("userId");
    this.props.getDataUser(id).then((res) => {
      this.setState({ data: res.action.payload.data.data[0] });
    });
  }
  getAllMovie = () => {
    let urlParam = `?page=${this.state.page}&limit=${this.state.limit}`;
    if (this.state.search) {
      urlParam += `&search=${this.state.search}`;
    }
    if (this.state.sort) {
      urlParam += `&sort=${this.state.sort}`;
    }
    this.props.history.push(`/home/${urlParam}`);
    this.props
      .getAllMovie(
        this.state.search,
        this.state.sort,
        this.state.page,
        this.state.limit
      )
      .then((res) => {
        this.setState({ dataMovie: res.action.payload.data.data });
        this.setState({ pagination: res.action.payload.data.pagination });
      });
  };
  handleNavbar = (event) => {
    event.preventDefault();
    this.props.history.push("/home");
  };
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getAllMovie();
    });
  };
  handleShow = (event) => {
    this.setState({ show: true });
    this.setState({ [event.target.data]: event.target.value });
  };
  handleClose = () => {
    this.setState({ show: false });
    this.setState({ search: "" });
    this.props.history.push("/home");
  };
  getUserDataId = () => {
    this.props.getUserData();
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.props.history.push("/login");
  };
  changeText = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand onClick={(event) => this.handleNavbar(event)}>
            <p className={styles.mainLogo}>TwoxOne</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mr.auto">
            {this.state.data.user_type === "admin" ? (
              <Nav className="mr-auto">
                <Nav.Item>
                  <Link to="/home" className={styles.link1}>
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/dashboard" className={styles.link1}>
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/admin-page" className={styles.link1}>
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
                  <Link
                    to={`profile-page/${localStorage.getItem("userId")}`}
                    className={styles.link1}
                  >
                    Profile
                  </Link>
                </Nav.Item>
              </Nav>
            )}

            <img
              alt=""
              src={Search}
              className={styles.search}
              onClick={(event) => this.handleShow(event)}
            />
            <Modal show={show} onHide={this.handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Search Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Control
                    placeholder="Search Movie Name"
                    size="lg"
                    className={styles.control}
                    value={this.state.search}
                    name="search"
                    onChange={(event) => this.changeText(event)}
                  />
                  <Button
                    className={styles.btnSearch}
                    onClick={this.getAllMovie}
                  >
                    Search
                  </Button>
                </Form>
              </Modal.Body>
              <Row className={styles.rowCard}>
                {this.state.dataMovie.map((item, index) => {
                  return (
                    <Col key={index}>
                      <Card className={styles.cardMovie}>
                        <img
                          alt="card"
                          src={`http://localhost:3001/backend1/api/${item.movie_image}`}
                          className={styles.imgCard}
                        />
                        <p>{item.movie_name}</p>
                      </Card>
                    </Col>
                  );
                })}
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pagination.totalPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={styles.pagination}
                  subContainerClassName={`${styles.pages}${styles.pagination}`}
                  activeClassName={styles.active}
                />
              </Row>
              <Modal.Footer>© 2020 Tickitz. All Rights Reserved.</Modal.Footer>
            </Modal>
            <Button className={styles.btn} onClick={this.handleLogout}>
              Logout
            </Button>
            <img
              alt="profile"
              src={`http://localhost:3001/backend1/api/user/${this.state.data.user_image}`}
            />
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
  movie: state.movie,
});

const mapDispatchToProps = { getDataUser, login, getAllMovie };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
