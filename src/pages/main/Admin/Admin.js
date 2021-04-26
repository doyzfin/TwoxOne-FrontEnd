import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Admin.module.css";
import Spd from "../../../assets/img/spd.png";
import Cards from "../../../components/Admin/Card";
import axiosApiIntances from "../../../utils/axios";
import ReactPaginate from "react-paginate";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieDirector: "",
        movieCast: "",
        movieReleaseDate: "",
        movieHour: "",
        movieMinute: "",
      },
      data: [],
      isUpdate: false,
      isLoading: false,
      page: 1,
      limit: 4,
      pagination: {},
      id: "",
      show: false,
      setShow: false,
      isAdmin: true,
    };
  }
  componentDidMount() {
    this.getData();
  }
  handleMvDetails = (id) => {
    this.props.history.push(`movie-page/${id}`);
  };
  getData = () => {
    const { page, limit } = this.state;

    this.setState({ isLoading: true });
    axiosApiIntances
      .get(`movie?page=${page}&limit=${limit}`)
      .then((res) => {
        this.setState({ data: res.data.data, pagination: res.data.pagination });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      });
  };
  updateForm = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value },
    });
  };
  resetData = (event) => {
    event.preventDefault();
    this.setState({
      form: {
        movieName: "",
        movieCategory: "",
        movieDirector: "",
        movieCast: "",
        movieReleaseDate: "",
        movieDuration: "",
        movieSynopsis: "",
      },
    });
  };
  updateData = (event) => {
    const { id, form } = this.state;
    console.log(form);
    event.preventDefault();
    this.setState({ isUpdate: false });
    axiosApiIntances
      .patch(`movie/${id}`, form)
      .then((res) => {
        this.getData();
        this.resetData(event);
      })
      .catch((err) => console.log(err));
  };
  setUpdate = (data) => {
    console.log(data);
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieCategory: data.movie_category,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
        movieCast: data.movie_cast,
        movieDuration: data.movie_duration,
        movieSynopsis: data.movie_synopsis,
      },
    });
  };
  deleteData = (id) => {
    axiosApiIntances
      .delete(`movie/${id}`)
      .then((res) => {
        this.getData();
      })
      .catch((err) => console.log(err));
  };
  submitData = (event) => {
    event.preventDefault();

    const { form } = this.state;
    axiosApiIntances
      .post(`movie/`, form)
      .then((res) => {
        this.getData();
        this.resetData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };
  handleClose = () => {
    this.setState({ setShow: false });
  };
  handleSetShow = () => {
    this.setState({ setShow: true });
  };
  render() {
    const {
      movieName,
      movieCategory,
      movieDirector,
      movieCast,
      movieReleaseDate,
      movieDuration,
      movieSynopsis,
    } = this.state.form;
    const { isUpdate, show } = this.state;
    const { totalPage } = this.state.pagination;
    console.log(this.state);
    return (
      <>
        <Container>
          <NavBar login={this.state.isLogin} admin={this.state.isAdmin} />
          <Row className={styles.mainBackground}>
            <Col>
              <h1 className={styles.mainText}>Form Movie</h1>
              <Card className={styles.mainCard1}>
                <Card.Body>
                  <Row>
                    <Col sm={3}>
                      <Card className={styles.cardImg}>
                        <Card.Img src={Spd} />
                      </Card>
                    </Col>
                    <Col sm={9}>
                      <Form
                        onSubmit={isUpdate ? this.updateData : this.submitData}
                        onReset={this.resetData}
                      >
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Movie Name
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Spider-Man: Homecoming"
                                className={styles.controlForm}
                                name="movieName"
                                value={movieName}
                                onChange={(event) => this.updateForm(event)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Director
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Jon Watts"
                                className={styles.controlForm}
                                name="movieDirector"
                                value={movieDirector}
                                onChange={(event) => this.updateForm(event)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Release date
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="07/05/2020"
                                className={styles.controlForm}
                                name="movieReleaseDate"
                                value={movieReleaseDate}
                                onChange={(event) => this.updateForm(event)}
                              />
                            </Form.Group>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Category
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Action, Adventure, Sci-Fi"
                                className={styles.controlForm}
                                name="movieCategory"
                                value={movieCategory}
                                onChange={(event) => this.updateForm(event)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className={styles.labelForm}>
                                Casts
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                                className={styles.controlForm}
                                name="movieCast"
                                value={movieCast}
                                onChange={(event) => this.updateForm(event)}
                              />
                            </Form.Group>

                            <Form.Group as={Col}>
                              <Form.Label className={styles.labelForm1}>
                                Duration Hour
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="02:10:00"
                                className={styles.controlForm}
                                name="movieDuration"
                                value={movieDuration}
                                onChange={(event) => this.updateForm(event)}
                              />
                            </Form.Group>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.labelForm1}>
                              Synopsis
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Synopsis"
                              className={styles.controlForm}
                              name="movieSynopsis"
                              value={movieSynopsis}
                              onChange={(event) => this.updateForm(event)}
                            />
                          </Form.Group>
                        </Form.Row>
                        <div className={styles.btnRight}>
                          <Button className={styles.btnReset} type="reset">
                            Reset
                          </Button>
                          <Button className={styles.btnSubmit} type="submit">
                            {isUpdate ? "Update" : "Submit"}
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={styles.mainBackground}>
            <Col>
              <Row>
                <Col sm={6}>
                  <h1 className={styles.mainText1}>Data Movie</h1>
                </Col>
                <Col sm={6}>
                  <Form inline className={styles.formBottom}>
                    <Form.Group>
                      <Form.Control as="select" className={styles.inputSort}>
                        <option className={styles.inputSort}>Sort</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        placeholder="Search Movie Name ..."
                        className={styles.inputSearch}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Card className={styles.mainCardBottom}>
                <Row className={styles.overRow}>
                  {this.state.data.map((item, index) => {
                    return (
                      <Col sm={3} key={index}>
                        <Cards
                          data={item}
                          handleUpdate={this.setUpdate.bind(this)}
                          handleDelete={this.deleteData.bind(this)}
                          updateData={this.updateData.bind(this)}
                          mvHandle={this.handleMvDetails.bind(this)}
                          show={show}
                          close={this.handleClose}
                          setShow={this.handleSetShow}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Card>
            </Col>
          </Row>

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={styles.pagination}
            subContainerClassName={`${styles.pages}${styles.pagination}`}
            activeClassName={styles.active}
          />

          <Footer />
        </Container>
      </>
    );
  }
}

export default Order;
