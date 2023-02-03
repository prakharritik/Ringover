import React from "react";
import "./CartItem.scss";

import Shoe from "../../assets/shoe.jpg";
import { XCircle } from "react-feather";

const CartItem = () => {
  return (
    <div className="cart-item">
      <XCircle color="red" className="removebtn" size={16} />
      <img src={Shoe} />
      <div>
        <p className="name">KSL 01</p>
        <p className="brand">By KICKSUP and you</p>
        <p className="price">Rs. 2000/-</p>
      </div>
    </div>
  );
};

export default CartItem;
