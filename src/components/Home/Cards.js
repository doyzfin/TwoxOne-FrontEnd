import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import styles from "./Cards.module.css";
import Bw from "../../assets/img/Bw.png";

class Cards extends Component {
  render() {
    console.log(this.props);
    const { mvDetails } = this.props;
    return (
      <>
        <Row className={styles.mainRow}>
          {this.props.data.map((item, index) => {
            return (
              <Col className={styles.mainCol}>
                <Card className={styles.cards} key={index}>
                  <Card.Img variant="top" src={Bw} className={styles.img} />
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
