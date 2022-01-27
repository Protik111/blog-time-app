import React from 'react';
import styles from '../Home/Poststyle/Poststyle.module.css';
import demoImage from '../../images/emptyBlog.jpg';
import { GrFormNextLink } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const ViewPostStyle = (props) => {
    const {title, photo, description, _id} = props.post;
    // console.log('id', photo);
    const publicFolder = "http://localhost:5000/uploads/";
    return (
        <div>
            <div className={`${styles.poststyle_container} p-3 col-12 col-sm-6 col-md-4 m-1 mb-5`}>
                <div className={`${styles.post_image}`}>
                    <img src={publicFolder + photo}/>
                </div>
                <div className="text-center">
                    <h4 className={styles.news_title}>{title}</h4>
                    <NavLink to={`/singlepost/${_id}`}><button type="button" className={styles.more_btn}>See Details<GrFormNextLink /></button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ViewPostStyle;