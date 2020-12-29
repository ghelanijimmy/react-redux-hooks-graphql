import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import signInStyles from "./sign-in-and-sign-up.styles.module.scss";

const SignInAndSignUp = () => (
  <div className={signInStyles.signInAndSignUp}>
    <SignIn />
  </div>
);

export default SignInAndSignUp;
