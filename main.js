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
