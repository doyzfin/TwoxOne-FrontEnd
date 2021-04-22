import React, { Component } from "react";
import Spd from "../../assets/img/spd.png";
import Jw from "../../assets/img/jw.png";
import Lion from "../../assets/img/lion.png";
import styles from "../../pages/main/Home/Home.module.css";

class Image extends Component {
  render() {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.imgAll}>
          <img alt="" src={Spd} onClick={(event) => this.handleImage(event)} />
        </div>
        <div className={styles.imgAll}>
          <img alt="" src={Lion} />
        </div>
        <div className={styles.imgAll}>
          <img alt="" src={Jw} />
        </div>
        <div className={styles.imgAll}>
          <img alt="" src={Spd} />
        </div>
        <div className={styles.imgAll}>
          <img alt="" src={Lion} />
        </div>
      </div>
    );
  }
}
export default Image;
