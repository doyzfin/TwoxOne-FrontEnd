import React, { Component } from "react";
import styles from "./Register.module.css";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../../../redux/actions/auth";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Google from "../../../assets/img/flat-color-icons_google.png";
import Facebook from "../../../assets/img/bx_bxl-facebook-circle.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
        userPassword: "",
        userName: "",
      },
      isRegis: false,
    };
  }
  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state.form);
    this.props.register(this.state.form).then((result) => {
      this.props.history.push("/activation");
    });
  };
  handlePass = () => {
    const { isPass } = this.state;
    this.setState = { isPass: !isPass };
  };
  render() {
    const { userEmail, userPassword, userName } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col sm={7} className={styles.col1}>
              <div className={styles.purple}>&nbsp;</div>
              <div className={styles.allText}>
                <h1 className={styles.mainText}>TwoxOne</h1>
                <h2 className={styles.subText}>Lets build your account</h2>
                <p className={styles.subBab}>
                  To be a loyal moviegoer and access all of features, your
                  details are required.
                </p>
                <Row>
                  <Col xs={2}>
                    <div className={styles.round}>
                      <p className={styles.number}>1</p>
                    </div>
                    <div className={styles.round1}>
                      <p className={styles.number1}>2</p>
                    </div>
                    <div className={styles.round1}>
                      <p className={styles.number1}>3</p>
                    </div>
                  </Col>
                  <Col xs={9}>
                    <div>
                      <p className={styles.text1}>
                        Fill your additional details
                      </p>
                    </div>
                    <div>
                      <p className={styles.text1}>Activate your account</p>
                    </div>
                    <div>
                      <p className={styles.text1}>Done</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={5} className={styles.col2}>
              <div className={styles.allSign}>
                <h1 className={styles.signText}>
                  Fill your additional details
                </h1>
                <h1 className={styles.signText1}>Sign Up</h1>
              </div>
              <Form onSubmit={this.handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.labelEmail}>Email</Form.Label>
                  <Form.Control
                    className={styles.nameEmail}
                    type="email"
                    placeholder="Write your email"
                    name="userEmail"
                    value={userEmail}
                    onChange={(event) => this.changeText(event)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className={styles.labelPass}>Password</Form.Label>

                  <Form.Control
                    className={styles.namePass}
                    type="password"
                    placeholder="Write your password"
                    name="userPassword"
                    value={userPassword}
                    onChange={(event) => this.changeText(event)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                  <Form.Label className={styles.labelPass}>
                    User Name
                  </Form.Label>

                  <Form.Control
                    className={styles.namePass1}
                    type="text"
                    placeholder="Write your Username"
                    name="userName"
                    value={userName}
                    onChange={(event) => this.changeText(event)}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  block
                  className={styles.submitBtn}
                >
                  Join for free now
                </Button>
                <p className={styles.forgot}>
                  Do you already have an account? &nbsp;
                  <Link to="/login" className={styles.resetNow}>
                    Log in
                  </Link>
                </p>
                <p className={styles.nowText}>Or</p>
              </Form>
              <div className={styles.allButton}>
                {/* <Row>
                  <Col className={styles.button1}> */}
                <Button inline className={styles.btnGoogle}>
                  <Row>
                    <Col xs={4}>
                      <img alt="" src={Google} className={styles.imgGoogle} />
                    </Col>
                    <Col xs={8}>
                      <p className={styles.ggl}>Google</p>
                    </Col>
                  </Row>
                </Button>
                {/* </Col> */}
                {/* <Col className={styles.button2}> */}
                <Button inline className={styles.btnFacebook}>
                  <Row>
                    <Col xs={4}>
                      <img
                        alt=""
                        src={Facebook}
                        className={styles.imgFacebook}
                      />
                    </Col>
                    <Col xs={8}>
                      <p className={styles.fcbk}>Facebook</p>
                    </Col>
                  </Row>
                </Button>
                {/* </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

const mapDispatchToProps = { register };

export default connect(null, mapDispatchToProps)(Register);
