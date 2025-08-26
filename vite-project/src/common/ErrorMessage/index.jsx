import "./ErrorMessage.style.css";

const ErrorMessage = ({ errorMessage }) => {
  return <div className="error-message">{errorMessage}</div>;
};

export default ErrorMessage;
