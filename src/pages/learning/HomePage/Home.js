import React, { Component } from "react";
import axiosApiIntances from "../../../utils/axios";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import NavBar from "../../../components/learning/NavBar";
import Cards from "../../../components/learning/Card";
import { Container, Form, Button, Row, Col, Spinner } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
        movieImage: null,
      },
      data: [],
      pagination: {},
      page: 1,
      limit: 5,
      isLoading: false,
      isUpdate: false,
      id: "",
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    console.log("Get Data");
    const { page, limit } = this.state;

    this.setState({ isLoading: true });
    axiosApiIntances
      .get(`movie?page=${page}&limit=${limit}`)
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.data, pagination: res.data.pagination });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      });
  };
  changeText = (event) => {
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
        movieReleaseDate: "",
      },
    });
  };
  handleImage = (event) => {
    this.setState({
      form: { ...this.state.form, movieImage: event.target.files[0] },
    });
  };
  submitData = (event) => {
    event.preventDefault();
    console.log("Save Data");
    // console.log(this.state.form);
    const formData = new FormData();
    formData.append("movieName", this.state.form.movieName);
    formData.append("movieCategory", this.state.form.movieCategory);
    formData.append("movieReleaseDate", this.state.form.movieReleaseDate);
    formData.append("movieImage", this.state.form.movieImage);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };
  setUpdate = (data) => {
    console.log(data);
    console.log("setUpdate");
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieCategory: data.movie_category,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
      },
    });
  };

  updateData = (event) => {
    event.preventDefault();
    console.log(this.state.form);
    console.log(this.state.id);
    console.log("Update");
    this.setState({ isUpdate: false });
    this.resetData(event);
  };
  deleteData = (id) => {
    console.log(id);
    console.log("Delete");
  };
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };

  render() {
    console.log(this.state);
    const { totalPage } = this.state.pagination;
    const { isLoading, isUpdate } = this.state;
    const { movieName, movieCategory, movieReleaseDate } = this.state.form;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Home Page !</h1>
          <NavBar />
          <div className={styles.containerForm}>
            <Form
              onSubmit={isUpdate ? this.updateData : this.submitData}
              onReset={this.resetData}
            >
              <Form.Group>
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Movie Name"
                  name="movieName"
                  value={movieName}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Movie Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Movie Category"
                  name="movieCategory"
                  value={movieCategory}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Movie Release Date</Form.Label>
                <Form.Control
                  type="date"
                  name="movieReleaseDate"
                  value={movieReleaseDate}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Movie Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(event) => this.handleImage(event)}
                />
              </Form.Group>
              <Button variant="primary" type="reset">
                Reset
              </Button>
              <Button variant="primary" type="submit">
                {isUpdate ? "Update" : "Submit"}
              </Button>
            </Form>
          </div>
          <hr />
          <Row>
            {isLoading ? (
              <Col md={12}>
                <Spinner animation="border" variant="primary" />
              </Col>
            ) : (
              this.state.data.map((item, index) => {
                return (
                  <Col md={4} key={index}>
                    <Cards
                      data={item}
                      handleUpdate={this.setUpdate.bind(this)}
                      handleDelete={this.deleteData.bind(this)}
                    />
                  </Col>
                );
              })
            )}
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
        </Container>
      </>
    );
  }
}

export default Home;
