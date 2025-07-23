import React from "react";
import { Link, useLocation } from "react-router";
import "./Navbar.style.css";

const navLinks = [
  { _id: 1, title: "자유게시판", url: "/freeBoard" },
  { _id: 2, title: "중고마켓", url: "/items" },
];

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo">
          <img
            src="/public/images/panda-face.svg"
            alt="nav-logo"
            style={{ width: "40px", height: "40px" }}
          />
          <h1 className="nav-title">판다마켓</h1>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link._id}>
              <Link
                className={pathname === link.url ? "active" : ""}
                to={link.url}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <img
          className="nav-panda"
          src="/public/images/nav-panda.svg"
          alt="nav-panda"
        />
      </nav>
    </header>
  );
};

export default Navbar;
