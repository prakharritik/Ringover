import React from "react";
import Cart from "../../components/cart/Cart";
import Filterbox from "../../components/filterbox/Filterbox";
import Items from "../../components/items/Items";
import "./Store.scss";

const Store = () => {
  return (
    <div class="store">
      <div class="flex-items">
        <Filterbox />
      </div>
      <div class="flex-items">
        <Items />
      </div>
      <div class="flex-items">
        <Cart />
      </div>
    </div>
  );
};

export default Store;
