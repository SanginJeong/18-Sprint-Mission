import React from "react";
import "./ItemsPage.style.css";
import ProductBest from "./components/productBest/ProductBest";
import ProductAll from "./components/productAll/ProductAll";

const ItemsPage = () => {
  return (
    <div className="items-page-container item-page-layout">
      <ProductBest />
      <ProductAll />
    </div>
  );
};

export default ItemsPage;
