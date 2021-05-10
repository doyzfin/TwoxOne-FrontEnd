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
  getDataDb,
  updateDataDb,
} from "../../../redux/actions/admin";
import Sponsor1 from "../../../assets/img/1.png";
import Sponsor2 from "../../../assets/img/2.png";
import Sponsor3 from "../../../assets/img/3.png";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataLoc: [],
      data2: [],
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
      ss: null,
      id: "",
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params);
    // const { id } = this.props.match.params;
    this.getData();
    this.getDataLocation();
    this.getDataPremiere();
  }
  getDataPremiere = () => {
    this.props.getDataDb().then((res) => {
      this.setState({ data2: res.action.payload.data.data });
    });
  };
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
    this.props.postSchedule(form).then((res) => {
      alert("Success Post ");
      this.getDataPremiere();
    });
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
  resetData = (event) => {
    event.preventDefault();
    this.setState({
      form: {
        locationId: "",
        movieId: "",
        premiereName: "",
        premierePrice: "",
        scheduleTime: [],
        scheduleStart: "",
        scheduleEnd: "",
      },
    });
  };
  updateData = (event) => {
    const { id, form } = this.state;
    event.preventDefault();
    this.props.updateDataDb(id, form).then((res) => {
      alert("Update Success");
      this.getDataPremiere();
    });
  };
  handleTime = (item) => {
    // console.log(event);
    console.log(item.target.innerHTML);

    this.setState({
      form: {
        ...this.state.form,
        scheduleTime: [item.target.innerHTML],
      },
    });
  };
  handleMovieId = (mv, event, image) => {
    this.setState({
      form: {
        movieId: mv,
      },
      ss: image,
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
  setUpdate = (data) => {
    console.log(data);
    this.setState({
      id: data.premiere_id,
      isUpdate: true,
      form: {
        locationId: data.location_id,
        movieId: data.movie_id,
        premiereName: data.premiere_name,
        premierePrice: data.premiere_price,
        scheduleStart: data.schedule_date_start,
        scheduleEnd: data.schedule_date_end,
      },
    });
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
    console.log(this.state.id);
    const { isUpdate } = this.state;
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
          <div className={styles.main}>
            <h1 className={styles.title}>Form Schedule</h1>
            <Card className={styles.cardUp}>
              <Row>
                <Col sm={3}>
                  <Card className={styles.cardImg}>
                    <img
                      alt=""
                      src={`http://localhost:3001/api/${this.state.ss}`}
                      className={styles.img1}
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
                          <Form.Label className={styles.label}>
                            Movie
                          </Form.Label>
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
                                      this.handleMovieId(
                                        item.movie_id,
                                        event,
                                        item.movie_image
                                      )
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
                                  <Card>
                                    <img
                                      alt=""
                                      src={Sponsor1}
                                      className={styles.imgSpon}
                                    />
                                  </Card>
                                </Col>
                                <Col>
                                  <Card>
                                    <img
                                      alt=""
                                      src={Sponsor2}
                                      className={styles.imgSpon}
                                    />
                                  </Card>
                                </Col>
                                <Col>
                                  <Card>
                                    <img
                                      alt=""
                                      src={Sponsor3}
                                      className={styles.imgSpon}
                                    />
                                  </Card>
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
                                        className={styles.textTime}
                                        name="scheduleTime"
                                        value={scheduleTime}
                                        onClick={(event) =>
                                          this.handleTime(event)
                                        }
                                        // onChange={(event) =>
                                        //   this.updateForm(event)
                                        // }
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

                    <div className={styles.colRight}>
                      <Button type="reset" className={styles.reset}>
                        Reset
                      </Button>
                      <Button type="submit" className={styles.sbmt}>
                        {isUpdate ? "Update" : "Submit"}
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Card>

            <h1 className={styles.title}>Data Schedule</h1>
            <Card className={styles.cardBottom}>
              <Row>
                <Col>
                  <Premiere
                    data={this.state.data2}
                    setUpdate={this.setUpdate.bind(this)}
                  />
                </Col>
              </Row>
            </Card>
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const mapDispatchToProps = {
  getMovieId,
  postSchedule,
  getLocation,
  getDataDb,
  updateDataDb,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
