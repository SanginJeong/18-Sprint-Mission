import "./UserInfo.style.css";

const UserInfo = ({ image, name, date }) => {
  const imageSrc = image || "/images/nav-panda.svg";
  return (
    <div className="userInfo-badge">
      <img src={imageSrc} alt="이미지" />
      <div className="userInfo-badge-name-date">
        <span className="userInfo-badge-name">{name}</span>
        <span className="userInfo-badge-date">{date}</span>
      </div>
    </div>
  );
};

export default UserInfo;
