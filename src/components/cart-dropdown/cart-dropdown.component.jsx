import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import cartDropDownStyles from "./cart-dropdown.styles.module.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className={cartDropDownStyles.cartDropdown}>
      <div className={cartDropDownStyles.cartItems}>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
