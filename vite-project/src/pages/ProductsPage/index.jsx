import "./ProductsPage.style.css";
import ProductBest from "./components/ProductBest";
import ProductAll from "./components/ProductAll";

const ProductsPage = () => {
  return (
    <div className="products-page-layout">
      <ProductBest />
      <ProductAll />
    </div>
  );
};

export default ProductsPage;
