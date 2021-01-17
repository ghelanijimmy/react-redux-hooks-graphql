import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import cartItemStyles from "./cart-icon.styles.module.scss";

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
    <div className={cartItemStyles.cartIcon} onClick={handleToggleCartHidden}>
      <ShoppingIcon className={cartItemStyles.shoppingIcon} />
      <span className={cartItemStyles.itemCount}> {itemCount} </span>
    </div>
  );
};

export default CartIcon;
