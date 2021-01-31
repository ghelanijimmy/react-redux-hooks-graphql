import styled, { css } from "styled-components";

export const FormGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

const Shrink = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const FormInputContainer = styled.input`
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &[type="password"] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;

    & ~ ${FormInputLabel} {
      ${Shrink}
    }
  }

  ${({ shrink }) =>
    shrink &&
    css`
      & ~ ${FormInputLabel} {
        ${Shrink}
      }
    `}
`;
