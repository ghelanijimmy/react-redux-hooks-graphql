import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemName
} from "./Cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
