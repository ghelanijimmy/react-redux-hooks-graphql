import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import signInStyles from "./sign-in.styles.module.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={signInStyles.signIn}>
      <h2 className={signInStyles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
        />
        <CustomButton type="submit" value="Submit form">
          Submit form
        </CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
