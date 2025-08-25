import "./ErrorMessage.style.css";

const ErrorMessage = ({ error }) => {
  return <div className="error-message">{error.message}</div>;
};

export default ErrorMessage;
