import { useNavigate } from "react-router";

const ProductBackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/items")}
      className="button btn-medium back-btn"
    >
      <span>목록으로 돌아가기</span>
      <img
        src="/images/ic_back.svg"
        alt="돌아가기 이미지"
        style={{ width: "24px", height: "24px" }}
      />
    </button>
  );
};

export default ProductBackButton;
