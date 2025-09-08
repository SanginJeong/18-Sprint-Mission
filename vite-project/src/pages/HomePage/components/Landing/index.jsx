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
            <span className="description">일상의 모든 물건을</span>
            <span className="description">거래해 보세요</span>
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

const LandingBottom = () => {
  return (
    <section className="landing landing-bottom">
      <div className="landing-body">
        <div className="landing-left">
          <div className="description-area">
            <span className="description">믿을 수 있는</span>
            <span className="description">판다마켓 중고 거래</span>
          </div>
        </div>
        <div>
          <img src="/images/Img_home_bottom.png" alt="구경하러가는 판다" />
        </div>
      </div>
    </section>
  );
};

export { LandingTop, LandingBottom };
