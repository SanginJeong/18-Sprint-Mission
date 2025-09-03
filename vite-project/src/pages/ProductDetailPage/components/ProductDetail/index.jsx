import ErrorMessage from "../../../../common/ErrorMessage";
import LoadingSpinner from "../../../../common/LoadingSpinner";
import TagList from "../../../../common/TagList";
import { useGetProductDetailQuery } from "../../../../hooks/useGetProductDetail";

const ProductDetail = ({ productId }) => {
  const {
    data: productInfo,
    isLoading,
    isError,
    error,
  } = useGetProductDetailQuery({
    productId,
  });

  if (isLoading) return <LoadingSpinner />;

  const createdAt = productInfo.createdAt.split("T")[0];

  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="productDetail-info-layout">
      <img
        className="productDetail-info-left"
        src={productInfo.images[0]}
        alt="상품 이미지"
      />

      <div className="productDetail-info-right">
        <div className="productDetail-info-right-top">
          <div className="product-info-name-price">
            <div className="product-info-name-kebab">
              <h1 className="product-info-name">{productInfo.name}</h1>
              <button className="button">
                <img src="/images/ic_kebab.svg" alt="수정 버튼" />
              </button>
            </div>
            <h2 className="product-info-price">{productInfo.price}원</h2>
          </div>

          <div className="product-info-category-description">
            <h3 className="product-info-category">상품 소개</h3>
            <p className="product-info-description">
              {productInfo.description}
            </p>
          </div>
          <div className="product-info-category-tag">
            <h3 className="product-info-category">상품 태그</h3>
            <TagList tags={productInfo.tags} />
          </div>
        </div>

        <div className="product-info-owner-area">
          <div className="product-info-owner-left">
            <img src="/images/nav-panda.svg" alt="판다 이미지" />
            <div className="product-info-owner-createdAt">
              <span className="product-info-owner">
                {productInfo.ownerNickname}
              </span>
              <span className="product-info-createdAt">{createdAt}</span>
            </div>
          </div>
          <span className="product-info-owner-right">
            <img
              className="product-info-heart"
              src="/images/favorite.svg"
              alt="좋아요 이미지"
            />
            <span className="product-info-favoriteCount">
              {productInfo.favoriteCount}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
