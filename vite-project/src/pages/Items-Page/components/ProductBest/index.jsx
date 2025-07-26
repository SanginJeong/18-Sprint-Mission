import React, { useEffect, useState } from "react";
import { getProduct } from "../../../../utils/api";
import ProductList from "../../../../common/Product-Card/ProductList";

const ProductBest = () => {
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [response, totalCount] = await getProduct({
        orderBy: "favorite",
        pageSize: 4,
      });
      setBestProducts(response);
    };
    fetchData();
  }, []);
  return (
    <div className="productBest-layout">
      <h1 className="product-category-description">베스트 상품</h1>
      <ProductList allProducts={bestProducts} className="product-best-list" />
    </div>
  );
};

export default ProductBest;
