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
    console.log(this.props.history);
    const { id } = this.props.match.params;
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
                    to="Crad"
                    className={isClick1 ? styles.text1 : styles.text2}
                    onClick={this.handleClick1}
                  >
                    Account History
                  </Link>
                  <Link
                    to={`history-user/${localStorage.getItem("userId")}`}
                    className={isClick ? styles.text1 : styles.text2}
                    onClick={this.handleClick}
                  >
                    Order History
                  </Link>
                </div>
              </Card>
              <Card className={styles.card2} block>
                <h1 className={styles.mainText1}>Details Information</h1>
                <hr />
                <Form>
                  <Form.Row className={styles.rowMain}>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label className={styles.label}>
                          First Name
                        </Form.Label>
                        <Form.Control
                          placeholder="Jonas"
                          type="text"
                          className={styles.control}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.label}>Email</Form.Label>
                        <Form.Control
                          placeholder="jonasrodrigu123@gmail.com"
                          type="text"
                          className={styles.control}
                        />
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label className={styles.label}>
                          Last Name
                        </Form.Label>
                        <Form.Control
                          placeholder="El Rodriguez"
                          type="text"
                          className={styles.control}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.label}>
                          Phone Number
                        </Form.Label>
                        <InputGroup className="mb-2">
                          <InputGroup.Prepend>
                            <InputGroup.Text
                              type="text"
                              className={styles.control1}
                            >
                              +62
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="81445687121"
                            type="text"
                            className={styles.control}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card>

              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Button className={styles.btn1}>Update Change</Button>
                  </Form.Group>
                </Form.Row>
              </Form>
              <Card className={styles.card3}>
                <h1 className={styles.mainText1}>Account Privacy</h1>
                <hr />
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label className={styles.label}>
                          New Password
                        </Form.Label>
                        <Form.Control
                          placeholder="Write your password"
                          type="password"
                          className={styles.control}
                        />
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Group>
                        <Form.Label className={styles.label}>
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          placeholder="Confirm your password"
                          type="password"
                          className={styles.control}
                        />
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card>
              <Form.Row>
                <Form.Group as={Col}>
                  <Button className={styles.btn}>Update Change</Button>
                </Form.Group>
              </Form.Row>
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
