import React from "react";
import "./Cart.scss";

import Shoe from "../../assets/shoe.jpg";
import { Calendar, MapPin, ShoppingBag } from "react-feather";
import CartItem from "../cart-item/CartItem";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="top_div">
        <p className="top_div_head">CART</p>
        <ShoppingBag className="top_div_icon" />
      </div>
      <div className="cart_items">
        {/* <div className="empty_cart">
          <p>What's stopping you, designer?</p>
        </div> */}
        <CartItem />
        <CartItem />
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
