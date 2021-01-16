import React from "react";
import cartDropDownStyles from "./cart-dropdown.styles.module.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className={cartDropDownStyles.cartDropdown}>
    <div className={cartDropDownStyles.cartItems}>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;