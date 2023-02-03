import React from "react";
import { Search } from "react-feather";
import Item from "../item/Item";
import "./Items.scss";

const Items = () => {
  return (
    <div className="Items">
      <div className="top_div">
        <p className="top_div_head">SHOES</p>
        <div className="shoe_search">
          <Search className="top_div_icon" />
          <button>Sort By</button>
        </div>
      </div>
      <div className="items_grid">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Items;
