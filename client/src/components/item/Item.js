import React from "react";
import "./Item.scss";

import Shoe from "../../assets/shoe.jpg";
import { Link } from "react-router-dom";

const Item = ({ item: { images, name, price, id } }) => {
  return (
    <div className="Item">
      <Link to={`/product/${id}`}>
        <img src={images[0].url} />
        <p className="shoe_name">{name}</p>
        <div className="price_rating">
          <p className="shoe_price">Rs. {price}/-</p>
          <span>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Item;
