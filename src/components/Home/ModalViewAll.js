import React, { Component } from "react";
import { Modal, Card, Row, Col } from "react-bootstrap";
import spd from "../../assets/img/spd.png";
import styles from "./ModalViewAll.module.css";

class ModalView extends Component {
  componentDidMount() {}

  render() {
    const { show, handleClose, upComing } = this.props;
    console.log(this.props);
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.title}>
              {upComing ? "Upcoming Movies" : "All Movies"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {this.props.getData.map((item, index) => {
                const {
                  movie_name,
                  movie_id,
                  movie_category,
                  movie_release_date,
                } = item;
                return (
                  <Col xs={4} key={index}>
                    <Card>
                      <Card.Img
                        src={spd}
                        onClick={(event) => this.props.mv(event, movie_id)}
                      />
                      <Card.Title className={styles.name}>
                        {movie_name}
                      </Card.Title>
                      <Card.Body className={styles.bottom}>
                        {movie_category}
                        <hr />
                        {movie_release_date.slice(0, 10)}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Modal.Body>
          <Modal.Footer>© 2020 Tickitz. All Rights Reserved.</Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalView;
