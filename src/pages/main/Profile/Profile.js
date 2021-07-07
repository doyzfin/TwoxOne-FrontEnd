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
import {
  getDataUser,
  updateUser,
  updateUserPass,
} from "../../../redux/actions/profile";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isClick: false,
      isClick1: true,

      form: {
        userFirst: "",
        userLast: "",
        userEmail: "",
        userPhone: "",
        userImage: null,
      },
      form2: {
        userPassword: "",
        confirmPassword: "",
      },
      isError: false,
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
    this.props.history.push(
      `/profile-page/history-user/${localStorage.getItem("userId")}`
    );
  };
  handleClick1 = () => {
    this.setState({ isClick1: true });

    this.props.history.push(`/profile-page/${localStorage.getItem("userId")}`);
  };
  updateForm = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value },
    });
  };
  updateFormPass = (event) => {
    this.setState({
      form2: { ...this.state.form2, [event.target.name]: event.target.value },
    });
  };
  resetForm = (event) => {
    event.preventDefault();
    this.setState({
      form: {
        userFirst: "",
        userLast: "",
        userEmail: "",
        userPhone: "",
        userImage: null,
      },
      form2: {
        userPassword: "",
        confirmPassword: "",
      },
    });
  };
  handleImage = (event) => {
    this.setState({
      form: { ...this.state.form, userImage: event.target.files[0] },
    });
  };
  updateData = (event) => {
    const { id } = this.props.match.params;

    event.preventDefault();
    const formData = new FormData(); // FORM DATA digunakan untuk menghandle inputan yang memiliki file upload didalamnya
    formData.append("userFirst", this.state.form.userFirst);
    formData.append("userLast", this.state.form.userLast);
    formData.append("userEmail", this.state.form.userEmail);
    formData.append("userPhone", this.state.form.userPhone);
    formData.append("userImage", this.state.form.userImage);
    this.props
      .updateUser(id, formData)
      .then((res) => {
        alert("Success Update");
        window.location.reload();
        this.getDataUserId(id);
        this.resetForm(event);
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({ isError: true });
        alert(err.response.data.msg);
        this.resetForm(event);
      });
  };
  updateDataPass = (event) => {
    const { id } = this.props.match.params;

    event.preventDefault();

    this.props.updateUserPass(id, this.state.form2).then((res) => {
      alert("Success Update");
      window.location.reload();
      this.getDataUserId(id);
      this.resetForm(event);
    });
  };
  render() {
    const { isClick, isClick1 } = this.state;
    const { userFirst, userLast, userEmail, userPhone } = this.state.form;
    const { userPassword, confirmPassword } = this.state.form2;

    const { user_name, user_image } = this.state.data;
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
                  src={`http://localhost:3001/backend1/api/user/${user_image}`}
                  className={styles.userImg}
                />
                <Form.Control
                  type="file"
                  onChange={(event) => this.handleImage(event)}
                  required
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
                          name="userFirst"
                          value={userFirst}
                          onChange={(event) => this.updateForm(event)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.label}>Email</Form.Label>
                        <Form.Control
                          placeholder="jonasrodrigu123@gmail.com"
                          type="text"
                          className={styles.control}
                          name="userEmail"
                          value={userEmail}
                          onChange={(event) => this.updateForm(event)}
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
                          name="userLast"
                          value={userLast}
                          onChange={(event) => this.updateForm(event)}
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
                            name="userPhone"
                            value={userPhone}
                            onChange={(event) => this.updateForm(event)}
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
                    <Button
                      className={styles.btn1}
                      onClick={(event) => this.updateData(event)}
                    >
                      Update Change
                    </Button>
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
                          name="userPassword"
                          value={userPassword}
                          onChange={(event) => this.updateFormPass(event)}
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
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(event) => this.updateFormPass(event)}
                        />
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card>
              <Form.Row>
                <Form.Group as={Col}>
                  <Button
                    className={styles.btn}
                    onClick={(event) => this.updateDataPass(event)}
                  >
                    Update Change
                  </Button>
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

const mapDispatchToProps = { getDataUser, updateUser, updateUserPass };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
