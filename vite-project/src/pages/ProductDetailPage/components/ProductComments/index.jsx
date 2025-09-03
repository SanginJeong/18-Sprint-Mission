import ErrorMessage from "../../../../common/ErrorMessage";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import UpdateModeButtons from "./UpdateModeButtons";
import CommentDropdown from "./CommentDropdown";
import UserInfo from "../../../../common/UserInfo";
import { useGetProductCommentsQuery } from "../../../../hooks/useGetProductComments";
import { useDeleteProductCommentQuery } from "../../../../hooks/useDeleteProductCommentQuery";
import { useState } from "react";
import { getTimeAgo } from "../../../../utils/getTimeAgo";

const ProductComments = ({ productId, isUpdateMode, setIsUpdateMode }) => {
  const [dropdownMenus, setDropdownMenus] = useState({});

  const { data, isLoading, isError, error } = useGetProductCommentsQuery({
    productId,
    limit: 3,
  });

  const { mutate: deleteProductComment } = useDeleteProductCommentQuery();

  const handleDropdownMenus = (index, boolean) => {
    setDropdownMenus((prev) => ({ ...prev, [index]: boolean }));
  };

  const handleIsUpdateMode = (index, boolean) => {
    setIsUpdateMode((prev) => ({ ...prev, [index]: boolean }));
    setDropdownMenus((prev) => ({ ...prev, [index]: false }));
  };

  const handleDeleteComment = (commentId, index) => {
    deleteProductComment(commentId);
    setDropdownMenus((prev) => ({ ...prev, [index]: false }));
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
        <li key={comment.id} className="productDetail-comment-content-userInfo">
          <div className="productDetail-comment-content">
            {isUpdateMode[index] ? (
              <>
                <textarea
                  className="productDetail-comment-textarea"
                  value={comment.content}
                />
                <div>
                  <UpdateModeButtons
                    onUpdate={() => handleIsUpdateMode(index, false)}
                  />
                </div>
              </>
            ) : (
              <>
                <p>{comment.content}</p>
                <CommentDropdown
                  isOpen={dropdownMenus[index]}
                  setIsOpen={() =>
                    handleDropdownMenus(index, !dropdownMenus[index])
                  }
                  onDelete={() => handleDeleteComment(comment.id, index)}
                  onUpdate={() => handleIsUpdateMode(index, true)}
                />
              </>
            )}
          </div>

          <UserInfo
            name={comment.writer.nickname}
            image={comment.writer.image}
            date={getTimeAgo(comment.updatedAt)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductComments;
