import ErrorMessage from "../../../../common/ErrorMessage";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import { useGetProductDetailQuery } from "../../../../hooks/useGetProductDetail";

const ProductDetail = ({ productId }) => {
  const {
    data: producInfo,
    isLoading,
    isError,
    error,
  } = useGetProductDetailQuery({
    productId,
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="p">
      <div></div>
      <div>
        <div>
          <div>
            <h1></h1>
            <h2></h2>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            {/* TagBadge */}
          </div>
        </div>

        <div>
          <div>
            <div></div>
            <div></div>
          </div>
          <button>
            <img src="" alt="" />
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
