import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripButton from "../../components/stripe-button/strip-button.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import {
  CheckoutContainer,
  CheckoutHeaderBlock,
  CheckoutHeaderContainer,
  CheckoutTotalContainer,
  TestWarningContainer
} from "./checkout.styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotalContainer>
        <span>{cartTotal}</span>
      </CheckoutTotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - exp (any future date) - cvv (any 3 digits)
      </TestWarningContainer>

      <StripButton price={cartTotal} />
    </CheckoutContainer>
  );
};

export default CheckoutPage;
