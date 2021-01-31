import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  /**
   * Dispatch function
   * @type {any}
   */
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(addItem(cartItem));
  };
  const handleDecreaseQuantity = () => {
    dispatch(removeItem(cartItem));
  };

  const handleRemoveItemFromCart = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={handleDecreaseQuantity}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={handleIncreaseQuantity}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={handleRemoveItemFromCart}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};
CheckoutItem.propTypes = {};

export default CheckoutItem;
