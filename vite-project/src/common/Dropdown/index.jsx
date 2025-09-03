const DropDown = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

DropDown.header = ({ children }) => {
  return <div>{children}</div>;
};

DropDown.menus = ({ children, isOpen }) => {
  return isOpen && <ul className="dropdown-menus">{children}</ul>;
};

export default DropDown;
