import { useNavigate } from "react-router";

const LandingTop = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/items");
  };

  return (
    <section className="landing landing-top">
      <div className="landing-body">
        <div className="landing-left">
          <div className="description-area">
            <span className="homepage-description">일상의 모든 물건을</span>
            <span className="homepage-description">거래해 보세요</span>
          </div>
          <div>
            <button
              onClick={handleNavigate}
              className="button btn-large landing-top-btn"
            >
              구경하러 가기
            </button>
          </div>
        </div>
        <div>
          <img src="/images/Img_home_top.png" alt="구경하러가는 판다" />
        </div>
      </div>
    </section>
  );
};

export default LandingTop;
