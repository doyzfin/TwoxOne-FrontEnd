import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./Cards.module.css";
import Bw from "../../assets/img/Bw.png";
import Tw from "../../assets/img/TW.png";
import Ten from "../../assets/img/Ten.png";

class Cards extends Component {
  render() {
    // console.log(this.props);
    // const { movie_name, movie_category, movie_release_date } = this.props.data;
    return (
      <>
        <div className={styles.flexContainer}>
          <div className={styles.flex}>
            <Card className={styles.cards}>
              <Card.Img variant="top" src={Bw} className={styles.img} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.title}>Black Widow</Card.Title>
                <Card.Text className={styles.category}>
                  Action, Adventure, Sci-Fi
                </Card.Text>
              </Card.Body>
              <Button variant="primary" className={styles.btn}>
                Details
              </Button>
            </Card>
          </div>
          <div className={styles.flex}>
            <Card className={styles.cards}>
              <Card.Img variant="top" src={Tw} className={styles.img} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.title}>The Witches</Card.Title>
                <Card.Text className={styles.category}>
                  Adventure, Comedy, Family
                </Card.Text>
              </Card.Body>
              <Button variant="primary" className={styles.btn}>
                Details
              </Button>
            </Card>
          </div>
          <div className={styles.flex}>
            <Card className={styles.cards}>
              <Card.Img variant="top" src={Ten} className={styles.img} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.title}>Tenet</Card.Title>
                <Card.Text className={styles.category}>
                  Action, Sci-Fi
                </Card.Text>
              </Card.Body>
              <Button variant="primary" className={styles.btn}>
                Details
              </Button>
            </Card>
          </div>
          <div className={styles.flex}>
            <Card className={styles.cards}>
              <Card.Img variant="top" src={Bw} className={styles.img} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.title}>Black Widow</Card.Title>
                <Card.Text className={styles.category}>
                  Action, Adventure, Sci-Fi
                </Card.Text>
              </Card.Body>

              <Button variant="primary" className={styles.btn}>
                Details
              </Button>
            </Card>
          </div>
          <div className={styles.flex}>
            <Card className={styles.cards}>
              <Card.Img variant="top" src={Tw} className={styles.img} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.title}>The Witches</Card.Title>
                <Card.Text className={styles.category}>
                  Adventure, Comedy, Family
                </Card.Text>
              </Card.Body>
              <Button variant="primary" className={styles.btn}>
                Details
              </Button>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
