import React from "react";
import styles from "./SignUpMode.css";
import Button from "./Button";
import Toggle from "./Toggle";
import toggleSvg from "../images/ic-selected.svg";
import uncheckedSvg from "../images/ic-unchecked.svg";
import { Link } from "react-router-dom";

const SignUpMode = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form>
          <p className={styles.title}>Company sign up mode</p>
          <p className={styles.instructions}>
            Anyone with a specified email domain can join your team. Otherwise,
            an owner or co-owner will have to invite all team members.
          </p>
          <div className={styles.line} />
          <div className={styles.toggle_container}>
            <div className={styles.icon_container}>
              <img src={toggleSvg} className={styles.icon} />
            </div>
            <p className={styles.any_email_message}>
              Any email from my domains
            </p>
          </div>
          <div className={styles.domain_input_container}>
            <input
              type={"email"}
              placeholder={"Enter one or more domain..."}
              className={styles.domain_input}
            />
          </div>
          <div className={styles.invite_toggle_container}>
            <div className={styles.icon_container}>
              <img src={uncheckedSvg} className={styles.icon} />
            </div>
            <p className={styles.invite_message}>Invite only</p>
          </div>
          <Link to="/">
            <Button className={styles.btn_done}>DONE</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpMode;
