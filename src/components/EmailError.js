import React from "react";
import styles from "./EmailError.css";

const EmailError = props => {
  return (
    <>
      <div className={props.showError ? styles.modal : styles.disabledModal}>
        <p className={styles.error_message}>
          That email looks like it’s already taken. Do you want to{" "}
          <span className={styles.login_reset}>login </span>or{" "}
          <span className={styles.login_reset}>reset your password</span>?
        </p>
      </div>
    </>
  );
};

export default EmailError;
