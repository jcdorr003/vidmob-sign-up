import React from "react";
import styles from "./PersonalEmailWarning.js";
import Button from "./Button.js";

const PersonalEmailWarning = props => {
  return (
    <div
      className={
        props.showEmailWarning ? styles.overlay : styles.disabledOverlay
      }
    >
      <div className={styles.modal_container}>
        <div className={styles.modal_title}>That looks familiar</div>
        <div className={styles.modal_message}>
          That email looks like it’s part of an exisitng company. Check your
          email for an invite to your company.
        </div>
        <div className={styles.line} />
        <div>
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default PersonalEmailWarning;
