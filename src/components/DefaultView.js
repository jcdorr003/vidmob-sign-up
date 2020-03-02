import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./DefaultView.css";
import Button from "./Button";
import ConfirmEmailModal from "./ConfirmEmailModal";
import EmailError from "./EmailError";

const DefaultView = props => {
  const [inputValue, setInputValue] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [toNewCo, setToNewCo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const data = {
    companies: ["google", "facebook", "vidmob"],
    emails: ["jc@vidmob.com", "brittany@google.com"]
  };

  useEffect(() => {
    if (inputValue.includes("@" && ".") === true) {
      setEmail(inputValue);
    } else {
      setEmail("");
    }
    if (email.length >= 1) {
      splitEmail(email);
    } else setCompany("");
  });

  console.log(email);
  console.log(company);

  const handleChange = event => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  };

  const handleClick = e => {
    e.preventDefault();
    if (email.length >= 1 === true) {
      if (data.emails.includes(email) === true) {
        setShowError(true);
      } else if (data.companies.includes(company) === true) {
        setShowModal(true);
      } else {
        setToNewCo(true);
      }
    } else {
      return null;
    }
  };

  const splitEmail = email => {
    let firstSplit = email.split("@");
    let secondSplit = firstSplit[1].split(".");
    secondSplit.pop();
    let newCompany = secondSplit.toString();
    setCompany(newCompany);
  };

  return (
    <>
      {toNewCo ? <Redirect to="/new_company" /> : null}
      <div className={styles.container}>
        <ConfirmEmailModal showModal={showModal} />
        <EmailError showError={showError} />
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
            <input
              type={"email"}
              placeholder={"name@company.com"}
              className={styles.email_input}
              onChange={handleChange}
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
