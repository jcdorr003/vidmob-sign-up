import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./NewCoSignUp.css";
import FormInput from "./FormInput";
import Button from "./Button";

const NewCoSignUp = () => {
  const [toSignUpMode, setToSignUpMode] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setToSignUpMode(true);
  };

  return (
    <>
      {toSignUpMode ? <Redirect to="/sign_up_mode" /> : null}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.get_started_message}>
            Get started on VidMo<span className={styles.b_span}>b</span>
          </p>
          <p className={styles.instructions}>
            Your email wasn’t associated with an existing company. Fill out the
            information below to create a new one.
          </p>
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
            <div className={styles.company_container}>
              <FormInput
                type={"text"}
                placeholder={"Company Name"}
                className={styles.company_input}
              />
            </div>
            <Button onClick={handleClick} className={styles.signup_btn}>
              SIGN UP
            </Button>
          </form>
        </div>
        <p className={styles.tc_message}>
          By selecting Sign Up, you agree to our{" "}
          <span className={styles.tc}>Terms {"&"} Conditions</span>
        </p>
      </div>
    </>
  );
};

export default NewCoSignUp;
