import React, { useState } from "react";

const DropDown = ({ dropdownMenus, orderCategory, setOrderCategory }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const menus = Object.keys(dropdownMenus);
  const selectOrderCategory = (category) => {
    setIsOpenDropdown(false);
    setOrderCategory(category);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="button dropdown-btn"
      >
        <p>{orderCategory}</p>
        <img src="public/images/arrow_down.svg" alt="arrow-down" />
      </button>

      {isOpenDropdown && (
        <ul className="dropdown-menus">
          {menus.map((category, index) => (
            <li key={dropdownMenus[category]}>
              <button
                onClick={() => selectOrderCategory(category)}
                className={`button dropdown-menu ${
                  index === 0
                    ? "top"
                    : index === menus.length - 1
                    ? "bottom"
                    : ""
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
