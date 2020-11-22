import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink to="/">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
      </NavLink>
    </header>
  );
};

export default Header;
