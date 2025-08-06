import React, { useEffect, useState } from "react";
import { useGetProduct } from "../../../../hooks/useGetProduct";
import ProductList from "../../../../common/Product-Card/ProductList";
import { useResponsivePageSize } from "../../../../hooks/useResponsivePageSize";

const ProductBest = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const { bestProductPageSize, _ } = useResponsivePageSize();

  useEffect(() => {
    const fetchData = async () => {
      const data = await useGetProduct({
        orderBy: "favorite",
        pageSize: bestProductPageSize,
      });

      const { list } = data;
      setBestProducts(list);
    };
    fetchData();
  }, [bestProductPageSize]);

  return (
    <div className="productBest-layout">
      <h1 className="product-category-description">베스트 상품</h1>
      <ProductList products={bestProducts} className="product-best-list" />
    </div>
  );
};

export default ProductBest;
