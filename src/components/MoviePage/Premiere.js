import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Sponsor1 from "../../assets/img/1.png";
// import Sponsor2 from "../../assets/img/2.png";
// import Sponsor3 from "../../assets/img/3.png";

class Premiere extends Component {
  render() {
    return (
      <>
        <center>
          <h1>Showtimes and Ticket</h1>
          <div inline>
            <input type="date" />
            <select>
              <option>Purwokerto</option>
              <option>Jakarta</option>
              <option>Bogor</option>
              <option>Bandung</option>
            </select>
          </div>
        </center>
        <Row>
          <Col xs={4}>
            <Card.Title>
              <Row>
                <Col xs={6}>
                  <img src={Sponsor1} alt="" />
                </Col>
                <Col xs={6}>
                  <p>ebv.id</p>
                  <p>Whatever street No.12, South Purwokerto</p>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
              </Row>
              <Row>
                <Col xs={6}>Price</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Button className="btn-block">Book Now</Button>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Title>
              <Row>
                <Col xs={6}>
                  <img src={Sponsor1} alt="" />
                </Col>
                <Col xs={6}>
                  <p>ebv.id</p>
                  <p>Whatever street No.12, South Purwokerto</p>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
              </Row>
              <Row>
                <Col xs={6}>Price</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Button className="btn-block">Book Now</Button>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Title>
              <Row>
                <Col xs={6}>
                  <img src={Sponsor1} alt="" />
                </Col>
                <Col xs={6}>
                  <p>ebv.id</p>
                  <p>Whatever street No.12, South Purwokerto</p>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
              </Row>
              <Row>
                <Col xs={6}>Price</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Button className="btn-block">Book Now</Button>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Title>
              <Row>
                <Col xs={6}>
                  <img src={Sponsor1} alt="" />
                </Col>
                <Col xs={6}>
                  <p>ebv.id</p>
                  <p>Whatever street No.12, South Purwokerto</p>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
              </Row>
              <Row>
                <Col xs={6}>Price</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Button className="btn-block">Book Now</Button>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Title>
              <Row>
                <Col xs={6}>
                  <img src={Sponsor1} alt="" />
                </Col>
                <Col xs={6}>
                  <p>ebv.id</p>
                  <p>Whatever street No.12, South Purwokerto</p>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
              </Row>
              <Row>
                <Col xs={6}>Price</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Button className="btn-block">Book Now</Button>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Title>
              <Row>
                <Col xs={6}>
                  <img src={Sponsor1} alt="" />
                </Col>
                <Col xs={6}>
                  <p>ebv.id</p>
                  <p>Whatever street No.12, South Purwokerto</p>
                </Col>
              </Row>
            </Card.Title>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
                <Col xs={3}>08.30</Col>
              </Row>
              <Row>
                <Col xs={6}>Price</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Button className="btn-block">Book Now</Button>
            </Card.Body>
          </Col>
        </Row>
      </>
    );
  }
}

export default Premiere;
