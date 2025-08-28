import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./Navbar.style.css";
import { useMediaQuery } from "react-responsive";

const navLinks = [
  { _id: 1, title: "자유게시판", url: "/freeBoard" },
  { _id: 2, title: "중고마켓", url: "/items" },
];

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          {isMobile ? undefined : (
            <img
              src="/images/panda-face.svg"
              alt="nav-logo"
              style={{ width: "40px", height: "40px" }}
            />
          )}
          <h1 className="nav-title">판다마켓</h1>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link._id}>
              <NavLink
                to={link.url}
                className={
                  location.pathname === "/addItem" && link.url === "/items"
                    ? "active"
                    : ""
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <img
          className="nav-panda"
          src="/images/nav-panda.svg"
          alt="nav-panda"
        />
      </nav>
    </header>
  );
};

export default Navbar;
