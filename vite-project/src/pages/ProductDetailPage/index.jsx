import "./ProductDetailPage.style.css";
import ProductDetail from "./components/ProductDetail";
import ProductQuestion from "./components/ProductQuestion";
import ProductComments from "./components/ProductComments";
import { useParams } from "react-router";
import ProductBackButton from "./components/ProductBackButton";

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
      <ProductBackButton />
    </div>
  );
};

export default ProductDetailPage;
