import React from "react";
import Filterbox from "../../components/filterbox/Filterbox";
import "./Store.scss";

const Store = () => {
  return (
    <div class="store">
      <div class="flex-items">
        <Filterbox />
      </div>
      <div class="flex-items"></div>
      <div class="flex-items"></div>
    </div>
  );
};

export default Store;
