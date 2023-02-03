import React from "react";
import "./Item.scss";

import Shoe from "../../assets/shoe.jpg";

const Item = () => {
  return (
    <div className="Item">
      <img src={Shoe} />
      <p className="shoe_name">KSL 01</p>
      <div className="price_rating">
        <p className="shoe_price">Rs. 2000/-</p>
        <span>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </span>
      </div>
    </div>
  );
};

export default Item;
