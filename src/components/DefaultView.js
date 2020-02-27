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
        <div>Get started on VidMob</div>
        <div>Enter your work email.</div>
        <FormInput />
        <Button>NEXT</Button>
      </form>
    </div>
  );
};

export default DefaultView;
