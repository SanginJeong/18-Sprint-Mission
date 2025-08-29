import { useNavigate } from "react-router";
import "./ProductCard.style.css";

const ProductCard = ({ product, category }) => {
  const navigate = useNavigate();

  const handleClickProductCard = () => {
    console.log(product.id);
    // navigate("/Test");
    navigate(`/items/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClickProductCard}>
      <img
        src={product.images[0] || "/images/none-img.jpeg"}
        alt="product-img"
        className={`product-card-img ${category}`}
      />
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}원</p>
        <button className="button product-favorite-count">
          <img src="/images/favorite.svg" alt="product-img" />
          {product.favoriteCount}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
