import React from "react";
import formInputStyles from "./form-input.styles.module.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={formInputStyles.group}>
      <input
        className={formInputStyles.formInput}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? formInputStyles.shrink : ""
          } ${formInputStyles.formInputLabel}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
FormInput.propTypes = {};

export default FormInput;
