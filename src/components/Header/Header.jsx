import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={css.header}>
      <NavLink to="/" className={css.nav}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
      </NavLink>
      <div>{props.isAuth
        ? <div style={{ textAlign: "right" }}>
          {props.login}<br />{props.email}
        </div>
        : <NavLink to="login">Login</NavLink>
      }</div>

    </header>
  );
};

export default Header;
