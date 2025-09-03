import "./ProductDetailPage.style.css";
import ProductDetail from "./components/ProductDetail";
import ProductQuestion from "./components/ProductQuestion";
import ProductComments from "./components/ProductComments";
import { useParams } from "react-router";
import ProductBackButton from "./components/ProductBackButton";
import { useState } from "react";

const ProductDetailPage = () => {
  const params = useParams();
  const { productId } = params;

  const [isUpdateMode, setIsUpdateMode] = useState({});

  return (
    <div className="productDetail-page-layout">
      <ProductDetail productId={productId} />
      <div className="productDetail-page-comments-area">
        <ProductQuestion productId={productId} />
        <ProductComments
          productId={productId}
          isUpdateMode={isUpdateMode}
          setIsUpdateMode={setIsUpdateMode}
        />
      </div>
      <div className="productDetail-page-back-btn-area">
        <ProductBackButton />
      </div>
    </div>
  );
};

export default ProductDetailPage;
