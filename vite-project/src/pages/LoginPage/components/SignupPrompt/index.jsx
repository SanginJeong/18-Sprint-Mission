import { Link } from "react-router";

const SignupPrompt = ({ prompt }) => {
  return (
    <div className="signup-prompt">
      <p>{prompt.p}</p>
      <Link to={prompt.to}>{prompt.link}</Link>
    </div>
  );
};

export default SignupPrompt;
