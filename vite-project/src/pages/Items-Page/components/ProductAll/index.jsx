import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetProduct } from "../../../../hooks/useGetProduct";
import DropDown from "../../../../common/Dropdown/DropDown";
import Pagination from "../../../../common/Pagination/Pagination";
import ProductList from "../../../../common/Product-Card/ProductList";
import { useResponsivePageSize } from "../../../../hooks/useResponsivePageSize";

const DROPDOWN_MENUS = {
  최신순: "recent",
  좋아요순: "favorite",
};

const GROUP_SIZE = 5;

const ProductAll = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("최신순");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [_, pageSize] = useResponsivePageSize();
  const menus = Object.keys(DROPDOWN_MENUS);
  const onClickMenu = (orderBy) => {
    setOrderBy(orderBy);
    setIsOpenDropdown(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [response, totalCount] = await useGetProduct({
        orderBy: DROPDOWN_MENUS[orderBy],
        pageSize,
        page,
      });
      setAllProducts(response);
      setTotalCount(totalCount);
    };
    fetchData();
    console.log("data", allProducts);
  }, [orderBy, page, pageSize]);
  return (
    <>
      <div className="product-all">
        <h1 className="product-category-description">전체 상품</h1>
        <div className="product-all-topbar">
          <div className="product-all-menus">
            <form className="product-search-form">
              <img
                src="public/images/ic_search.svg"
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
              <p>{orderBy}</p>
              <img src="public/images/arrow_down.svg" alt="arrow-down" />
            </DropDown.header>

            <DropDown.menus isOpen={isOpenDropdown}>
              {menus.map((orderBy, index) => (
                <li key={DROPDOWN_MENUS[orderBy]}>
                  <button
                    onClick={() => onClickMenu(orderBy)}
                    className={`button dropdown-menu ${
                      index === 0
                        ? "top"
                        : index === menus.length - 1
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
      <ProductList allProducts={allProducts} className="product-all-list" />
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
