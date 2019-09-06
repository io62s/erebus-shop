import React from "react";
import "./CartDropdownStyles.scss";
import CustomButton from "../custom-button/CustomButton";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
