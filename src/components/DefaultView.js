import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styles from "./DefaultView.css";
import Button from "./Button";
import ConfirmEmailModal from "./ConfirmEmailModal";
import PersonalEmailWarning from "./PersonalEmailWarning";
import FormInput from "./FormInput";
import {
  emailPreValidation,
  companyPreValidation
} from "../services/api-helper";

const DefaultView = props => {
  const [inputValue, setInputValue] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [toNewCo, setToNewCo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [companyIsValid, setCompanyIsValid] = useState(false);

  const data = {
    // companies: ["google", "facebook", "vidmob"],
    // emails: ["jc@vidmob.com", "brittany@google.com"],
    personalEmails: ["gmail", "outlook", "yahoo"]
  };

  console.log(email);

  useEffect(() => {
    if (inputValue.includes("@" && ".") === true) {
      setEmail(inputValue);
    } else {
      setEmail("");
      setEmailIsValid(false);
    }
    if (email.length >= 1) {
      splitEmail(email);
    } else {
      setBusinessName("");
      setCompanyIsValid(false);
    }
  });

  useEffect(() => {
    const getEmailValidation = async () => {
      const newStatus = await emailPreValidation(email);
      console.log("this is email validation", newStatus);
      setEmailIsValid(newStatus);
    };
    getEmailValidation();
  }, [email]);

  useEffect(() => {
    const getCompanyValidation = async () => {
      const newStatus = await companyPreValidation(businessName);
      console.log("this is company validation", newStatus);
      setCompanyIsValid(newStatus);
    };
    getCompanyValidation();
  }, [businessName]);

  const handleChange = event => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
    setShowError(false);
  };

  const handleClick = e => {
    e.preventDefault();
    if (email.length >= 1 === true) {
      // if (data.emails.includes(email) === true) {
      if (emailIsValid === false) {
        setShowError(true);
        // } else if (data.companies.includes(businessName) === true) {
      } else if (companyIsValid === false) {
        setShowModal(true);
      } else if (data.personalEmails.includes(businessName) === true) {
        setShowEmailWarning(true);
      } else {
        setToNewCo(true);
      }
    } else {
      // return null;
      return setInputValue("");
    }
  };

  const splitEmail = email => {
    let firstSplit = email.split("@");
    let secondSplit = firstSplit[1].split(".");
    secondSplit.pop();
    let domain = secondSplit.toString();
    setBusinessName(domain);
  };

  return (
    <>
      {toNewCo ? (
        <Redirect
          push
          to={{
            pathname: "/new_company",
            state: email
          }}
        />
      ) : null}
      <div className={styles.container}>
        <PersonalEmailWarning showEmailWarning={showEmailWarning} />
        <ConfirmEmailModal showModal={showModal} email={email} />
        <div className={showError ? styles.modal : styles.disabledModal}>
          <p className={styles.error_message}>
            That email looks like it’s already taken. Do you want to{" "}
            <span className={styles.login_reset}>login </span>or{" "}
            <span className={styles.login_reset}>reset your password</span>?
          </p>
        </div>
        <div className={styles.getStarted}>Get started on VidMob</div>
        <div className={styles.workEmail}>Enter your work email.</div>
        <div className={styles.line} />
        <form>
          <div
            className={
              showError
                ? styles.email_input_container_error
                : styles.email_input_container
            }
          >
            <FormInput
              type={"email"}
              placeholder={"name@company.com"}
              className={styles.email_input}
              onChange={event => handleChange(event)}
              value={inputValue}
            />
          </div>
          <Button className={styles.defaultViewBtn} onClick={handleClick}>
            NEXT
          </Button>
        </form>
      </div>
    </>
  );
};

export default DefaultView;
