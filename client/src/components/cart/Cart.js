import React from "react";
import "./Cart.scss";

import Shoe from "../../assets/shoe.jpg";
import { Calendar, MapPin, ShoppingBag } from "react-feather";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="top_div">
        <p className="top_div_head">CART</p>
        <ShoppingBag className="top_div_icon" />
      </div>
      <div className="cart_items">
        <p>What's stopping you, designer?</p>
      </div>
      <div>
        <div className="order_details">
          <p>
            <MapPin />
            <p>Home</p>
          </p>
          <p>
            <Calendar /> <p>Select Date</p>
          </p>
        </div>
        <button className="orderbtn">Order</button>
      </div>
    </div>
  );
};

export default Cart;
