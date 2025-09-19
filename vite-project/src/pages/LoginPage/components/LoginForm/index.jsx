import { useState } from "react";
import ImgVisibilityOn from "/images/btn_visibility_on.svg";
import ImgVisibilityOff from "/images/btn_visibility_off.svg";
import { useNavigate } from "react-router";
import ErrorMessage from "../../../../common/ErrorMessage";
import { getValidationForm } from "../../../../utils/getValidationForm";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isVisibility, setIsVisibility] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const isDisabledLoginButton = !(
    loginForm.email &&
    !errors.email &&
    loginForm.password &&
    !errors.password
  );

  const handleVisibility = () => {
    setIsVisibility(!isVisibility);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/items");
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = getValidationForm(name, value);

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>이메일</label>
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요"
        value={loginForm.email}
        onChange={handleChangeValue}
        onBlur={handleBlur}
      />
      {errors.email && <ErrorMessage errorMessage={errors.email} />}
      <label>비밀번호</label>
      <div className="password-area">
        <input
          name="password"
          value={loginForm.password}
          type={isVisibility ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChangeValue}
          onBlur={handleBlur}
        />
        <button onClick={handleVisibility} className="button" type="button">
          <img
            src={isVisibility ? ImgVisibilityOff : ImgVisibilityOn}
            alt="비밀번호 표시"
          />
        </button>
      </div>
      {errors.password && <ErrorMessage errorMessage={errors.password} />}

      <button
        onClick={handleSubmit}
        className="button btn-large form-btn"
        disabled={isDisabledLoginButton}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
