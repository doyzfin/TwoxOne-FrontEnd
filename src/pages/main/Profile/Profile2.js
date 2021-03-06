import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./Profile.module.css";
import { connect } from "react-redux";
import { getDataUser } from "../../../redux/actions/profile";
import Sponsor1 from "../../../assets/img/1.png";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isClick: true,
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
    this.setState({ isClick: true });
  };
  handleClick1 = () => {
    this.setState({ isClick1: true });
    this.props.history.push(`/profile-page/${localStorage.getItem("userId")}`);
  };
  render() {
    const { isClick, isClick1 } = this.state;

    // eslint-disable-next-line no-unused-vars
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
                  src={`https://twoxone-app.herokuapp.com/backend1/api/user/${user_image}`}
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
                    className={isClick1 ? styles.text1 : styles.text2}
                    onClick={this.handleClick1}
                  >
                    Account History
                  </Link>
                  <Link
                    className={isClick ? styles.text1 : styles.text2}
                    onClick={this.handleClick}
                  >
                    Order History
                  </Link>
                </div>
              </Card>
              <Card className={styles.ticket}>
                <Row>
                  <Col sm={8}>
                    <p className={styles.textLocal}>
                      {localStorage.getItem("dateTime")}{" "}
                      {localStorage.getItem("timeBook")} pm
                    </p>
                    <h1 className={styles.textLocal1}>
                      {localStorage.getItem("movieName")}
                    </h1>
                  </Col>

                  <Col sm={4}>
                    <img alt="" src={Sponsor1} />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={8}>
                    <Button variant="success">Ticket in Active</Button>
                  </Col>

                  <Col sm={4}>Show Details</Col>
                </Row>
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
