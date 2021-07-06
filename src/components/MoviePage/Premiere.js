import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Sponsor1 from "../../assets/img/1.png";
import styles from "./Premiere.module.css";
import axiosApiIntances from "../../utils/axios";
// import Sponsor2 from "../../assets/img/2.png";
// import Sponsor3 from "../../assets/img/3.png";
import { withRouter } from "react-router-dom";

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
  componentDidMount() {
    const { id } = this.props.match.params;

    this.getDataPremiere(id);
  }
  getDataPremiere = (id) => {
    axiosApiIntances
      .get(`premiere/db/${id}`)
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((err) => console.log(err));
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
        <center>
          <div className={styles.upper}>
            <h1 className={styles.show}>Showtimes and Ticket</h1>
            <div inline className={styles.allInput}>
              <input type="date" className={styles.date} />
              <select className={styles.city}>
                <option
                  value="kota"
                  onClick={(event) => this.handleSort(event)}
                >
                  Purwokerto
                </option>
                <option
                  value="kota"
                  onClick={(event) => this.handleSort(event)}
                >
                  Jakarta
                </option>
                <option
                  value="kota"
                  onClick={(event) => this.handleSort(event)}
                >
                  Bogor
                </option>
                <option
                  value="kota"
                  onClick={(event) => this.handleSort(event)}
                >
                  Bandung
                </option>
              </select>
            </div>
          </div>
        </center>
        <Row className={styles.overRow}>
          {this.state.data.map((item, index) => {
            let date = new Date();

            let day = date.getDate();

            let month = date.getMonth();

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
                      {this.props.selectStyle ? (
                        <>
                          <h1 className={styles.textSchedule}>
                            Schedule Selected{" "}
                            <p className={styles.textTime}>
                              {localStorage.getItem("timeBook")}
                            </p>
                          </h1>
                        </>
                      ) : (
                        this.state.timeSelect.map((item, index) => {
                          return (
                            <>
                              <Col
                                xs={3}
                                className={
                                  this.props.selectStyle
                                    ? styles.selectedTime
                                    : styles.time
                                }
                                onClick={() => this.props.selectUser(item)}
                                key={index}
                              >
                                {item}
                              </Col>
                            </>
                          );
                        })
                      )}
                    </Row>
                    <Row className={styles.boxPrice}>
                      <Col xs={6} className={styles.namePrice}>
                        Price
                      </Col>
                      <Col xs={6} className={styles.price}>
                        Rp{item.premiere_price}/Seat
                        {localStorage.setItem(
                          `price`,
                          `${item.premiere_price}`
                        )}
                      </Col>
                    </Row>
                    {this.props.selectStyle ? (
                      <>
                        <Button
                          block
                          className={styles.btnBook}
                          onClick={this.handleOrder}
                        >
                          Book Now
                        </Button>
                        <Button
                          block
                          className={styles.btnBook1}
                          onClick={this.props.changeTime}
                        >
                          Change Schedule
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          block
                          className={styles.btnBook}
                          onClick={this.handleOrder}
                          disabled
                        >
                          Book Now
                        </Button>
                        <p className={styles.alertSchedule}>
                          Please Select Schedule To Continue
                        </p>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default withRouter(Premiere);
