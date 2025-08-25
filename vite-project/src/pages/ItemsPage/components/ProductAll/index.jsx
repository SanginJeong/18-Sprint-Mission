import { useState } from "react";
import Pagination from "../../../../common/Pagination";
import ProductList from "../../../../common/ProductList";
import ProductAllMenuBar from "./ProductAllMenuBar";
import { useResponsivePageSize } from "../../../../hooks/useResponsivePageSize";
import { useGetProductsQuery } from "../../../../hooks/useGetProducts";
import { ORDER_BYS, GROUP_SIZE } from "../../../../constants/PRODUCTS";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import ErrorMessage from "../../../../common/ErrorMessage";

const ProductAll = () => {
  const [orderBy, setOrderBy] = useState(ORDER_BYS["최신순"]);
  const [page, setPage] = useState(1);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { _, allProductPageSize } = useResponsivePageSize();

  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({
    page,
    orderBy,
    pageSize: allProductPageSize,
  });

  const totalCount = allProducts?.totalCount;

  const onClickMenu = (menu) => {
    setOrderBy(menu);
    setIsOpenDropdown(false);
  };

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage error={error} />;
  return (
    <>
      <ProductAllMenuBar
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
        onClickMenu={onClickMenu}
        orderBy={orderBy}
      />
      <ProductList products={allProducts.list} className="product-all-list" />
      <Pagination
        GROUP_SIZE={GROUP_SIZE}
        totalCount={totalCount}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default ProductAll;
