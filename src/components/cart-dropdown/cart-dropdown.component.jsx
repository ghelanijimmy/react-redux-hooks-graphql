import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage
} from "./cart-dropdown.styles";
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
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
