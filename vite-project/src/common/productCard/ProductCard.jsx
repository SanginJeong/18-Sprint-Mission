import React from "react";
import "./ProductCard.style.css";

const ProductCard = ({ product }) => {
  console.log("p", product);
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt="product-img"
        className="product-card-img"
      />
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}원</p>
        <button className="button product-favorite-count">
          <img src="public/images/favorite.svg" alt="product-img" />
          {product.favoriteCount}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
