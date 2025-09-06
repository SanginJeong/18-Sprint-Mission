const DropDown = ({ children, className }) => {
  return <div className={`dropdown ${className}`}>{children}</div>;
};

DropDown.header = ({ children }) => {
  return <div>{children}</div>;
};

DropDown.menus = ({ children, isOpen, className }) => {
  return (
    isOpen && <ul className={`dropdown-menus ${className}`}>{children}</ul>
  );
};

export default DropDown;
