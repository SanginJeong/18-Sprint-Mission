import React from "react";
import "./ItemsPage.style.css";
import ProductBest from "./components/ProductBest";
import ProductAll from "./components/ProductAll";

const ItemsPage = () => {
  return (
    <div className="item-page-layout">
      <ProductBest />
      <ProductAll />
    </div>
  );
};

export default ItemsPage;
