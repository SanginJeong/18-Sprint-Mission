import { useState } from "react";
import ImgVisibilityOn from "/images/btn_visibility_on.svg";
import ImgVisibilityOff from "/images/btn_visibility_off.svg";
import { useNavigate } from "react-router";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isVisibility, setIsVisibility] = useState({
    password: false,
    passwordCheck: false,
  });
  const [signupForm, setSignupForm] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const isDisabledSignupButton = !(
    signupForm.email &&
    signupForm.nickname &&
    signupForm.password &&
    signupForm.passwordCheck
  );

  const handleVisibility = (e) => {
    const { name } = e.currentTarget;
    setIsVisibility((prev) => ({ ...prev, [name]: !isVisibility[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>이메일</label>
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요"
        value={signupForm.email}
        onChange={handleChangeValue}
      />

      <label>닉네임</label>
      <input
        type="email"
        name="nickname"
        placeholder="닉네임을 입력해주세요"
        value={signupForm.nickname}
        onChange={handleChangeValue}
      />

      <label>비밀번호</label>
      <div className="password-area">
        <input
          name="password"
          value={signupForm.password}
          type={isVisibility.password ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChangeValue}
        />
        <button
          onClick={handleVisibility}
          className="button"
          type="button"
          name="password"
        >
          <img
            src={isVisibility.password ? ImgVisibilityOff : ImgVisibilityOn}
            alt="비밀번호 표시"
          />
        </button>
      </div>

      <label>비밀번호 확인</label>
      <div className="password-area">
        <input
          name="passwordCheck"
          value={signupForm.passwordCheck}
          type={isVisibility.passwordCheck ? "text" : "password"}
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          onChange={handleChangeValue}
        />
        <button
          onClick={handleVisibility}
          className="button"
          type="button"
          name="passwordCheck"
        >
          <img
            src={
              isVisibility.passwordCheck ? ImgVisibilityOff : ImgVisibilityOn
            }
            alt="비밀번호 표시"
          />
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="button btn-large form-btn"
        disabled={isDisabledSignupButton}
      >
        회원가입
      </button>
    </form>
  );
};

export default SignupForm;
