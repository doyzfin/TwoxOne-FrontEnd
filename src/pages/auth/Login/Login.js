import React, { Component } from "react";
import styles from "./Login.module.css";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Google from "../../../assets/img/flat-color-icons_google.png";
import Facebook from "../../../assets/img/bx_bxl-facebook-circle.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
        userPassword: "",
      },
      isPass: false,
      isError: false,
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
    this.props
      .login(this.state.form)
      .then((result) => {
        localStorage.setItem("token", this.props.auth.data.token);
        localStorage.setItem("userId", this.props.auth.data.user_id);
        localStorage.setItem("refreshToken", this.props.auth.data.refreshToken);

        if (this.props.auth.data.length > 0) {
          alert(`${this.props.auth.msg}`);
        } else {
          this.props.history.push("/home");
        }
      })
      .catch((err) => {
        this.setState({ isError: true });
      });
  };
  handlePass = () => {
    const { isPass } = this.state;
    this.setState = { isPass: !isPass };
  };
  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col sm={7} className={styles.col1}>
              <div className={styles.purple}>&nbsp;</div>
              <div className={styles.allText}>
                <h1 className={styles.mainText}>TwoxOne</h1>
                <p className={styles.noteText}>wait, watch, wow!</p>
              </div>
            </Col>
            <Col sm={5} className={styles.col2}>
              <div className={styles.allSign}>
                <h1 className={styles.signText}>Sign In</h1>
                <p className={styles.signNote}>
                  Sign in with your data that you entered during your
                  registration
                </p>
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
                {this.state.isError && (
                  <Alert
                    variant="danger"
                    style={{
                      textAlign: "center",
                      borderRadius: "16px",
                      fontFamily: "Mulish",
                      fontWeight: "700",
                    }}
                  >
                    {this.props.auth.msg}
                  </Alert>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  block
                  className={styles.submitBtn}
                >
                  Submit
                </Button>
                <p className={styles.forgot}>
                  Forgot your password? &nbsp;
                  <Link to="/reset-page" className={styles.resetNow}>
                    Reset now
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
