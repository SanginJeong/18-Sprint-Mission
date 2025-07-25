import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { getProduct } from "../../../../utils/api";
import ProductCard from "../../../../common/productCard/ProductCard";
import DropDown from "../../../../common/dropdown/DropDown";

const dropdownMenus = {
  최신순: "recent",
  좋아요순: "favorite",
};

const ProductAll = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [orderCategory, setOrderCategory] = useState("최신순");
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct({
        orderBy: dropdownMenus[orderCategory],
        pageSize: 10,
        page: offset,
      });
      setAllProducts(response);
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
      <ul className="product-all-list">
        {allProducts?.map((product) => (
          <li key={product.id}>
            <Link>
              <ProductCard product={product} category="all-card-img" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductAll;
