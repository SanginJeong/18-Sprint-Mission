import Logo from "../../common/Logo";
import "./LoginPage.style.css";
import LoginForm from "./components/LoginForm";
import SignupPrompt from "./components/SignupPrompt";
import SocialLogin from "./components/SocialLogin";

const PROMPT = {
  p: "판다마켓이 처음이신가요?",
  link: "회원가입",
  to: "/signup",
};

const LoginPage = () => {
  return (
    <div className="login-wrap">
      <main className="login-page-layout">
        <Logo className="form-logo" />
        <LoginForm />
        <SocialLogin />
        <SignupPrompt prompt={PROMPT} />
      </main>
    </div>
  );
};

export default LoginPage;
