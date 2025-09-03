import { useNavigate } from "react-router";
import DropDown from "../../../../common/Dropdown";
import { useMediaQuery } from "react-responsive";
import { ORDER_BYS } from "../../../../constants/PRODUCTS";
import { DROPDOWN_MENUS } from "../../../../constants/PRODUCTS";

const ProductAllMenuBar = ({
  isOpenDropdown,
  setIsOpenDropdown,
  onClickMenu,
  orderBy,
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const selectedDropdownValue = DROPDOWN_MENUS.find(
    (key) => ORDER_BYS[key] === orderBy
  );

  return (
    <div className="product-all">
      <h2 className="product-category-description">전체 상품</h2>
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
            className="button btn-small-40 product-all-menus-btn"
          >
            상품 등록하기
          </button>
        </div>
        <DropDown>
          <DropDown.header>
            {isMobile ? (
              <button
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                className="button dropdown-btn"
              >
                <img src="/images/ic_sort.svg" alt="sort-img" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                className="button dropdown-btn"
              >
                <p>{selectedDropdownValue}</p>
                <img src="/images/arrow_down.svg" alt="arrow-down" />
              </button>
            )}
          </DropDown.header>

          <DropDown.menus isOpen={isOpenDropdown}>
            {DROPDOWN_MENUS.map((menu, index) => (
              <li key={menu}>
                <button
                  onClick={() => onClickMenu(ORDER_BYS[menu])}
                  className={`button dropdown-menu ${
                    index === 0
                      ? "top"
                      : index === DROPDOWN_MENUS.length - 1
                      ? "bottom"
                      : ""
                  }`}
                >
                  {menu}
                </button>
              </li>
            ))}
          </DropDown.menus>
        </DropDown>
      </div>
    </div>
  );
};

export default ProductAllMenuBar;
