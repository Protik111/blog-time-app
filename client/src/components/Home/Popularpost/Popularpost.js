import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Popularpost.module.css';
import Moment from 'react-moment';

const Popularpost = (props) => {
    const { _id, title, description, categories, photo, createdAt } = props.item;
    const publicFolder = 'http://localhost:5000/uploads/';
    return (
        <NavLink to={`/${_id}`} className={`${styles.single_popular_post} mt-3`}>
            <div className={`${styles.popular_post_image}`}>
                <img src={publicFolder + photo} alt="" />
            </div>
            <div className={styles.date_title_container}>
                <div className={`${styles.popular_date_duration} d-flex justify-content-evenly`}>
                    <p>Posted<Moment format="D MMM YYYY" withTitle>{createdAt}</Moment></p>
                    <p>{categories ? categories : 'Random'}</p>
                </div>
                <div>
                    <h5 className={styles.heading_title}>{title}</h5>
                </div>
            </div>
        </NavLink>
    );
};

export default Popularpost;