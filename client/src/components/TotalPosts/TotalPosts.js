import React from 'react';
import styles from './TotalPosts.module.css';
import blogPhoto from '../../images/emptyBlog.jpg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TotalPosts = () => {
    const { profile, loading } = useSelector(state => state.profileReducer);
    return (
        <>
            {profile ? <div className={`${styles.totalPosts_container} container mt-2 mb-3`}>
                <div className="p-5">
                    <img className={`${styles.blogPhoto} img-fluid rounded mx-auto d-block`} src={blogPhoto} alt="" />
                </div>
                <div className="text-center">
                    <p>This is where you can create your posts, but you haven't written anything yet.</p>
                    <NavLink to="/createpost"><button className="p-2 btn btn-secondary mb-3"> ✍️ Write Your Blog Now</button></NavLink>
                </div>
            </div> : <div className="d-flex justify-content-center">
                <h1 style={{color: 'tomato'}}>You've To Create Profile First To Create Blogs!</h1>
            </div>}
        </>
    );
};

export default TotalPosts;