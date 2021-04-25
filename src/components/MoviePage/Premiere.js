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
    };
  }
  componentDidMount() {
    this.getDataPremiere();
  }
  getDataPremiere = () => {
    axiosApiIntances
      .get(`premiere/db`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({ data: res.data.data });
      })
      .catch((err) => console.log(err));
  };

  handleOrder = () => {
    this.props.history.push("/order-page");
  };
  render() {
    console.log(this.props.selectStyle);

    return (
      <>
        <center>
          <div className={styles.upper}>
            <h1 className={styles.show}>Showtimes and Ticket</h1>
            <div inline className={styles.allInput}>
              <input type="date" className={styles.date} />
              <select className={styles.city}>
                <option>Purwokerto</option>
                <option>Jakarta</option>
                <option>Bogor</option>
                <option>Bandung</option>
              </select>
            </div>
          </div>
        </center>
        <Row className={styles.overRow}>
          {this.state.data.map((item, index) => {
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
                              onClick={() => this.props.selectUser(item)}
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
                        ${item.premiere_price}.00/Seat
                        {localStorage.setItem(
                          `price`,
                          `${item.premiere_price}`
                        )}
                      </Col>
                    </Row>
                    <Button
                      block
                      className={styles.btnBook}
                      onClick={this.handleOrder}
                    >
                      Book Now
                    </Button>
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
