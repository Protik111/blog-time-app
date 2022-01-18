import React, { useState } from 'react';
import logo from '../../../images/blogs.png';
import styles from './Navbar.module.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/action/Auth.action';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const { isAuthenticated } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <nav className={styles.navbar_container}>
            <NavLink to="/" className={styles.logo_container}>
                <img src={logo} alt="" />
            </NavLink>
            <div className={styles.navbar_links}>
                <NavLink to="/"><p className={styles.navbar_links_item}><a href="/#home">Home</a></p></NavLink>
                <p className={styles.navbar_links_item}><a href="/#blogs">Blogs</a></p>
                <p className={styles.navbar_links_item}><a href="/#about">About</a></p>
                {
                    isAuthenticated ? 
                    <p className={styles.navbar_links_item}><a onClick={handleLogout} href="/#login">Logout</a></p>
                    : 
                    <NavLink to="/login"><p className={styles.navbar_links_item}><a href="/#login">Login</a></p></NavLink>
                }
            </div>

            <div className={styles.navbar_links_menu}>
                {
                    toggleMenu ?
                        <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (<div className={styles.navbar_links_menu_items}>
                        <p className={styles.navbar_links_item}><a href="">Home</a></p>
                        <p className={styles.navbar_links_item}><a href="">Blogs</a></p>
                        <p className={styles.navbar_links_item}><a href="">About</a></p>
                        <p className={styles.navbar_links_item}><a href="">Login</a></p>
                    </div>)
                }
            </div>
        </nav>
    );
};

export default Navbar;