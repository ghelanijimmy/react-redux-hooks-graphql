import React from "react";
import buttonStyles from "./custom-button.styles.module.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className={buttonStyles.customButton} {...otherProps}>
      {children}
    </button>
  );
};
CustomButton.propTypes = {};

export default CustomButton;
