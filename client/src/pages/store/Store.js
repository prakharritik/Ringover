import React, { useEffect, useState } from "react";
import axios from "axios";

import Cart from "../../components/cart/Cart";
import Filterbox from "../../components/filterbox/Filterbox";
import Items from "../../components/items/Items";
import "./Store.scss";

const Store = () => {
  const [items, setItems] = useState(null);
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
    <div class="store">
      <div class="flex-items">
        <Filterbox
          filter={filters}
          setFilter={setFilters}
          handleSubmit={handleSubmit}
        />
      </div>
      <div class="flex-items">
        {items ? <Items items={items} /> : <p>Loading</p>}
      </div>
      <div class="flex-items">
        <Cart />
      </div>
    </div>
  );
};

export default Store;
