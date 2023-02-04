import React, { useState } from "react";
import { Filter } from "react-feather";
import "./Filterbox.scss";

const Filterbox = ({ filter, setFilter, handleSubmit }) => {
  const costs = [
    { name: "Rs. 1500-4000", gte: 1500, lte: 4000 },
    { name: "Rs. 4001-7000", gte: 4001, lte: 7000 },
    { name: "Rs. 7001+", gte: 7001 },
  ];
  const types = [
    { name: "Loafer", type: "Loafer" },
    { name: "Sneaker", type: "Sneaker" },
  ];
  const designs = [
    { name: "2", num: 2 },
    { name: "3", num: 3 },
    { name: "3+", gte: 3 },
  ];

  const handleChange = (name, index) => {
    let data = filter;
    data[name][index] = Boolean(!data[name][index]);
    setFilter(data);
  };

  return (
    <div className="Filterbox">
      <div className="top_div">
        <p className="top_div_head">FILTERS</p>
        <Filter className="top_div_icon" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="sub_head">Cost</p>
          {costs.map((cost, index) => (
            <div className="container" key={index}>
              <input
                class="checkbox"
                id={`cost-checkbox-${index}`}
                type="checkbox"
                name="cost"
                onChange={() => handleChange("cost", index)}
              />
              <label for={`cost-checkbox-${index}`}>{cost.name}</label>
            </div>
          ))}
        </div>
        <div>
          <p className="sub_head">Design Templates</p>
          {designs.map((design, index) => (
            <div className="container" key={index}>
              <input
                class="checkbox"
                id={`design-checkbox-${index}`}
                type="checkbox"
                name="design"
                onChange={() => handleChange("design", index)}
              />
              <label for={`design-checkbox-${index}`}>{design.name}</label>
            </div>
          ))}
        </div>
        <div>
          <p className="sub_head">Type</p>
          {types.map((type, index) => (
            <div className="container" key={index}>
              <input
                class="checkbox"
                id={`type-checkbox-${index}`}
                type="checkbox"
                name="type"
                onChange={() => handleChange("type", index)}
              />
              <label for={`type-checkbox-${index}`}>{type.name}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="apply_btn">
          Apply
        </button>
      </form>
    </div>
  );
};

export default Filterbox;
