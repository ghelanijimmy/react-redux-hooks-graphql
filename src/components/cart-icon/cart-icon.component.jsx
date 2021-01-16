import React from "react";
import { useDispatch } from "react-redux";
import toggleCartHidden from "../../redux/cart/cart.reducer";
import cartItemStyles from "./cart-icon.styles.module.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  /**
   * Dispatch function
   * @type {any}
   */
  const dispatch = useDispatch();

  const handleToggleCartHidden = () => dispatch(toggleCartHidden());

  return (
    <div className={cartItemStyles.cartIcon} onClick={handleToggleCartHidden}>
      <ShoppingIcon className={cartItemStyles.shoppingIcon} />
      <span className={cartItemStyles.itemCount}> 0 </span>
    </div>
  );
};

export default CartIcon;
