import ErrorMessage from "../../../../common/ErrorMessage";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import UserInfo from "../../../../common/UserInfo";
import { useGetProductCommentsQuery } from "../../../../hooks/useGetProductComments";

const ProductComments = ({ productId }) => {
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
      {comments.map((comment) => (
        <li className="productDetail-comment-content-userInfo">
          <div className="productDetail-comment-content">
            <p>{comment.content}</p>
            <button className="button">
              <img src="/images/ic_kebab.svg" alt="수정 이미지" />
            </button>
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
