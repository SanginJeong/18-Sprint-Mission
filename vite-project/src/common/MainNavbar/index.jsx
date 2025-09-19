import Logo from "../Logo";
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
        <Logo className={"nav-main-left"} />

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
