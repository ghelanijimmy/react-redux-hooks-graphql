import React from "react";
import {
  FormGroupContainer,
  FormInputLabel,
  FormInputContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormGroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...otherProps}
        shrink={otherProps?.value?.length > 0}
      />
      {label ? <FormInputLabel>{label}</FormInputLabel> : null}
    </FormGroupContainer>
  );
};
FormInput.propTypes = {};

export default FormInput;
