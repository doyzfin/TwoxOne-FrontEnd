import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Sponsor1 from "../../assets/img/1.png";
import styles from "./Premiere.module.css";
// import Sponsor2 from "../../assets/img/2.png";
// import Sponsor3 from "../../assets/img/3.png";

class Premiere extends Component {
  render() {
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
          <Col sm={4}>
            <Card className={styles.mainCard}>
              <Card.Title>
                <Row>
                  <Col xs={6}>
                    <div className={styles.centerImg}>
                      <img src={Sponsor1} alt="" className={styles.sponsor} />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className={styles.centerText}>
                      <p className={styles.nameSponsor}>ebv.id</p>
                      <p className={styles.addressSponsor}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Title>

              <hr />
              <Card.Body>
                <Row>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    10.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    12.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    02.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    04.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    07.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                </Row>
                <Row className={styles.boxPrice}>
                  <Col xs={6} className={styles.namePrice}>
                    Price
                  </Col>
                  <Col xs={6} className={styles.price}>
                    $10.00/Seat
                  </Col>
                </Row>
                <Button block className={styles.btnBook}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={styles.mainCard}>
              <Card.Title>
                <Row>
                  <Col xs={6}>
                    <div className={styles.centerImg}>
                      <img src={Sponsor1} alt="" className={styles.sponsor} />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className={styles.centerText}>
                      <p className={styles.nameSponsor}>ebv.id</p>
                      <p className={styles.addressSponsor}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Title>

              <hr />
              <Card.Body>
                <Row>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    10.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    12.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    02.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    04.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    07.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                </Row>
                <Row className={styles.boxPrice}>
                  <Col xs={6} className={styles.namePrice}>
                    Price
                  </Col>
                  <Col xs={6} className={styles.price}>
                    $10.00/Seat
                  </Col>
                </Row>
                <Button block className={styles.btnBook}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={styles.mainCard}>
              <Card.Title>
                <Row>
                  <Col xs={6}>
                    <div className={styles.centerImg}>
                      <img src={Sponsor1} alt="" className={styles.sponsor} />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className={styles.centerText}>
                      <p className={styles.nameSponsor}>ebv.id</p>
                      <p className={styles.addressSponsor}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Title>

              <hr />
              <Card.Body>
                <Row>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    10.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    12.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    02.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    04.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    07.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                </Row>
                <Row className={styles.boxPrice}>
                  <Col xs={6} className={styles.namePrice}>
                    Price
                  </Col>
                  <Col xs={6} className={styles.price}>
                    $10.00/Seat
                  </Col>
                </Row>
                <Button block className={styles.btnBook}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={styles.mainCard}>
              <Card.Title>
                <Row>
                  <Col xs={6}>
                    <div className={styles.centerImg}>
                      <img src={Sponsor1} alt="" className={styles.sponsor} />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className={styles.centerText}>
                      <p className={styles.nameSponsor}>ebv.id</p>
                      <p className={styles.addressSponsor}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Title>

              <hr />
              <Card.Body>
                <Row>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    10.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    12.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    02.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    04.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    07.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                </Row>
                <Row className={styles.boxPrice}>
                  <Col xs={6} className={styles.namePrice}>
                    Price
                  </Col>
                  <Col xs={6} className={styles.price}>
                    $10.00/Seat
                  </Col>
                </Row>
                <Button block className={styles.btnBook}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={styles.mainCard}>
              <Card.Title>
                <Row>
                  <Col xs={6}>
                    <div className={styles.centerImg}>
                      <img src={Sponsor1} alt="" className={styles.sponsor} />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className={styles.centerText}>
                      <p className={styles.nameSponsor}>ebv.id</p>
                      <p className={styles.addressSponsor}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Title>

              <hr />
              <Card.Body>
                <Row>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    10.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    12.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    02.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    04.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    07.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                </Row>
                <Row className={styles.boxPrice}>
                  <Col xs={6} className={styles.namePrice}>
                    Price
                  </Col>
                  <Col xs={6} className={styles.price}>
                    $10.00/Seat
                  </Col>
                </Row>
                <Button block className={styles.btnBook}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={styles.mainCard}>
              <Card.Title>
                <Row>
                  <Col xs={6}>
                    <div className={styles.centerImg}>
                      <img src={Sponsor1} alt="" className={styles.sponsor} />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className={styles.centerText}>
                      <p className={styles.nameSponsor}>ebv.id</p>
                      <p className={styles.addressSponsor}>
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Title>

              <hr />
              <Card.Body>
                <Row>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    10.30
                  </Col>
                  <Col xs={3} className={styles.time}>
                    12.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    02.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    04.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    07.00
                  </Col>
                  <Col xs={3} className={styles.time}>
                    08.30
                  </Col>
                </Row>
                <Row className={styles.boxPrice}>
                  <Col xs={6} className={styles.namePrice}>
                    Price
                  </Col>
                  <Col xs={6} className={styles.price}>
                    $10.00/Seat
                  </Col>
                </Row>
                <Button block className={styles.btnBook}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Premiere;
