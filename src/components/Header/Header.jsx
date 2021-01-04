import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/logo.png"

const Header = (props) => {

  return (
    <header className={css.header}>
      <NavLink to="/" className={css.nav}>
        <img src={logo} alt="logo" />
      </NavLink>
      <div>{props.isAuth
        ? <div style={{ textAlign: "right" }}>
          {props.login}<br />{props.email}<br />
          <div onClick={props.logout} style={{cursor:"pointer", color:"blue"}}>Logout</div>
        </div>
        : <NavLink to="login">Login</NavLink>
      }</div>

    </header>
  );
};

export default Header;
