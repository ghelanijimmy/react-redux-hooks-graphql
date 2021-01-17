import React from "react";
import cartItemStyles from "./cart-item.styles.module.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className={cartItemStyles.cartItem}>
      <img src={imageUrl} alt="item" />
      <div className={cartItemStyles.itemDetails}>
        <span className={cartItemStyles.name}>{name}</span>
        <span className={cartItemStyles.price}>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
