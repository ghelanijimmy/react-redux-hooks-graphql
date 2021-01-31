import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  /**
   * Dispatch function
   * @type {any}
   */
  const dispatch = useDispatch();

  const handleToggleCartHidden = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer onClick={handleToggleCartHidden}>
      <ShoppingIcon />
      <ItemCount> {itemCount} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
