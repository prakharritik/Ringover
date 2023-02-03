import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  let { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={Logo} />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className={` ${pathname === "/" ? "active" : null}`}>
            <a href="/">HOME</a>
          </li>
          <li className={` ${pathname === "/journey" ? "active" : null}`}>
            <a href="/journey">THE JOURNEY</a>
          </li>
          <li className={` ${pathname === "/team" ? "active" : null}`}>
            <a href="/team">TEAM</a>
          </li>
          <li className={` ${pathname === "/store" ? "active" : null}`}>
            <a href="/store">STORE</a>
          </li>
          <li className={` ${pathname === "/contact" ? "active" : null}`}>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>

        <div class="dropdown">
          <button class="dropbtn">
            <i className="far fa-user"></i>
            GAGAN
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
