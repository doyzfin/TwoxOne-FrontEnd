import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { connect } from "react-redux";
import {
  getChart,
  getLocation,
  getMovieId,
} from "../../../redux/actions/admin";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styles from "./Dashboard.module.css";

function Dashboard(props) {
  const [data, setData] = useState([]);
  const [dataLoc, setDataLoc] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [premiereName, setPremiereName] = useState("");

  const premiere = ["CGX", "EBV", "XX1"];

  const getDataChart = () => {
    setIsClick(true);
    props.getChart(movieId, premiereName, locationId).then((res) => {
      setData(res.value.data.data);
    });
    props.getLocation().then((res) => {
      setDataLoc(res.value.data.data);
    });
    props.getMovieId().then((res) => {
      setDataMovie(res.value.data.data);
    });
  };
  const handleReset = () => {
    setIsClick(false);
    setLocationId("");
    setMovieId("");
    setPremiereName("");
  };
  const handleLoc = (event) => {
    setLocationId(event.target.value);
  };
  const handleMovie = (event) => {
    setMovieId(event.target.value);
  };
  const handlePremiere = (event) => {
    setPremiereName(event.target.value);
  };
  return (
    <>
      <Container>
        <NavBar />
        <Row>
          <Col sm={9}>
            <h1 className={styles.dash}>Dashboard</h1>
            <Card className={isClick ? styles.cardDash : styles.clickDash}>
              {isClick ? (
                <LineChart
                  width={800}
                  height={400}
                  data={data}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <Line type="monotone" dataKey="total" stroke="#8884d8" />

                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              ) : (
                <Card.Text className={styles.noGraph}>
                  Please Click "Show" to Show The Graph
                </Card.Text>
              )}
            </Card>
          </Col>
          <Col sm={3}>
            <h1 className={styles.dash}>Filtered</h1>
            <Card className={styles.cardFilter}>
              <Form.Group>
                <Form.Label className={styles.label}>Movie </Form.Label>
                <Form.Control
                  as="select"
                  className={styles.label}
                  onChange={(event) => handleMovie(event)}
                  disabled={!isClick}
                >
                  {dataMovie.map((item, index) => {
                    return (
                      <option
                        key={index}
                        className={styles.label}
                        value={item.movie_id}
                        selected="true"
                      >
                        {item.movie_name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.label}>Premiere </Form.Label>
                <Form.Control
                  as="select"
                  className={styles.label}
                  onChange={(event) => handlePremiere(event)}
                  disabled={!isClick}
                >
                  {premiere.map((item, index) => {
                    return (
                      <option key={index} value={item} className={styles.label}>
                        {item}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.label}>Location </Form.Label>
                <Form.Control
                  as="select"
                  className={styles.label}
                  onChange={(event) => handleLoc(event)}
                  disabled={!isClick}
                >
                  {dataLoc.map((item, index) => {
                    return (
                      <option
                        key={index}
                        className={styles.label}
                        value={item.location_id}
                      >
                        {item.location_name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Button onClick={getDataChart} className={styles.btnFilter}>
                {isClick ? "Filter" : "Show"}
              </Button>
              <Button className={styles.btnReset} onClick={handleReset}>
                Reset
              </Button>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const mapDispatchToProps = { getChart, getLocation, getMovieId };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
