const $loginForm = document.querySelector("#login-form");
const $loginEmail = document.querySelector("#login-email");
const $loginPassword = document.querySelector("#login-password");
const $loginBtn = document.querySelector("#login-btn");

let isValidLoginEmailValue = false;
let isValidLoginPasswordValue = false;

const clearErrorTag = (element) => {
  const errorTag = element.nextElementSibling;
  if (errorTag && errorTag.classList.contains("error-message")) {
    element.classList.remove("error-status");
    errorTag.remove();
  }
};

const createErrorTag = (element, message) => {
  const tag = document.createElement("p");
  tag.classList.add(`error-message`);
  tag.textContent = message;
  element.classList.add("error-status");
  return element.after(tag);
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

$loginEmail.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "이메일을 입력해주세요");
    $loginBtn.disabled = true;
    return errorTag;
  }

  if (!isValidEmail(value)) {
    const errorTag = createErrorTag(e.target, "잘못된 이메일 형식입니다");
    $loginBtn.disabled = true;
    return errorTag;
  }
  isValidLoginEmailValue = true;

  if (isValidLoginPasswordValue) {
    $loginBtn.disabled = false;
  }
});

$loginPassword.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "비밀번호를 입력해주세요");
    $loginBtn.disabled = true;
    return errorTag;
  }

  if (value.length < 8) {
    const errorTag = createErrorTag(
      e.target,
      "비밀번호를 8자 이상 입력해주세요."
    );
    $loginBtn.disabled = true;
    return errorTag;
  }
  isValidLoginPasswordValue = true;
  if (isValidLoginEmailValue) {
    $loginBtn.disabled = false;
  }
});

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/items";
});



// 이메일 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지를 보입니다.
// 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 경우 input에 빨강색 테두리와 아래에 “잘못된 이메일 형식입니다” 빨강색 에러 메세지를 보입니다.

// 닉네임 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와 아래에 “닉네임을 입력해주세요.” 빨강색 에러 메세지를 보입니다.

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다
// 비밀번호 input에서 focus out 할 때, 값이 8자 미만일 경우 아래에 “비밀번호를 8자 이상 입력해주세요.” 에러 메세지를 보입니다.

// 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않습니다..” 에러 메세지를 보입니다.

// input 에 빈 값이 있거나 에러 메세지가 있으면  ‘회원가입’ 버튼은 비활성화 됩니다.
// Input 에 유효한 값을 입력하면  ‘회원가입' 버튼이 활성화 됩니다.
// 활성화된 ‘회원가입’ 버튼을 누르면  로그인 페이지로 이동합니다