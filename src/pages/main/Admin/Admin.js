import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import styles from "./Admin.module.css";
// import Spd from "../../../assets/img/spd.png";
import Cards from "../../../components/Admin/Card";
// import axiosApiIntances from "../../../utils/axios";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import {
  getAllMovie,
  postMovie,
  deleteMovie,
  updateMovie,
} from "../../../redux/actions/movie";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieDirector: "",
        movieCast: "",
        movieReleaseDate: "",
        movieDuration: "",
        movieImage: null,
        movieSynopsis: "",
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
      search: "",
      sort: "",
    };
  }
  componentDidMount() {
    this.getData();
  }
  handleMvDetails = (id) => {
    this.props.history.push(`movie-page/${id}`);
  };
  getData = () => {
    const { page, limit, search, sort } = this.state;

    // this.setState({ isLoading: true });
    // axiosApiIntances
    //   .get(`movie?page=${page}&limit=${limit}`)
    //   .then((res) => {
    //     this.setState({ data: res.data.data, pagination: res.data.pagination });
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setTimeout(() => {
    //       this.setState({ isLoading: false });
    //     }, 1000);
    //   });
    this.props.getAllMovie(search, sort, page, limit).then((res) => {
      this.setState({ data: res.action.payload.data.data });
    });
  };
  updateForm = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value },
    });
  };
  updateSearch = (event) => {
    this.getData();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleImage = (event) => {
    this.setState({
      form: { ...this.state.form, movieImage: event.target.files[0] },
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
        movieImage: null,
      },
      ss: null,
    });
  };
  updateData = (event) => {
    const { id } = this.state;
    console.log(id);
    event.preventDefault();
    const formData = new FormData(); // FORM DATA digunakan untuk menghandle inputan yang memiliki file upload didalamnya
    formData.append("movieName", this.state.form.movieName);
    formData.append("movieDirector", this.state.form.movieDirector);
    formData.append("movieCast", this.state.form.movieCast);
    formData.append("movieDuration", this.state.form.movieDuration);
    formData.append("movieSynopsis", this.state.form.movieSynopsis);
    formData.append("movieImage", this.state.form.movieImage);
    formData.append("movieCategory", this.state.form.movieCategory);
    formData.append("movieReleaseDate", this.state.form.movieReleaseDate);
    this.setState({ isUpdate: false });
    this.props.updateMovie(id, formData).then((res) => {
      alert("Success Update");
      console.log(res);
      this.props.getAllMovie();
      this.resetData(event);
    });
    // axiosApiIntances
    //   .patch(`movie/${id}`, form)
    //   .then((res) => {
    //     this.getData();
    //     this.resetData(event);
    //   })
    //   .catch((err) => console.log(err));
  };
  setUpdate = (data) => {
    // console.log(data);
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieDirector: data.movie_director,
        movieCategory: data.movie_category,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
        movieCast: data.movie_cast,
        movieDuration: data.movie_duration,
        movieSynopsis: data.movie_synopsis,
        // movieImage: this.state.data[0].movie_image,
      },
      ss: this.state.data[0].movie_image,
    });
  };
  deleteData = (id) => {
    this.props.deleteMovie(id).then((res) => {
      this.props.getAllMovie();
      alert("Success DELETE");
    });
    // axiosApiIntances
    //   .delete(`movie/${id}`)
    //   .then((res) => {
    //     this.getData();
    //   })
    //   .catch((err) => console.log(err));
  };
  submitData = (event) => {
    event.preventDefault();
    const formData = new FormData(); // FORM DATA digunakan untuk menghandle inputan yang memiliki file upload didalamnya
    formData.append("movieName", this.state.form.movieName);
    formData.append("movieDirector", this.state.form.movieDirector);
    formData.append("movieCast", this.state.form.movieCast);
    formData.append("movieDuration", this.state.form.movieDuration);
    formData.append("movieSynopsis", this.state.form.movieSynopsis);
    formData.append("movieImage", this.state.form.movieImage);
    formData.append("movieCategory", this.state.form.movieCategory);
    formData.append("movieReleaseDate", this.state.form.movieReleaseDate);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    // const { form } = this.state;
    // axiosApiIntances
    //   .post(`movie/`, form)
    //   .then((res) => {
    //     this.getData();
    //     this.resetData();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.props.postMovie(formData).then((res) => {
      this.props.getAllMovie();
      this.resetData(event);
      alert("Success Post Movie");
    });
  };
  handleSort = () => {
    this.setState({ sort: "movie_name ASC" });
    this.getData();
  };
  handleSort1 = () => {
    this.setState({ sort: "movie_name DESC" });
    this.getData();
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
    const { totalPage } = this.props.movie.pagination;
    // const { isLoading } = this.props.movie;
    // const { totalPage } = this.props.movie.pagination;
    console.log(this.state.sort);
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
                        <Card.Img
                          src={`http://localhost:3001/api/${this.state.ss}`}
                        />
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
                        <center>
                          <Form.Row>
                            <Form.Group as={Col}>
                              <Form.Label className={styles.labelForm1}>
                                Movie Image
                              </Form.Label>
                              <Form.Control
                                type="file"
                                className={styles.controlFormImg}
                                onChange={(event) => this.handleImage(event)}
                                required
                              />
                            </Form.Group>
                          </Form.Row>
                        </center>
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
                      <Dropdown>
                        <Dropdown.Toggle
                          block
                          variant="success"
                          id="dropdown-basic"
                          className={styles.inputSort}
                        >
                          Sort
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={this.handleSort}>
                            A - Z
                          </Dropdown.Item>
                          <Dropdown.Item onClick={this.handleSort1}>
                            Z - A
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        placeholder="Search Movie Name ..."
                        className={styles.inputSearch}
                        name="search"
                        value={this.state.search}
                        onChange={(event) => this.updateSearch(event)}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Card className={styles.mainCardBottom}>
                <Row className={styles.overRow}>
                  {this.props.movie.data.map((item, index) => {
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

const mapStateToProps = (state) => ({
  movie: state.movie,
  auth: state.auth,
});

const mapDispatchToProps = { getAllMovie, postMovie, deleteMovie, updateMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
