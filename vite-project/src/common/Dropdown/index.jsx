import React, { useState } from "react";

const DropDown = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

DropDown.header = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button dropdown-btn">
      {children}
    </button>
  );
};

DropDown.menus = ({ children, isOpen }) => {
  return isOpen && <ul className="dropdown-menus">{children}</ul>;
};

export default DropDown;
