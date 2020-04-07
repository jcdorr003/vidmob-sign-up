import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styles from "./NewCoSignUp.css";
import FormInput from "./FormInput";
import Button from "./Button";
import Error from "./Error";
import ConfirmEmailModal from "./ConfirmEmailModal";

const NewCoSignUp = props => {
  const [toSignUpMode, setToSignUpMode] = useState(false);
  const [value, setValue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [exCompanyError, setExCompanyError] = useState(false);
  const [email, setEmail] = useState(props.location.state);
  const [firstName, setFirstName] = useState("");

  console.log("this is email state", email);
  console.log("this is first name", firstName);

  console.log("this is props", props.location.state);

  const data = { companies: ["google", "facebook", "vidmob"] };

  useEffect(() => {
    setCompanyName(value);
  });

  const handleChange = event => {
    setValue(event.target.value);
    setExCompanyError(false);
  };

  const handleClick = e => {
    e.preventDefault();
    if (companyName.length >= 1) {
      if (data.companies.includes(companyName.toLowerCase()) === true) {
        setExCompanyError(true);
      } else {
        setToSignUpMode(true);
      }
    } else {
      return setValue("");
    }
  };

  return (
    <>
      {toSignUpMode ? <Redirect to="/sign_up_mode" /> : null}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={exCompanyError ? styles.modal : styles.disabledModal}>
            <p className={styles.error_message}>
              That company looks like it already exists. Try to Find My Team
              using your work email.
            </p>
          </div>

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
                  onChange={handleChange}
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
            <div
              className={
                exCompanyError
                  ? styles.company_container_error
                  : styles.company_container
              }
            >
              <FormInput
                type={"text"}
                placeholder={"Company Name"}
                className={styles.company_input}
                onChange={handleChange}
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
