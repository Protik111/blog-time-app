import React from 'react';
import styles from './TotalPosts.module.css';
import blogPhoto from '../../images/emptyBlog.jpg'

const TotalPosts = () => {
    return (
        <div className={`${styles.totalPosts_container} container mt-2`}>
            <div className="p-5">
                <img className={`${styles.blogPhoto} img-fluid rounded mx-auto d-block`} src={blogPhoto} alt="" />
            </div>
            <div className="text-center">
                <p>This is where you can create your posts, but you haven't written anything yet.</p>
                <button className="btn btn-secondary">Write Your Blog Now</button>
            </div>
        </div>
    );
};

export default TotalPosts;