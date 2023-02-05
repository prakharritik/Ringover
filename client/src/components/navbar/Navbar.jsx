import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import { Menu, User } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { Context as AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  let { pathname } = useLocation();

  const {
    state: { token, user },
    signout,
  } = useContext(AuthContext);

  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name">
        <img src={Logo} />
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <Menu color="white" />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className={` ${pathname === "/" ? "active-link" : null}`}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className={` ${pathname === "/journey" ? "active-link" : null}`}>
            <NavLink to="/journey">THE JOURNEY</NavLink>
          </li>
          <li className={` ${pathname === "/team" ? "active-link" : null}`}>
            <NavLink to="/team">TEAM</NavLink>
          </li>
          <li className={` ${pathname === "/store" ? "active-link" : null}`}>
            <NavLink to="/store">STORE</NavLink>
          </li>
          <li className={` ${pathname === "/contact" ? "active-link" : null}`}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>

        <div className="dropdown">
          <button className="dropbtn">
            <User size={20} />
            {user ? user.name : null}
          </button>
          <div className="dropdown-content">
            {token ? (
              <a onClick={signout}>Logout</a>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
