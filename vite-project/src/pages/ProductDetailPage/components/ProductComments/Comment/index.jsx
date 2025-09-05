import UpdateModeButtons from "./UpdateModeButtons";
import CommentDropdown from "./CommentDropdown";
import UserInfo from "../../../../../common/UserInfo";
import { getTimeAgo } from "../../../../../utils/getTimeAgo";
import { useState } from "react";
import { useDeleteProductCommentQuery } from "../../../../../hooks/useDeleteProductCommentQuery";

const Comment = ({ comment }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const { mutate: deleteProductComment } = useDeleteProductCommentQuery();

  const handleDropdownMenus = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleUpdateMode = () => {
    setIsUpdateMode(true);
    setIsOpenDropdown(false);
  };

  const handleCancelUpdateMode = () => {
    setIsUpdateMode(false);
  };

  const handleDeleteComment = (commentId) => {
    deleteProductComment(commentId);
    setIsOpenDropdown(false);
  };

  const handleUpdateComment = (commentId, content) => {
    // 추후 업데이트 내용
    console.log("수정 완료 클릭");
  };

  return (
    <li key={comment.id} className="productDetail-comment-content-userInfo">
      <div className="productDetail-comment-content">
        {isUpdateMode ? (
          <>
            <textarea
              className="productDetail-comment-textarea"
              value={comment.content}
            />
            <div>
              <UpdateModeButtons
                onCancel={handleCancelUpdateMode}
                onComplete={handleUpdateComment}
              />
            </div>
          </>
        ) : (
          <>
            <p>{comment.content}</p>
            <CommentDropdown
              isOpen={isOpenDropdown}
              setIsOpen={handleDropdownMenus}
              onDelete={() => handleDeleteComment(comment.id)}
              onUpdate={handleUpdateMode}
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
  );
};

export default Comment;
