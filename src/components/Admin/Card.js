import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
// import Spd from "../../assets/img/spd.png";
import styles from "./Card.module.css";
import { withRouter } from "react-router-dom";

class Cards extends Component {
  render() {
    const {
      movie_name,
      movie_category,
      movie_id,
      movie_image,
      movie_release_date,
    } = this.props.data;
    const { handleUpdate, handleDelete, data, mvHandle } = this.props;
    return (
      <>
        <Card className={styles.cardBottom}>
          <Card.Img
            src={`https://twoxone-app.herokuapp.com/backend1/api/${movie_image}`}
            variant="top"
            className={styles.imgCard}
            onClick={() => mvHandle(movie_id)}
          />
          <Card.Title className={styles.mvTitles}>{movie_name}</Card.Title>
          <Card.Body className={styles.mvCategory}>
            {movie_category}
            <hr />
            {movie_release_date.slice(0, 10)}
          </Card.Body>

          <Card.Body>
            <Button
              block
              variant="outline-primary"
              className={styles.btnUpdt}
              onClick={() => handleUpdate(data)}
            >
              Update
            </Button>

            <Button
              block
              variant="outline-primary"
              className={styles.btnDlt}
              onClick={() => handleDelete(movie_id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);
