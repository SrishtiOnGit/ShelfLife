import React from "react";
import "./Sidebar.css";
import {NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/src/assets/logo.png" alt="logo" />

      <ul>
        <li>
          <NavLink to="/dashboard" className="nav-link">
            📚 My Shelf
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories" className="nav-link">
            🏷 Categories
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="nav-link">
            👤 Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="nav-link">
            ⚙ Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
