import React from 'react';
import styles from './PostCount.module.css';

const PostCount = () => {
    return (
        <div className="container">
            <div className="row">
                <div className={`${styles.count_container} col-md-3 offset-md-2 mt-2`}>
                    <h2 className="mt-3">0</h2>
                    <p>Your Total Blogs</p>
                </div>
                <div className={`${styles.count_container} col-md-3 offset-md-2 mt-2`}>
                    <h2 className="mt-3">0</h2>
                    <p>Your Total Comments</p>
                </div>
            </div>
        </div>
    );
};

export default PostCount;