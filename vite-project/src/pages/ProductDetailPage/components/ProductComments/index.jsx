import ErrorMessage from "../../../../common/ErrorMessage";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import EmptyComment from "./EmptyComment";
import Comment from "./Comment";
import { useGetProductCommentsQuery } from "../../../../hooks/useGetProductComments";
import { useParams } from "react-router";

const ProductComments = () => {
  const params = useParams();
  const { productId } = params;

  const { data, isLoading, isError, error } = useGetProductCommentsQuery({
    productId,
    limit: 3,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage errorMessage={error.message} />;
  }

  const comments = data.list;

  if (!comments) {
    return <EmptyComment />;
  }

  return (
    <ul className="productDetail-comment-list">
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </ul>
  );
};

export default ProductComments;
