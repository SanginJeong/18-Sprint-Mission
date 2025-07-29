import React from "react";
import "./ProductCard.style.css";

const ProductCard = ({ product, category }) => {
  return (
    <div className="product-card">
      <img
        src={product.images[0] || "/images/none-img.jpeg"}
        alt="product-img"
        className={`product-card-img ${category}`}
      />
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}원</p>
        <button className="button product-favorite-count">
          <img src="/images/favorite.svg" alt="product-img" />
          {product.favoriteCount}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
