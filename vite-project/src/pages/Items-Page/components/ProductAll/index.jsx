import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { getProduct } from "../../../../utils/api";
import DropDown from "../../../../common/Dropdown/DropDown";
import Pagination from "../../../../common/Pagination/Pagination";
import ProductList from "../../../../common/Product-Card/ProductList";

const dropdownMenus = {
  최신순: "recent",
  좋아요순: "favorite",
};

const ProductAll = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [orderCategory, setOrderCategory] = useState("최신순");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const [response, totalCount] = await getProduct({
        orderBy: dropdownMenus[orderCategory],
        pageSize: 10,
        page,
      });
      setAllProducts(response);
      setTotalCount(totalCount);
    };
    fetchData();
    console.log("data", allProducts);
  }, [orderCategory]);
  const navigate = useNavigate();
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
          <DropDown
            orderCategory={orderCategory}
            setOrderCategory={setOrderCategory}
            dropdownMenus={dropdownMenus}
          />
        </div>
      </div>
      <ProductList allProducts={allProducts} className="product-all-list" />
      <Pagination totalCount={totalCount} page={page} setPage={setPage} />
    </>
  );
};

export default ProductAll;
