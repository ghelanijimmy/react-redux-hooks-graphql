import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import cartDropDownStyles from "./cart-dropdown.styles.module.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();

  /**
   * Dispatch function
   * @type {any}
   */
  const dispatch = useDispatch();

  return (
    <div className={cartDropDownStyles.cartDropdown}>
      <div className={cartDropDownStyles.cartItems}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className={cartDropDownStyles.emptyMessage}>
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
