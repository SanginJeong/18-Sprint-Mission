import "./ProductDetailPage.style.css";
import ProductDetail from "./components/ProductDetail";
import ProductQuestion from "./components/ProductQuestion";
import ProductComments from "./components/ProductComments";
import ProductBackButton from "./components/ProductBackButton";

const ProductDetailPage = () => {
  return (
    <div className="productDetail-page-layout">
      <ProductDetail />
      <div className="productDetail-page-comments-area">
        <ProductQuestion />
        <ProductComments />
      </div>
      <div className="productDetail-page-back-btn-area">
        <ProductBackButton />
      </div>
    </div>
  );
};

export default ProductDetailPage;
