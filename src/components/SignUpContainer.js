import React from "react";
import styles from "./SignUpContainer.css";
import DefaultView from "./DefaultView";
import { Switch, Route } from "react-router-dom";

const SignUpContainer = () => {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/" render={() => <DefaultView />} />
        <Route />
      </Switch>
    </div>
  );
};

export default SignUpContainer;
