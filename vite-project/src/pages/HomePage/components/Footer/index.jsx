import { Link } from "react-router";

const SNS_LINKS = [
  { href: "#", src: "/images/ic_facebook.svg", alt: "페이스북" },
  { href: "#", src: "/images/ic_twitter.svg", alt: "트위터" },
  { href: "#", src: "/images/ic_youtube.svg", alt: "유튜브" },
  { href: "#", src: "/images/ic_instagram.svg", alt: "인스타그램" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <span className="copyright">@codeit - 2024</span>
      <ul className="links">
        <li>
          <Link to="/policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <ul className="sns-links">
        {SNS_LINKS.map((link) => (
          <li key={link.alt}>
            <a target="_blank" href={link.href}>
              <img src={link.src} alt={link.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
