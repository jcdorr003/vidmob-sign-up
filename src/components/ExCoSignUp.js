import React, { Fragment } from "react";
import styles from "./ExCoSignUp.css";
import FormInput from "./FormInput";
import Button from "./Button";
import { Link } from "react-router-dom";

const ExCoSignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.join_message}>Join the VidMob team</div>
        <div className={styles.instructions}>
          Your email is associated with an existing company. Fill out the
          information below to finish the setup.
        </div>
        <div className={styles.line} />
        <form>
          <div className={styles.name_container}>
            <div className={styles.first_name_container}>
              <FormInput
                type={"text"}
                placeholder={"First Name"}
                className={styles.first_name_input}
              />
            </div>
            <div className={styles.last_name_container}>
              <FormInput
                type={"text"}
                placeholder={"Last Name"}
                className={styles.last_name_input}
              />
            </div>
          </div>
          <div className={styles.display_name_container}>
            <FormInput
              type={"text"}
              placeholder={`Display Name                                                  ${"(optional)"}`}
              className={styles.display_name_input}
            />
          </div>
          <div className={styles.password_container}>
            <FormInput
              type={"password"}
              placeholder={"Password"}
              className={styles.password_input}
            />
          </div>
          <Link to="/">
            <Button className={styles.signup_btn}>SIGN UP</Button>
          </Link>
        </form>
      </div>

      <div className={styles.tc_message}>
        By selecting Sign Up, you agree to our{" "}
        <span className={styles.tc}>Terms {"&"} Conditions</span>
      </div>
    </div>
  );
};

export default ExCoSignUp;
