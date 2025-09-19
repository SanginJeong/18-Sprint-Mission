import { Link } from "react-router";

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <img src="/images/panda-face.svg" alt="메인 판다 얼굴" />
      <Link to="/">판다마켓</Link>
    </div>
  );
};

export default Logo;
