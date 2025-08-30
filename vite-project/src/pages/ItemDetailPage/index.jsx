import { useGetProductCommentsQuery } from "../../hooks/useGetProductComments";
import { useGetProductDetailQuery } from "../../hooks/useGetProductDetail";
import { useParams } from "react-router";

const ItemDetailPage = () => {
  const params = useParams();
  const { productId } = params;
  const {
    data: productDetail,
    isLoading,
    isError,
    error,
  } = useGetProductDetailQuery({
    productId,
  });

  return <div>index</div>;
};

export default ItemDetailPage;
