const SOCIAL_LOGINS = [
  {
    src: "/images/ic_google.svg",
    alt: "구글 로그인",
    className: "google-login",
    handler: () => console.log("구글 로그인"),
  },
  {
    src: "/images/ic_kakaotalk.svg",
    alt: "카카오 로그인",
    className: "kakao-login",
    handler: () => console.log("카카오 로그인"),
  },
];

const SocialLogin = () => {
  return (
    <div className="social-login">
      <span>간편 로그인하기</span>
      <ul className="social-login-links">
        {SOCIAL_LOGINS.map((social) => (
          <li>
            <button
              className={`button ${social.className}`}
              onClick={social.handler}
            >
              <img src={social.src} alt={social.alt} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLogin;
