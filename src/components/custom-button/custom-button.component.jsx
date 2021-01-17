import React from "react";
import buttonStyles from "./custom-button.styles.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  addClass,
  ...otherProps
}) => {
  return (
    <button
      className={`
        ${inverted ? buttonStyles.inverted : ""} ${
        buttonStyles.customButton
      } ${addClass}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
CustomButton.propTypes = {};

export default CustomButton;
