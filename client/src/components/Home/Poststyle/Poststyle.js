import React from 'react';
import styles from './Poststyle.module.css';
import { GrFormNextLink } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

const Poststyle = (props) => {
    const { _id, title, description, categories, photo, createdAt } = props.item;
    const publicFolder = 'http://localhost:5000/uploads/';
    return (
        <NavLink to={`/${_id}`} className={`${styles.poststyle_container} col-12 col-sm-6 col-md-4 m-1 mb-5`} id="blogs">
            <div className={`${styles.post_image}`}>
                <img src={publicFolder + photo} alt="" />
            </div>
            <div className={`${styles.date_duration} mt-3 d-flex justify-content-evenly`}>
                <p><Moment format="D MMM YYYY" withTitle>{createdAt}</Moment></p>
                <p>{categories ? categories : 'Random'}</p>
                <p>2 minutes read</p>
            </div>
            <div className="text-center">
                <h4 className={styles.news_title}>{title}</h4>
                <p className={`${styles.full_description} mt-3`}>{description.slice(0, 150)}</p>
                <button type="button" className={styles.more_btn}>Read More<GrFormNextLink/></button>
            </div>
        </NavLink>
    );
};

export default Poststyle;