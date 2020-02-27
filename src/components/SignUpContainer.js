import React from "react";
import styles from "./SignUpContainer.css";
import DefaultView from "./DefaultView";
import { Switch, Route } from "react-router-dom";
import LogoImg from "../images/vm-logo-primary.png";
import LogoImg2x from "../images/vm-logo-primary@2x.png";
import LogoImg3x from "../images/vm-logo-primary@3x.png";

const SignUpContainer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src={LogoImg}
          srcSet={(LogoImg2x, LogoImg3x)}
        />
        <div className={styles.login}>
          <p className={styles.loginMessage}>Already have an account?</p>
          <button className={styles.btnlogin}>LOG IN</button>
        </div>
      </div>
      <div className={styles.main}>
        <Switch>
          <Route exact path="/" render={() => <DefaultView />} />
          <Route />
        </Switch>
      </div>
      <div className={styles.footer}>
        <button className={styles.btnIntercom}>Image</button>
      </div>
    </div>
  );
};

export default SignUpContainer;
