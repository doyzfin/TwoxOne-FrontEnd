import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import styles from "./Profile.module.css";
import { connect } from "react-redux";
import { getDataUser } from "../../../redux/actions/profile";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isClick: false,
      isClick1: false,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getDataUserId(id);
  }
  getDataUserId = (id) => {
    this.props.getDataUser(id).then((res) => {
      this.setState({ data: res.action.payload.data.data[0] });
    });
  };
  handleClick = () => {
    this.setState({ isClick: true, isClick1: true });
  };
  handleClick1 = () => {
    this.setState({ isClick1: true });
  };
  render() {
    const { isClick, isClick1 } = this.state;

    const { user_name, user_image, user_id } = this.state.data;
    return (
      <>
        <Container>
          <NavBar />
          <Row className={styles.backRow}>
            <Col sm={3}>
              <Card className={styles.mainCard}>
                <p className={styles.info}>INFO</p>

                <img
                  alt=""
                  src={`http://localhost:3001/api/user/${user_image}`}
                  className={styles.userImg}
                />
                <h1 className={styles.userName}>{user_name}</h1>
                <p className={styles.mov}>Moviegoers</p>
              </Card>
            </Col>
            <Col sm={9}>
              <Card className={styles.card1}>
                <div inline>
                  <Link
                    to={`profile-page/${user_id}`}
                    className={isClick1 ? styles.text1 : styles.text2}
                    onClick={this.handleClick1}
                  >
                    Account History
                  </Link>
                  <Link
                    to={`profile-page/${user_id}/history-user`}
                    className={isClick ? styles.text1 : styles.text2}
                    onClick={this.handleClick}
                  >
                    Order History
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
          <Footer />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { getDataUser };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
