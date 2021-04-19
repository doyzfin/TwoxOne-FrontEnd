import React, { Component } from "react";
// import styles from "./HomeReact.module.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./Footer.module.css";
import Logo from "../../assets/img/Tickitz 2.svg";
import Sponsor1 from "../../assets/img/1.png";
import Sponsor2 from "../../assets/img/2.png";
import Sponsor3 from "../../assets/img/3.png";
import logoFollow1 from "../../assets/img/eva_facebook-outline.png";
import logoFollow2 from "../../assets/img/bx_bxl-instagram.png";
import logoFollow3 from "../../assets/img/eva_twitter-outline.png";
import logoFollow4 from "../../assets/img/feather_youtube.png";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="Footer">
          <Container className={Styles.desktop}>
            <Row>
              <Col sm={3}>
                <img alt="" src={Logo} />
                <p className={Styles.logoText}>
                  Stop waiting in line. Buy tickets conveniently, watch movies
                  quietly.
                </p>
              </Col>
              <Col sm={3}>
                <div className={Styles.flexContainer1}>
                  <div className={Styles.colOne}>
                    <p className={Styles.titleFooter}>Explore</p>
                  </div>
                  <div className={Styles.colTwo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      Cinemas
                    </Link>
                  </div>
                  <div className={Styles.colTwo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      Movies List
                    </Link>
                  </div>
                  <div className={Styles.colTwo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      My Ticket
                    </Link>
                  </div>
                  <div className={Styles.colTwo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      Notification
                    </Link>
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <div className={Styles.flexContainer2}>
                  <div className={Styles.colOneImg}>
                    <p className={Styles.titleFooter}>Our Sponsor</p>
                  </div>
                  <div className={Styles.colTwoImg}>
                    <img alt="" src={Sponsor1} />
                  </div>
                  <div className={Styles.colThreeImg}>
                    <img alt="" src={Sponsor2} />
                  </div>
                  <div className={Styles.colFourImg}>
                    <img alt="" src={Sponsor3} />
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <div className={Styles.flexContainer3}>
                  <div className={Styles.colOne}>
                    <p className={Styles.titleFooter}>Follow Us</p>
                  </div>
                  <div className={Styles.colTwoLogo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      Tickitz Cinema id
                    </Link>
                  </div>
                  <div className={Styles.colThreeLogo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      tickitz.id
                    </Link>
                  </div>
                  <div className={Styles.colFourLogo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      tickitz.id
                    </Link>
                  </div>
                  <div className={Styles.colFiveLogo}>
                    <Link to="/movie-page" className={Styles.listFooter}>
                      Tickitz Cinema id
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <p className={Styles.copyright}>
                © 2020 Tickitz. All Rights Reserved.
              </p>
            </Row>
          </Container>

          <Container className={Styles.mobile}>
            <Row>
              <Col sm={3} className={Styles.first}>
                <img alt="" src={Logo} />
                <p className={Styles.logoText}>
                  Stop waiting in line. Buy tickets conveniently, watch movies
                  quietly.
                </p>
              </Col>
              <Col sm={3} className={Styles.second}>
                <div className={Styles.colOne}>
                  <p className={Styles.titleFooter}>Explore</p>
                </div>
                <Row>
                  <Col xs={4}>
                    <div className={Styles.colTwo}>
                      <Link to="/movie-page" className={Styles.listFooter}>
                        Cinemas
                      </Link>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className={Styles.colTwo}>
                      <Link to="/movie-page" className={Styles.listFooter}>
                        Movies List
                      </Link>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className={Styles.colTwo}>
                      <Link to="/movie-page" className={Styles.listFooter}>
                        My Ticket
                      </Link>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className={Styles.colTwo}>
                      <Link to="/movie-page" className={Styles.listFooter}>
                        Notification
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} className={Styles.third}>
                <div className={Styles.colOneImg}>
                  <p className={Styles.titleFooter}>Our Sponsor</p>
                </div>
                <Row>
                  <Col xs={4}>
                    <div>
                      <img alt="" src={Sponsor1} className={Styles.colTwoImg} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div>
                      <img alt="" src={Sponsor2} className={Styles.colTwoImg} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div>
                      <img alt="" src={Sponsor3} className={Styles.colTwoImg} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} className={Styles.four}>
                <div className={Styles.colOne}>
                  <p className={Styles.titleFooter}>Follow Us</p>
                </div>
                <Row>
                  <Col xs={3} className={Styles.logoFollow}>
                    <img src={logoFollow1} alt="" />
                  </Col>
                  <Col xs={3} className={Styles.logoFollow}>
                    <img src={logoFollow2} alt="" />
                  </Col>
                  <Col xs={3} className={Styles.logoFollow}>
                    <img src={logoFollow3} alt="" />
                  </Col>
                  <Col xs={3} className={Styles.logoFollow}>
                    <img src={logoFollow4} alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <p className={Styles.copyright}>
                © 2020 Tickitz. All Rights Reserved.
              </p>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Footer;
