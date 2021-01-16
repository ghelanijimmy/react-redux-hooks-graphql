import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import signInStyles from "./sign-in-and-sign-up.styles.module.scss";

const SignInAndSignUp = () => (
  <div className={signInStyles.signInAndSignUp}>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
