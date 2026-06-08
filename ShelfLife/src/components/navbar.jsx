import React from 'react';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className="nav-menu">

        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/faq"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            FAQ
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/signin"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Sign In
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Sign Up
          </NavLink>
        </li>

      </ul>
    </header>
  );
};

export default Navbar;