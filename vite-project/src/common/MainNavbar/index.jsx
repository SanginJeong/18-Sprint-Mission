import "./MainNavbar.style.css";
import { Link, useNavigate } from "react-router";

const MainNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-main-left">
          <img src="/images/panda-face.svg" alt="메인 판다 얼굴" />
          <Link className="nav-link-home" to="/">
            판다마켓
          </Link>
        </div>

        <div className="nav-main-right">
          <button
            onClick={handleNavigate}
            className="button btn-small-48 nav-login-btn"
          >
            로그인
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
