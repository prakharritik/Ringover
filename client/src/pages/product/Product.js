import React, { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import "./Product.scss";

import Shoe from "../../assets/shoe.jpg";
import { ChevronLeft } from "react-feather";
import Pattern from "../../components/pattern/Pattern";
import Size from "../../components/size/Size";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [shoe, setShoe] = useState(null);
  const [activeimg, setActiveimg] = useState(null);

  useEffect(() => {
    return async () => {
      const res = await axios.get(`/api/product/${id}`);

      setShoe(res.data);
      setActiveimg(res.data.images[0].url);
    };
  }, []);

  return (
    <div className="Product">
      <div className="flex-items ">
        <div className="head_product">
          <NavLink to="/store">
            <ChevronLeft size={30} />
          </NavLink>
          Your Design Space
        </div>
        {shoe ? (
          <>
            <div className="product_details">
              <div className="active_img">
                <img src={activeimg} />
              </div>
              <div className="imgs">
                <img
                  src={shoe.images[0].url}
                  onClick={() => setActiveimg(shoe.images[0].url)}
                />
                <img
                  src={shoe.images[1].url}
                  onClick={() => setActiveimg(shoe.images[1].url)}
                />
                <img
                  src={shoe.images[2].url}
                  onClick={() => setActiveimg(shoe.images[2].url)}
                />
              </div>
              <div className="details">
                <p className="name">{shoe.name}</p>
                <p className="brand">By {shoe.brand}</p>
                <span className="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
                <p className="reviews">80 reviews</p>
                <p className="price">Rs. {shoe.price}/-</p>
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
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div class="flex-items">
        <Cart />
      </div>
    </div>
  );
};

export default Product;
