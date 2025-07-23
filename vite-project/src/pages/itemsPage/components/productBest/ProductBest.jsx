import React, { useEffect, useState } from "react";
import { getProduct } from "../../../../utils/api";
import ProductCard from "../../../../common/productCard/ProductCard";

const ProductBest = () => {
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct({ orderBy: "favorite", pageSize: 4 });
      setBestProducts(response);
    };
    fetchData();
  }, []);
  return (
    <div className="productBest-layout">
      <h1 className="product-category-description">베스트 상품</h1>
      <ul className="product-list">
        {bestProducts?.map((product) => (
          <li key={product.id}>{<ProductCard product={product} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductBest;
