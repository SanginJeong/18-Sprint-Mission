import Logo from "../../common/Logo";
import "./LoginPage.style.css";
import LoginForm from "./components/LoginForm";
import SignupPrompt from "./components/SignupPrompt";
import SocialLogin from "./components/SocialLogin";

const LoginPage = () => {
  return (
    <div className="login-wrap">
      <main className="login-page-layout">
        <Logo className="form-logo" />
        <LoginForm />
        <SocialLogin />
        <SignupPrompt />
      </main>
    </div>
  );
};

export default LoginPage;
