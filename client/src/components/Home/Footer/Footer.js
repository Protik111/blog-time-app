import React from 'react';
import logo from '../../../images/blogs.png';
import styles from './Footer.module.css';
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className={`${styles.footer_cotainer} mt-5 container-fluid`}>
            <div className="d-flex justify-content-center">
                <div className={`${styles.footer_logo} mt-5 mb-5`}>
                    <img src={logo} alt="" />
                    <h6 className={styles.footer_title}>__Blog & Magazine Space__</h6>
                </div>
            </div>
            <div className={`${styles.footer_icon} d-flex justify-content-center pb-5`}>
                <div className={`${styles.social_icon} py-3 m-1`}>
                    <FaFacebookF></FaFacebookF>
                </div>
                <div className={`${styles.social_icon} py-3 m-1`}>
                    <AiOutlineTwitter></AiOutlineTwitter>
                </div>
                <div className={`${styles.social_icon} py-3 m-1`}>
                    <AiOutlineGooglePlus></AiOutlineGooglePlus>
                </div>
                <div className={`${styles.social_icon} py-3 m-1`}>
                    <AiFillLinkedin></AiFillLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;