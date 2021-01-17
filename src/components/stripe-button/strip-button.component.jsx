import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IAh9lGNbv1IMa6kg8YmWlQqfh2FayjGYsHlgVDY6qb4YphIlYRg1b92DK01XhIPPqKUtO9fj7LoG70lh2AlECZf00qQERA4U2";

  const onToken = token => {
    console.log(token);
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        stripeKey={publishableKey}
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
      />
    </div>
  );
};
StripButton.propTypes = {};

export default StripButton;
