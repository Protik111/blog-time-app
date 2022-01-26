import React from 'react';
import styles from './TotalPosts.module.css';
import blogPhoto from '../../images/emptyBlog.jpg'
import { NavLink } from 'react-router-dom';

const TotalPosts = () => {
    return (
        <div className={`${styles.totalPosts_container} container mt-2 mb-3`}>
            <div className="p-5">
                <img className={`${styles.blogPhoto} img-fluid rounded mx-auto d-block`} src={blogPhoto} alt="" />
            </div>
            <div className="text-center">
                <p>This is where you can create your posts, but you haven't written anything yet.</p>
                <NavLink to="/createpost"><button className="btn btn-secondary"> ✍️ Write Your Blog Now</button></NavLink>
            </div>
        </div>
    );
};

export default TotalPosts;