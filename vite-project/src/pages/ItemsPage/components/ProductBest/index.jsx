import ProductList from "../../../../common/ProductList";
import { useResponsivePageSize } from "../../../../hooks/useResponsivePageSize";
import { useGetProductsQuery } from "../../../../hooks/useGetProducts";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import ErrorMessage from "../../../../common/ErrorMessage";

const ProductBest = () => {
  const { bestProductPageSize, _ } = useResponsivePageSize();
  const {
    data: bestProducts,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({
    orderBy: "favorite",
    pageSize: bestProductPageSize,
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className="productBest-layout">
      <h1 className="product-category-description">베스트 상품</h1>
      <ProductList products={bestProducts.list} className="product-best-list" />
    </div>
  );
};

export default ProductBest;
