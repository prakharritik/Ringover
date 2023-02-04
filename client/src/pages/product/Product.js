import React from "react";
import Cart from "../../components/cart/Cart";
import "./Product.scss";

import Shoe from "../../assets/shoe.jpg";
import { ChevronLeft } from "react-feather";
import Pattern from "../../components/pattern/Pattern";
import Size from "../../components/size/Size";

const Product = () => {
  return (
    <div className="Product">
      <div className="flex-items ">
        <div className="head_product">
          <ChevronLeft size={30} /> Your Design Space
        </div>
        <div className="product_details">
          <div className="active_img">
            <img src={Shoe} />
          </div>
          <div className="imgs">
            <img src={Shoe} />
            <img src={Shoe} />
            <img src={Shoe} />
          </div>
          <div className="details">
            <p className="name">KSL 01</p>
            <p className="brand">By KICKSUP and you</p>
            <span className="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </span>
            <p className="reviews">80 reviews</p>
            <p className="price">Rs. 2000/-</p>
            <p className="offer">
              Get an exclusive 20% off shopping with HDFC bank
            </p>
            <Pattern />
            <Pattern />
            <Pattern />
            <Pattern />
            <Size />
          </div>
        </div>
        <div className="rate_form">
          <span>Rate product: </span>
          <span className="rating">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </span>
        </div>
        <div className="btn_section">
          <button className="btn-1">Share Design</button>
          <button className="btn-2">Add To Cart</button>
        </div>
      </div>
      <div class="flex-items">
        <Cart />
      </div>
    </div>
  );
};

export default Product;
