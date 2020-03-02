import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styles from "./ConfirmEmailModal.css";
import Button from "./Button";
import emailSvg from "../images/ic-large-email-generic.svg";

const ConfirmEmailModal = props => {
  const [toExCo, setToExCo] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setToExCo(true);
  };

  return (
    <>
      {toExCo ? <Redirect to="/existing_company" /> : null}
      <div
        className={props.showModal ? styles.overlay : styles.disabledOverlay}
      >
        <div className={styles.close_container}>
          <div className={styles.close_text}>CLOSE</div>
          <Button onClick={handleClick} className={styles.btn_close}>
            <svg
              className={styles.close_icon}
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
            >
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"
              />
            </svg>
          </Button>
        </div>
        <div className={styles.modal_container}>
          <div className={styles.email_icon_container}>
            <img src={emailSvg} className={styles.email_icon} />
          </div>
          <div className={styles.modal_title}>That looks familiar</div>
          <div className={styles.modal_message}>
            That email looks like it’s part of an exisitng company. Check your
            email for an invite to your company.
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmEmailModal;
