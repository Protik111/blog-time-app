import React, { useState } from 'react';
import log from '../../../images/blogs.png';
import styles from './Navbar.module.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className={styles.navbar_container}>
            <div className={styles.logo_container}>
                <img src={log} alt="" />
            </div>
            <div className={styles.navbar_links}>
                <p className={styles.navbar_links_item}><a href="/#home">Home</a></p>
                <p className={styles.navbar_links_item}><a href="/#blogs">Blogs</a></p>
                <p className={styles.navbar_links_item}><a href="/#about">About</a></p>
                <p className={styles.navbar_links_item}><a href="/#login">Login</a></p>
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