import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import styles from "./Cards.module.css";
// import Bw from "../../assets/img/Bw.png";
import axiosApiIntances from "../../utils/axios";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosApiIntances
      .get(`movie/`)
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.props.month);
    const { mvDetails, month } = this.props;

    return (
      <>
        <Row className={styles.mainRow}>
          {month
            ? this.props.data2.map((item, index) => {
                return (
                  <Col className={styles.mainCol} key={index}>
                    <Card className={styles.cards}>
                      <Card.Img
                        variant="top"
                        src={`http://localhost:3001/api/${item.movie_image}`}
                        className={styles.img}
                      />
                      <Card.Body className={styles.cardBody}>
                        <Card.Title className={styles.title}>
                          {item.movie_name}
                        </Card.Title>
                        <Card.Text className={styles.category}>
                          {item.movie_category}
                        </Card.Text>
                      </Card.Body>
                      <Button
                        variant="primary"
                        className={styles.btn}
                        onClick={(event) => mvDetails(event, item.movie_id)}
                      >
                        Details
                      </Button>
                    </Card>
                  </Col>
                );
              })
            : this.state.data.map((item, index) => {
                return (
                  <Col className={styles.mainCol} key={index}>
                    <Card className={styles.cards}>
                      <Card.Img
                        variant="top"
                        src={`http://localhost:3001/api/${item.movie_image}`}
                        className={styles.img}
                      />
                      <Card.Body className={styles.cardBody}>
                        <Card.Title className={styles.title}>
                          {item.movie_name}
                        </Card.Title>
                        <Card.Text className={styles.category}>
                          {item.movie_category}
                        </Card.Text>
                      </Card.Body>
                      <Button
                        variant="primary"
                        className={styles.btn}
                        onClick={(event) => mvDetails(event, item.movie_id)}
                      >
                        Details
                      </Button>
                    </Card>
                  </Col>
                );
              })}
        </Row>
      </>
    );
  }
}

export default Cards;
