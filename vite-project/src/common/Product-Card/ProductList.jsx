import React from "react";
import { Link } from "react-router";
import ProductCard from "./ProductCard";
const ProductList = ({ allProducts, className }) => {
  return (
    <ul className={className}>
      {allProducts?.map((product) => (
        <li key={product.id}>
          <Link>
            <ProductCard product={product} category="all-card-img" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
