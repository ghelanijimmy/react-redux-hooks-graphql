import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import checkoutStyles from "./checkout.styles.module.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className={checkoutStyles.checkoutPage}>
      <div className={checkoutStyles.checkoutHeader}>
        <div className={checkoutStyles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={checkoutStyles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={checkoutStyles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={checkoutStyles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={checkoutStyles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={checkoutStyles.total}>
        <span>{cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
