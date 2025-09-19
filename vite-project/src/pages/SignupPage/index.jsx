import Logo from "../../common/Logo";
import SignupPrompt from "../LoginPage/components/SignupPrompt";
import SocialLogin from "../LoginPage/components/SocialLogin";
import SignupForm from "./components/SignupForm";

const PROMPT = { p: "이미 회원이신가요?", link: "로그인", to: "/login" };

const SignupPage = () => {
  return (
    <div className="signup-wrap">
      <main className="signup-page-layout">
        <Logo className="form-logo" />
        <SignupForm />
        <SocialLogin />
        <SignupPrompt prompt={PROMPT} />
      </main>
    </div>
  );
};

export default SignupPage;
