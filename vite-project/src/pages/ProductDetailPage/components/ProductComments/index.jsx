import ErrorMessage from "../../../../common/ErrorMessage";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import UserInfo from "../../../../common/UserInfo";
import DropDown from "../../../../common/Dropdown";
import { useGetProductCommentsQuery } from "../../../../hooks/useGetProductComments";
import { useState } from "react";

const ProductComments = ({ productId }) => {
  const [dropdownMenus, setDropdownMenus] = useState({});

  const { data, isLoading, isError, error } = useGetProductCommentsQuery({
    productId,
    limit: 3,
  });

  const timeAgo = (updatedAt) => {
    const now = new Date();
    const updated = new Date(updatedAt);
    const diffMs = now - updated;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 24) {
      return `${diffHours}시간 전`;
    } else {
      return `${diffDays}일 전`;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const comments = data.list;

  if (isError) {
    return <ErrorMessage errorMessage={error.message} />;
  }
  return (
    <ul className="productDetail-comment-list">
      {comments.map((comment, index) => (
        <li className="productDetail-comment-content-userInfo">
          <div className="productDetail-comment-content">
            <p>{comment.content}</p>
            <DropDown>
              <DropDown.header>
                <button
                  className="button"
                  onClick={() =>
                    setDropdownMenus((prev) => ({
                      ...prev,
                      [index]: !dropdownMenus[index],
                    }))
                  }
                >
                  <img src="/images/ic_kebab.svg" alt="수정 이미지" />
                </button>
              </DropDown.header>
              <DropDown.menus isOpen={dropdownMenus[index]}>
                <div className="productDetail-comment-dropdown">
                  <button className="button">수정하기</button>
                  <button className="button">삭제하기</button>
                </div>
              </DropDown.menus>
            </DropDown>
          </div>

          <UserInfo
            name={comment.writer.nickname}
            image={comment.writer.image}
            date={timeAgo(comment.updatedAt)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductComments;
