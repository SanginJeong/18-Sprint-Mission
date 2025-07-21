const $loginForm = document.querySelector("#login-form");
const $loginEmail = document.querySelector("#login-email");
const $loginPassword = document.querySelector("#login-password");
const $loginBtn = document.querySelector("#login-btn");

const clearErrorTag = (element) => {
  const errorTag = element.nextElementSibling;
  if(errorTag && errorTag.classList.contains("error-message")){
    element.classList.remove("error-status");
    errorTag.remove();
  }
}

const createErrorTag = (element,message) => {
  const tag = document.createElement("p");
  tag.classList.add(`error-message`);
  tag.textContent = message;
  element.classList.add("error-status");
  return element.after(tag);
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// $loginEmail.addEventListener("input", (e)=>console.log(e.target.value));

$loginEmail.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target
  if (!value) {
    const errorTag = createErrorTag(e.target,"이메일을 입력해주세요");
    return errorTag;
  }

  if(!isValidEmail(value)) {
    const errorTag = createErrorTag(e.target,"잘못된 이메일 형식입니다");
    return errorTag;
  }
});

$loginPassword.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const {value} = e.target;
  if(!value) {
    const errorTag = createErrorTag(e.target, "비밀번호를 입력해주세요");
    return errorTag;
  }

  if(value.length < 8) {
    const errorTag = createErrorTag(e.target, "비밀번호를 8자 이상 입력해주세요.");
    return errorTag;
  }
});

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/items";
});


// input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화 됩니다.
// Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화 됩니다.
// 활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다