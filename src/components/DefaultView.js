import React from "react";
import styles from "./DefaultView.css";
import Button from "./Button";
import FormInput from "./FormInput";
import ConfirmEmailModal from "./ConfirmEmailModal";

const DefaultView = () => {
  return (
    <div className={styles.container}>
      <form>
        <ConfirmEmailModal />
        <div className={styles.getStarted}>Get started on VidMob</div>
        <div className={styles.workEmail}>Enter your work email.</div>
        <div className={styles.line} />
        <div className={styles.email_input_container}>
          <FormInput
            type={"email"}
            placeholder={"name@company.com"}
            className={styles.email_input}
          />
        </div>
        <Button className={styles.defaultViewBtn}>NEXT</Button>
      </form>
    </div>
  );
};

export default DefaultView;
