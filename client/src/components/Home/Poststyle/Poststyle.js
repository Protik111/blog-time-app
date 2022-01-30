import React from 'react';
import styles from './Poststyle.module.css';
import { GrFormNextLink } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Poststyle = (props) => {
    const { _id, title, description, category, photo } = props.item;
    // const { posts } = useSelector(state => state.postReducer);
    // console.log(posts, 'posts');
    const publicFolder = 'http://localhost:5000/uploads/';
    return (
        <NavLink to={`/${_id}`} className={`${styles.poststyle_container} col-12 col-sm-6 col-md-4 m-1 mb-5`} id="blogs">
            <div className={`${styles.post_image}`}>
                <img src={publicFolder + photo} alt="" />
            </div>
            <div className={`${styles.date_duration} mt-3 d-flex justify-content-evenly`}>
                <p>April 2, 2019</p>
                <p>Fashion</p>
                <p>2 minutes read</p>
            </div>
            <div className="text-center">
                <h4 className={styles.news_title}>{title}</h4>
                <p className={`${styles.full_description} mt-3`}>{description}</p>
                <button type="button" className={styles.more_btn}>Read More<GrFormNextLink/></button>
            </div>
        </NavLink>
    );
};

export default Poststyle;