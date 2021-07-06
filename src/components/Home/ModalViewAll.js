import React, { Component } from "react";
import { Modal, Card, Row, Col } from "react-bootstrap";
import styles from "./ModalViewAll.module.css";
import ReactPaginate from "react-paginate";
import { getAllMovie } from "../../redux/actions/movie";
import { connect } from "react-redux";

class ModalView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      total: {},
      page: 1,
      limit: 4,
      search: "",
      sort: "movie_id ASC",
    };
  }
  componentDidMount() {
    this.setState = { total: this.props.pagination };
    this.getData();
  }
  getData = () => {
    this.props
      .getAllMovie(
        this.state.search,
        this.state.sort,
        this.state.page,
        this.state.limit
      )
      .then((res) => {
        this.setState = { data: res.action.payload.data.data };
      });
  };
  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState = { page: selectedPage };

    this.props.getAllMovie(
      this.state.search,
      this.state.sort,
      this.state.page + selectedPage,
      this.state.limit
    );
  };
  render() {
    const { show, handleClose, upComing } = this.props;

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
              {this.props.movie.data.map((item, index) => {
                const {
                  movie_name,
                  movie_id,
                  movie_category,
                  movie_release_date,
                  movie_image,
                } = item;
                return (
                  <Col xs={3} key={index}>
                    <Card className={styles.movieCard}>
                      <Card.Img
                        src={`http://localhost:3001/backend1/api/${movie_image}`}
                        className={styles.imgMovie}
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
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.props.movie.pagination.totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={styles.pagination}
                subContainerClassName={`${styles.pages}${styles.pagination}`}
                activeClassName={styles.active}
              />
            </Row>
          </Modal.Body>
          <Modal.Footer>© 2020 Tickitz. All Rights Reserved.</Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
  movie: state.movie,
});

const mapDispatchToProps = { getAllMovie };

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);
