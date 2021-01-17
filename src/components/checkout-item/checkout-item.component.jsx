import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem
} from "../../redux/cart/cart.actions";
import checkoutItemStyles from "./checkout-item.styles.module.scss";

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
    <div className={checkoutItemStyles.checkoutItem}>
      <div className={checkoutItemStyles.imageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={checkoutItemStyles.name}>{name}</span>
      <span className={checkoutItemStyles.quantity}>
        <div
          className={checkoutItemStyles.arrow}
          onClick={handleDecreaseQuantity}
        >
          &#10094;
        </div>
        <span className={checkoutItemStyles.value}>{quantity}</span>
        <div
          className={checkoutItemStyles.arrow}
          onClick={handleIncreaseQuantity}
        >
          &#10095;
        </div>
      </span>
      <span className={checkoutItemStyles.price}>{price}</span>
      <div
        className={checkoutItemStyles.removeButton}
        onClick={handleRemoveItemFromCart}
      >
        &#10005;
      </div>
    </div>
  );
};
CheckoutItem.propTypes = {};

export default CheckoutItem;
