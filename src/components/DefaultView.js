import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./DefaultView.css";
import Button from "./Button";
import FormInput from "./FormInput";
import ConfirmEmailModal from "./ConfirmEmailModal";

const DefaultView = () => {
  const [inputType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const data = {
    companies: ["google", "facebook", "vidmob"],
    emails: ["jc@vidmob.com", "brittany@google.com"]
  };

  const handleChange = event => {
    setInputValue(event.target.value);
    // if (props.onChange) props.onChange(inputValue);
    if (inputValue.includes("@" && ".") === true) {
      setEmail(inputValue);
    } else {
      setEmail("");
    }
    if (email.length >= 1) {
      getCompany(email);
    } else setCompany("");
  };

  const handleClick = e => {
    e.preventDefault();
    setEmail(inputValue);
    if (data.emails.includes(email) === true) {
      alert("This email already exists!");
    }
    if (data.companies.includes(company) === true) {
      alert("This company already exists");
    } else alert("Looks like this is a new company!");
  };

  const getCompany = email => {
    let firstSplit = email.split("@");
    let secondSplit = firstSplit[1].split(".");
    secondSplit.pop();
    let newCompany = secondSplit.toString();
    setCompany(newCompany);
  };

  console.log(email);
  console.log(company);

  // const handleClick = () => {
  //   check if there is a valid state called company
  //   2 dummy docs
  //   1 = companies
  //   2 = emails
  //   dummyData = {existingCompanies: ['google'], existingEmails: []}
  //   cross check the company state with existingCompanies Array.exist() //dummyData.existingCompanies.exist('google')
  //   if exists; document.selectById('error-email').style = {visiblity: true}
  //   if new () => {<Redirect to="/new"/>}
  // };

  return (
    <div className={styles.container}>
      <ConfirmEmailModal />
      <div className={styles.getStarted}>Get started on VidMob</div>
      <div className={styles.workEmail}>Enter your work email.</div>
      <div className={styles.line} />
      <form>
        <div className={styles.email_input_container}>
          <input
            type={"email"}
            placeholder={"name@company.com"}
            className={styles.email_input}
            onChange={inputValue => handleChange(inputValue)}
            value={inputValue}
          />
        </div>
        <Button
          // to={"/sign_up/existing_company"}
          className={styles.defaultViewBtn}
          onClick={handleClick}
        >
          NEXT
        </Button>
      </form>
    </div>
  );
};

export default DefaultView;
