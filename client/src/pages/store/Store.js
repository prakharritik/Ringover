import React, { useEffect, useState } from "react";
import axios from "axios";

import Cart from "../../components/cart/Cart";
import Filterbox from "../../components/filterbox/Filterbox";
import Items from "../../components/items/Items";
import "./Store.scss";

const Store = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    return async () => {
      const res = await axios.get("/api/product");
      setItems(res.data);
    };
  }, []);

  return (
    <div class="store">
      <div class="flex-items">
        <Filterbox />
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
