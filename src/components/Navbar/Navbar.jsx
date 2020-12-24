import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from './Friends/FriendsContainer'
import css from "./Navbar.module.css";

const Navbar = () => {
   return (
      <div style={{gridArea: 'n'}}>
         <nav className={css.nav}>
            <div className={css.item}>
               <NavLink to="/profile" activeClassName={css.activeLink}>
                  Profile
               </NavLink>
            </div>
            <div className={css.item}>
               <NavLink to="/dialogs" activeClassName={css.activeLink}>
                  Messages
               </NavLink>
            </div>
            <div className={css.item}>
               <NavLink to="/users" activeClassName={css.activeLink}>
                  Users
               </NavLink>
            </div>
            <div className={css.item}>
               <NavLink to="/news" activeClassName={css.activeLink}>
                  News
               </NavLink>
            </div>
            <div className={css.item}>
               <NavLink to="/music" activeClassName={css.activeLink}>
                  Music
               </NavLink>
            </div>
            <div className={css.item}>
               <NavLink to="/settings" activeClassName={css.activeLink}>
                  Settings
               </NavLink>
            </div>
            <div className={css.item}>
               <NavLink to="/fonts" activeClassName={css.activeLink}>
                  FontsTest
               </NavLink>
            </div>
         </nav>
         <FriendsContainer />
      </div>
   );
};

export default Navbar;
