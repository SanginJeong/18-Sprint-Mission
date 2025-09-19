export const getValidationForm = (name, value, formValues = {}) => {
  switch (name) {
    case "email":
      return /\S+@\S+\.\S+/.test(value)
        ? ""
        : "이메일 형식이 올바르지 않습니다";
    case "nickname":
      return value ? "" : "닉네임을 입력해주세요";
    case "password":
      return value.length >= 8 ? "" : "비밀번호를 8글자 이상 입력해주세요";
    case "passwordCheck":
      return value === formValues.password
        ? ""
        : "비밀번호가 일치하지 않습니다";
  }
};
