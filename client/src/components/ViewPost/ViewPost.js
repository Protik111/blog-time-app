import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../TotalPosts/TotalPosts.module.css';
import ViewPostStyle from '../ViewPostStyle/ViewPostStyle';

const ViewPost = () => {
    const { post } = useSelector(state => state.postReducer);
    // console.log(post);
    return (
        <div className={`${styles.totalPosts_container} container mt-2 mb-3`}>
            {
                post !== null && post.map(post => <ViewPostStyle post={post} key={post._id}></ViewPostStyle>)
            }
            <div className="text-center mb-3 pb-3">
                <NavLink to="/createpost"><button className="p-2 btn btn-secondary"> ✍️ Write More Blog</button></NavLink>
            </div>
        </div>
    );
};

export default ViewPost;