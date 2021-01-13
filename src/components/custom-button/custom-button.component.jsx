import React from "react";
import buttonStyles from "./custom-button.styles.module.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`
        ${isGoogleSignIn ? buttonStyles.googleSignIn : ""} ${
        buttonStyles.customButton
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
CustomButton.propTypes = {};

export default CustomButton;
