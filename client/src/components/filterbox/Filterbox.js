import React from "react";
import { Filter } from "react-feather";
import "./Filterbox.scss";

const Filterbox = () => {
  return (
    <div className="Filterbox">
      <div className="top_div">
        <p className="top_div_head">FILTERS</p>
        <Filter className="top_div_icon" />
      </div>
      <div>
        <p className="sub_head">Cost</p>
        <div className="container">
          <input class="checkbox" id="cost-checkbox-1" type="checkbox" />
          <label for="cost-checkbox-1">Rs. 1500-4000</label>
        </div>
        <div className="container">
          <input class="checkbox" id="cost-checkbox-2" type="checkbox" />
          <label for="cost-checkbox-2">Rs. 4001-7000</label>
        </div>
        <div className="container">
          <input class="checkbox" id="cost-checkbox-3" type="checkbox" />
          <label for="cost-checkbox-3">Rs. 7001+</label>
        </div>
      </div>
      <div>
        <p className="sub_head">Design Templates</p>
        <div className="container">
          <input class="checkbox" id="design-checkbox-1" type="checkbox" />
          <label for="design-checkbox-1">2</label>
        </div>
        <div className="container">
          <input class="checkbox" id="design-checkbox-2" type="checkbox" />
          <label for="design-checkbox-2">3</label>
        </div>
        <div className="container">
          <input class="checkbox" id="design-checkbox-3" type="checkbox" />
          <label for="design-checkbox-3">3+</label>
        </div>
      </div>
      <div>
        <p className="sub_head">Type</p>
        <div className="container">
          <input class="checkbox" id="type-checkbox-1" type="checkbox" />
          <label for="type-checkbox-1">Loafer</label>
        </div>
        <div className="container">
          <input class="checkbox" id="type-checkbox-2" type="checkbox" />
          <label for="type-checkbox-2">Sneaker</label>
        </div>
      </div>
<<<<<<< HEAD
      <button className="apply_btn">Apply</button>
=======
>>>>>>> 73685a2fdb9ee56fea27c543479a4663dd846bbc
    </div>
  );
};

export default Filterbox;
