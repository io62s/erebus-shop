import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/LogoForStripe.png";
import CustomButton from "../custom-button/CustomButton";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_flqVmQnLsYM0Vj3b3zyNsrgL00YhQYZ9KW";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="Erebus Clothing"
      image={Logo}
      stripeKey={publishableKey}
      label="Pay Now"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    >
      <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
}

export default StripeCheckoutButton;
