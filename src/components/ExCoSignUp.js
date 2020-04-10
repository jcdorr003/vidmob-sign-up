import React, { useState, useEffect } from "react";
import styles from "./ExCoSignUp.css";
import FormInput from "./FormInput";
import Button from "./Button";
import { Link } from "react-router-dom";
import { signup } from "../services/api-helper";

const ExCoSignUp = props => {
  const [email] = useState(props.location.state);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [newUserData, setNewUserData] = useState({});

  console.log(firstName);
  console.log(lastName);
  console.log(displayName);
  console.log(password);

  useEffect(() => {
    const createNewUser = async () => {
      await signup(firstName, lastName, displayName, email, password);
    };
    createNewUser();
    console.log(newUserData);
  }, [newUserData]);

  const handleChange = e => {
    if (e.target.name === "lastName") setLastName(e.target.value);
    if (e.target.name === "firstName") setFirstName(e.target.value);
    if (e.target.name === "displayName") setDisplayName(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    setNewUserData({ firstName, lastName, displayName, email, password });
    console.log(newUserData);
  };

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
                name={"firstName"}
                type={"text"}
                placeholder={"First Name"}
                className={styles.first_name_input}
                onChange={handleChange}
              />
            </div>
            <div className={styles.last_name_container}>
              <FormInput
                name={"lastName"}
                type={"text"}
                placeholder={"Last Name"}
                className={styles.last_name_input}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.display_name_container}>
            <FormInput
              name={"displayName"}
              type={"text"}
              placeholder={`Display Name                                                  ${"(optional)"}`}
              className={styles.display_name_input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.password_container}>
            <FormInput
              name={"password"}
              type={"password"}
              placeholder={"Password"}
              className={styles.password_input}
              onChange={handleChange}
            />
          </div>
          <Link to="/">
            <Button className={styles.signup_btn} onClick={handleClick}>
              SIGN UP
            </Button>
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
