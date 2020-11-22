import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledComponents from '../StyledComponents/StyledComponents';
import Friends from './Friends/Friends';
import css from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                {/* <a href="/profile">Profile</a> */}
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/styled" activeClassName={css.activeLink}>StyledComponents</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/styled2" activeClassName={css.activeLink}>StyledComponents2</NavLink>
            </div>
            <Friends friends={props.state.friends} />
        </nav>
    )
}

export default Navbar;