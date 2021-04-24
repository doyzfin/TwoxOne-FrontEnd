import React, { Component } from "react";
import { Modal, Card, Row, Col } from "react-bootstrap";
import spd from "../../assets/img/spd.png";

class ModalView extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props);
    const { show, handleClose } = this.props;
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
            <Modal.Title>All Movies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {this.props.getData.map((item, index) => {
                const { movie_name, movie_id } = item;
                return (
                  <Col sm={4}>
                    <Card key={index}>
                      <Card.Img src={spd} onClick={this.props.mv} />
                      <Card.Title>{movie_name}</Card.Title>
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
