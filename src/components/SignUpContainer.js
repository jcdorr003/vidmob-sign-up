import React from "react";
import styles from "./SignUpContainer.css";
import DefaultView from "./DefaultView";
import { Switch, Route } from "react-router-dom";
import LogoImg from "../images/vm-logo-primary.png";
import LogoImg2x from "../images/vm-logo-primary@2x.png";
import LogoImg3x from "../images/vm-logo-primary@3x.png";
import ExCoSignUp from "./ExCoSignUp";
import NewCoSignUp from "./NewCoSignUp";

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
          <Route
            path="/sign_up/existing_company"
            render={() => <ExCoSignUp />}
          />
          <Route path="/sign_up/new_company" render={() => <NewCoSignUp />} />
        </Switch>
      </div>
      <div className={styles.footer}>
        <button className={styles.btnIntercom}>
          <svg
            className={styles.intercomIcon}
            width="28"
            height="32"
            fill="#FFFFFF"
            viewBox="0 0 28 32"
          >
            <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignUpContainer;
