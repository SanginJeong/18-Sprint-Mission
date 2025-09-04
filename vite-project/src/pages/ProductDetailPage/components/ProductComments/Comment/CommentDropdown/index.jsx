import DropDown from "../../../../../../common/Dropdown";

const CommentDropdown = ({ isOpen, setIsOpen, onDelete, onUpdate }) => {
  return (
    <DropDown>
      <DropDown.header>
        <button className="button kebab-btn" onClick={setIsOpen}>
          <img src="/images/ic_kebab.svg" alt="수정 이미지" />
        </button>
      </DropDown.header>
      <DropDown.menus isOpen={isOpen}>
        <div className="productDetail-comment-dropdown">
          <button onClick={onUpdate} className="button">
            수정하기
          </button>
          <button onClick={onDelete} className="button">
            삭제하기
          </button>
        </div>
      </DropDown.menus>
    </DropDown>
  );
};

export default CommentDropdown;
