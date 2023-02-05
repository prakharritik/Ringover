import React, { useEffect, useState } from "react";
import axios from "axios";

import Cart from "../../components/cart/Cart";
import Filterbox from "../../components/filterbox/Filterbox";
import Items from "../../components/items/Items";
import "./Store.scss";
import Loading from "../../components/loading/Loading";
import { Filter, ShoppingCart } from "react-feather";

const Store = () => {
  const [items, setItems] = useState(null);
  const [filterShow, setFilterShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [filters, setFilters] = useState({
    cost: [false, false, false],
    type: [false, false],
    design: [false, false, false],
  });
  const getData = async () => {
    const res = await axios.get("/api/product", { params: filters });
    console.log(res);
    setItems(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="store">
      <div className="flex-items filterbar">
        <Filter
          onClick={() => {
            setFilterShow(!filterShow);
            setCartShow(false);
          }}
        />
        <ShoppingCart
          onClick={() => {
            setCartShow(!cartShow);
            setFilterShow(false);
          }}
        />
      </div>
      <div
        className={`flex-items ${filterShow ? "show_filter" : "hide_filter"}`}
      >
        <Filterbox
          filter={filters}
          setFilter={setFilters}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="flex-items">
        {items ? <Items items={items} /> : <Loading />}
      </div>
      <div className={`flex-items ${cartShow ? "show_cart" : "hide_cart"}`}>
        <Cart />
      </div>
    </div>
  );
};

export default Store;
