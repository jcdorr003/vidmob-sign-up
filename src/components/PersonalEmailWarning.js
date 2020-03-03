import React from "react";
import { Link } from "react-router-dom";
import styles from "./PersonalEmailWarning.css";
import Button from "./Button.js";

const PersonalEmailWarning = props => {
  return (
    <div
      className={
        props.showEmailWarning ? styles.overlay : styles.disabledOverlay
      }
    >
      <div className={styles.modal_container}>
        <div className={styles.modal_title}>
          That looks like a personal email
        </div>
        <div className={styles.modal_message}>
          Press continue to create a new team, or go back to try finding your
          team instead.
        </div>
        <div className={styles.line} />
        <div className={styles.btn_container}>
          <Link to="/">
            <Button className={styles.btn_back}>BACK</Button>
          </Link>
          <Link to="/new_company">
            <Button className={styles.btn_continue}>CONTINUE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalEmailWarning;
