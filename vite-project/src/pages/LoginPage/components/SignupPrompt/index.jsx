import { Link } from "react-router";

const SignupPrompt = () => {
  return (
    <div className="signup-prompt">
      <p>판다마켓이 처음이신가요?</p>
      <Link to="/signup">회원가입</Link>
    </div>
  );
};

export default SignupPrompt;
