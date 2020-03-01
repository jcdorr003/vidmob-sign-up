import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styles from "./ConfirmEmailModal.css";
import Button from "./Button";

const ConfirmEmailModal = props => {
  const [toExCo, setToExCo] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setToExCo(true);
  };

  return (
    <>
      {toExCo ? <Redirect to="/sign_up/existing_company" /> : null}
      <div
        className={props.showModal ? styles.overlay : styles.disabledOverlay}
      >
        <Button onClick={handleClick} className={styles.btn_close} />
        <div className={styles.modal_container}></div>
      </div>
    </>
  );
};
export default ConfirmEmailModal;
