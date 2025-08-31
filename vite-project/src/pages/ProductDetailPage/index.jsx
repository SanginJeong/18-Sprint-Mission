import "./ProductDetailPage.style.css";
import ProductDetail from "./components/ProductDetail";
import ProductQuestion from "./components/ProductQuestion";
import ProductComments from "./components/ProductComments";
import { useParams } from "react-router";

const ProductDetailPage = () => {
  const params = useParams();
  const { productId } = params;

  return (
    <div className="productDetail-page-layout">
      <ProductDetail productId={productId} />
      <div className="productDetail-page-comments-area">
        <ProductQuestion productId={productId} />
        <ProductComments productId={productId} />
      </div>
      <button className="btn-medium back-btn">
        <span>목록으로 돌아가기</span>
        <img
          src="/images/ic_back.svg"
          alt="돌아가기 이미지"
          style={{ width: "24px", height: "24px" }}
        />
      </button>
    </div>
  );
};

export default ProductDetailPage;
