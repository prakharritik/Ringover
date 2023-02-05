import React from "react";
import "./CartItem.scss";

import Shoe from "../../assets/shoe.jpg";
import { XCircle } from "react-feather";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <XCircle
        color="red"
        className="removebtn"
        size={16}
        onClick={() => removeItem(item.id)}
      />
      <img src={item.images[0].url} />
      <div>
        <p className="name">{item.name}</p>
        <p className="brand">{item.brand}</p>
        <p className="price">Rs. {item.price}/-</p>
      </div>
    </div>
  );
};

export default CartItem;
