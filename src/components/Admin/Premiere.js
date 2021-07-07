import React, { Component } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Sponsor1 from "../../assets/img/1.png";
import styles from "./Premiere.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSchedule } from "../../redux/actions/admin";

class Premiere extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      timeSelect: [
        "08.30",
        "10.30",
        "12.00",
        "02.00",
        "04.00",
        "07.00",
        "08.30",
      ],
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],

      myDays: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
      x: "",
    };
  }
  componentDidMount() {}

  handleDelete = (id) => {
    this.props.deleteSchedule(id).then((res) => {
      alert("Success Delete");
      this.props.getDataPremiere();
    });
  };
  handleOrder = () => {
    this.props.history.push("/order-page");
  };
  handleSort = (event) => {
    event.preventDefault();
    this.setState({ [event.target.x]: event.target.value });
  };
  render() {
    return (
      <>
        <Container>
          <Row className={styles.overRow}>
            {this.props.data.map((item, index) => {
              let date = new Date();

              let day = date.getDate();

              let month = date.getMonth();
              // let thisDay1 = this.state.myDays[thisDay];
              // let thisDay = date.getDay(),
              //   thisDay1;

              let yy = date.getYear();

              let year = yy < 1000 ? yy + 1900 : yy;

              const Hari = new Date().getDay();

              localStorage.setItem(
                `dateTime`,
                `${
                  this.state.myDays[Hari] +
                  "," +
                  day +
                  " " +
                  this.state.months[month] +
                  " " +
                  year
                }`
              );
              // const date = item.schedule_date.slice(0, 10);
              // localStorage.setItem(`date`, date);
              return (
                <Col sm={4} key={index}>
                  <Card className={styles.mainCard}>
                    <Card.Title>
                      <Row>
                        <Col xs={6}>
                          <div className={styles.centerImg}>
                            <img
                              src={Sponsor1}
                              alt=""
                              className={styles.sponsor}
                            />
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className={styles.centerText}>
                            <p className={styles.nameSponsor}>
                              {item.premiere_name}
                              {localStorage.setItem(
                                `premiereName`,
                                item.premiere_name
                              )}
                            </p>
                            <p className={styles.addressSponsor}>
                              {item.location_address}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Title>

                    <hr />
                    <Card.Body>
                      <Row>
                        {this.state.timeSelect.map((item, index) => {
                          return (
                            <>
                              <Col
                                xs={3}
                                className={
                                  this.props.selectStyle
                                    ? styles.selectedTime
                                    : styles.time
                                }
                                key={index}
                              >
                                {item}
                              </Col>
                            </>
                          );
                        })}
                      </Row>
                      <Row className={styles.boxPrice}>
                        <Col xs={6} className={styles.namePrice}>
                          Price
                        </Col>
                        <Col xs={6} className={styles.price}>
                          ${item.premiere_price}/Seat
                          {localStorage.setItem(
                            `price`,
                            `${item.premiere_price}`
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6}>
                          <Button
                            block
                            variant="outline-primary"
                            className={styles.btnUpdt}
                            onClick={() => this.props.setUpdate(item)}
                            // onClick={() => handleUpdate(data)}
                          >
                            Update
                          </Button>
                        </Col>
                        <Col sm={6}>
                          <Button
                            block
                            variant="outline-primary"
                            className={styles.btnDlt}
                            onClick={() => this.handleDelete(item.premiere_id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = { deleteSchedule };

export default connect(null, mapDispatchToProps)(withRouter(Premiere));
