import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import Premiere from "../../../components/Admin/Premiere";
import styles from "./ManageSchedule.module.css";
import { connect } from "react-redux";
import {
  getMovieId,
  postSchedule,
  getLocation,
} from "../../../redux/actions/admin";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataLoc: [],
      form: {
        locationId: "",
        movieId: "",
        premiereName: "",
        premierePrice: "",
        scheduleTime: [],
        scheduleStart: "",
        scheduleEnd: "",
      },
      isUpdate: false,
      time: [
        "00:08:30",
        "00:10:30",
        "00:12:00",
        "00:02:00",
        "00:04:00",
        "00:07:00",
        "00:08:30",
      ],
      ss: [],
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params);
    // const { id } = this.props.match.params;
    this.getData();
    this.getDataLocation();
  }
  getData = () => {
    this.props.getMovieId().then((res) => {
      console.log(res);
      this.setState({ data: res.action.payload.data.data });
    });
    //   axiosApiIntances
    //     .get(`movie/${id}`)
    //     .then((res) => {
    //       this.setState({ data: res.data.data[0] });
    //     })
    //     .catch((err) => console.log(err));
  };
  getDataLocation = () => {
    this.props.getLocation().then((res) => {
      console.log(res);
      this.setState({ dataLoc: res.action.payload.data.data });
    });
    //   axiosApiIntances
    //     .get(`movie/${id}`)
    //     .then((res) => {
    //       this.setState({ data: res.data.data[0] });
    //     })
    //     .catch((err) => console.log(err));
  };
  submitData = (event) => {
    const { form } = this.state;
    event.preventDefault();
    this.props.postSchedule(form).then((res) => console.log(res));
  };
  // getDataPremiere = (id) => {
  //   axiosApiIntances
  //     .get(`premiere/db/${id}`)
  //     .then((res) => {
  //       // console.log(res);
  //       this.setState({ data: res.data.data });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // this.updateForm(event);
  // if (event.target.innerHTML === "08.30") {
  //   // this.setState({ form: { scheduleTime: [] } });
  //   // a = "00:08:30";
  // }

  handleMovieId = (mv, event) => {
    this.setState({
      form: {
        movieId: mv,
      },
    });
  };
  handleLoc = (mv) => {
    this.setState({
      form: {
        ...this.state.form,
        locationId: mv,
      },
    });
  };
  handleTime = (item) => {
    // console.log(event);
    console.log(item.target.innerHTML);

    // this.setState({
    //   form: {
    //     scheduleTime: [...this.state.form.scheduleTime, item.target.innerHTML],
    //   },
    // });
  };
  updateForm = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    console.log(this.state.form);
    // const { isUpdate } = this.state;
    const {
      // locationId,
      // movieId,
      premiereName,
      premierePrice,
      // scheduleTime,
      scheduleStart,
      scheduleEnd,
    } = this.state.form;
    return (
      <>
        <Container>
          <NavBar />

          <h1 className={styles.title}>Form Schedule</h1>
          <Card className={styles.cardUp}>
            <Row>
              <Col sm={3}>
                <Card className={styles.cardImg}>This For Image</Card>
              </Col>
              <Col sm={9}>
                <Form
                  // onSubmit={isUpdate ? this.updateData : this.submitData}
                  onSubmit={this.submitData}
                  onReset={this.resetData}
                >
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label className={styles.label}>Movie</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle
                            block
                            variant="success"
                            id="dropdown-basic"
                            className={styles.loc}
                          >
                            Select Movie
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.state.data.map((item, index) => {
                              const { movieId } = this.state.form;
                              return (
                                <Dropdown.Item
                                  key={index}
                                  name="movieId"
                                  value={movieId}
                                  onClick={(event) =>
                                    this.handleMovieId(item.movie_id, event)
                                  }
                                  onChange={(event) => this.updateForm(event)}
                                >
                                  {item.movie_name}
                                </Dropdown.Item>
                              );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ebu.id"
                              name="premiereName"
                              value={premiereName}
                              className={styles.control}
                              onChange={(event) => this.updateForm(event)}
                            />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Price
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="10"
                              name="premierePrice"
                              value={premierePrice}
                              className={styles.control}
                              onChange={(event) => this.updateForm(event)}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Premiere
                            </Form.Label>
                            <Row>
                              <Col>
                                <Card>A</Card>
                              </Col>
                              <Col>
                                <Card>a</Card>
                              </Col>
                              <Col>
                                <Card>B</Card>
                              </Col>
                            </Row>
                          </Form.Group>
                        </Form.Row>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label className={styles.label}>
                          Location
                        </Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle
                            block
                            variant="success"
                            id="dropdown-basic"
                            className={styles.loc}
                          >
                            Select Location
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.state.dataLoc.map((item, index) => {
                              return (
                                <Dropdown.Item
                                  key={index}
                                  onClick={() =>
                                    this.handleLoc(item.location_id)
                                  }
                                  onChange={(event) => this.updateForm(event)}
                                >
                                  {item.location_name}
                                </Dropdown.Item>
                              );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Date Start
                            </Form.Label>
                            <Form.Control
                              type="date"
                              name="scheduleStart"
                              value={scheduleStart}
                              className={styles.control1}
                              onChange={(event) => this.updateForm(event)}
                            />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Date End
                            </Form.Label>
                            <Form.Control
                              type="date"
                              name="scheduleEnd"
                              value={scheduleEnd}
                              className={styles.control1}
                              onChange={(event) => this.updateForm(event)}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Time
                            </Form.Label>
                            <Row>
                              {this.state.time.map((item, index) => {
                                const { scheduleTime } = this.state.form;
                                // console.log(item);
                                return (
                                  <Col sm={3} key={index}>
                                    <Card
                                      name="scheduleTime"
                                      value={scheduleTime}
                                      onClick={(event) =>
                                        this.handleTime(event)
                                      }
                                      onChange={(event) =>
                                        this.updateForm(event)
                                      }
                                    >
                                      {item.slice(3)}
                                    </Card>
                                  </Col>
                                );
                              })}
                            </Row>
                          </Form.Group>
                        </Form.Row>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                  <Row>
                    <Col>
                      <Button type="submit">Submit</Button>
                      <Button>Reset</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card>

          <h1 className={styles.title}>Data Schedule</h1>
          <Card className={styles.cardBottom}>
            <Row>
              <Col>
                <Premiere />
              </Col>
            </Row>
          </Card>

          <Footer />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const mapDispatchToProps = { getMovieId, postSchedule, getLocation };

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
