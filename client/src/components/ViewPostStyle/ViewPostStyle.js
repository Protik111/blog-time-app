import React from 'react';
import styles from '../Home/Poststyle/Poststyle.module.css';
import { GrFormNextLink } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const ViewPostStyle = (props) => {
    const { title, photo, _id } = props.post;
    // console.log('id', photo);
    const publicFolder = "http://localhost:5000/uploads/";
    return (
        <NavLink to={`/singlepost/${_id}`}>
            <div className={`${styles.poststyle_container} col-12 col-md-6 offset-md-3 p-5`}>
                <div className={`${styles.post_image}`}>
                    <img src={publicFolder + photo} />
                </div>
                <div className="text-center">
                    <h4 className={styles.news_title}>{title}</h4>
                    <NavLink to={`/singlepost/${_id}`}><button type="button" className={styles.more_btn}>See Details<GrFormNextLink /></button></NavLink>
                </div>
            </div>
        </NavLink>
    );
};

export default ViewPostStyle;