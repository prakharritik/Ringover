import React, { useContext } from "react";
import "./Cart.scss";

import { Calendar, MapPin, ShoppingBag } from "react-feather";
import CartItem from "../cart-item/CartItem";
import { Context as CartContext } from "../../context/CartContext";

const Cart = () => {
  const {
    state: { items },
    removeItem,
  } = useContext(CartContext);
  // console.log(items);
  return (
    <div className="Cart">
      <div className="top_div">
        <p className="top_div_head">CART</p>
        <ShoppingBag className="top_div_icon" />
      </div>
      <div className="cart_items">
        {items.length === 0 ? (
          <div className="empty_cart">
            <p>What's stopping you, designer?</p>
          </div>
        ) : (
          items.map((item) => <CartItem item={item} removeItem={removeItem} />)
        )}
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
