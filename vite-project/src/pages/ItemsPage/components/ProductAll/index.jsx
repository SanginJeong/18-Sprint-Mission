import { useState } from "react";
import { useNavigate } from "react-router";
import DropDown from "../../../../common/Dropdown";
import Pagination from "../../../../common/Pagination";
import ProductList from "../../../../common/ProductList";
import { useResponsivePageSize } from "../../../../hooks/useResponsivePageSize";
import { useMediaQuery } from "react-responsive";
import { useGetProductsQuery } from "../../../../hooks/useGetProducts";
import {
  ORDER_BYS,
  DROPDOWN_MENUS,
  GROUP_SIZE,
} from "../../../../constants/PRODUCTS";

const ProductAll = () => {
  const navigate = useNavigate();
  const [orderBy, setOrderBy] = useState(ORDER_BYS[0]);
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

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const onClickMenu = (orderBy) => {
    setOrderBy(orderBy);
    setIsOpenDropdown(false);
  };

  if (isLoading) return;
  return (
    <>
      <div className="product-all">
        <h1 className="product-category-description">전체 상품</h1>
        <div className="product-all-topbar">
          <div className="product-all-menus">
            <form className="product-search-form">
              <img
                src="/images/ic_search.svg"
                alt="search-icon"
                className="search-icon"
              />
              <input
                className="input"
                type="text"
                placeholder="검색할 상품을 입력해주세요"
              />
            </form>
            <button
              onClick={() => navigate("/addItem")}
              className="button product-all-menus-btn"
            >
              상품 등록하기
            </button>
          </div>
          <DropDown>
            <DropDown.header onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
              {isMobile ? (
                <img src="/images/ic_sort.svg" alt="sort-img" />
              ) : (
                <>
                  <p>{orderBy}</p>
                  <img src="/images/arrow_down.svg" alt="arrow-down" />
                </>
              )}
            </DropDown.header>

            <DropDown.menus isOpen={isOpenDropdown}>
              {DROPDOWN_MENUS.map((orderBy, index) => (
                <li key={orderBy}>
                  <button
                    onClick={() => onClickMenu(orderBy)}
                    className={`button dropdown-menu ${
                      index === 0
                        ? "top"
                        : index === DROPDOWN_MENUS.length - 1
                        ? "bottom"
                        : ""
                    }`}
                  >
                    {orderBy}
                  </button>
                </li>
              ))}{" "}
            </DropDown.menus>
          </DropDown>
        </div>
      </div>
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
