import React from 'react';
import styles from './Comment.module.css';

const CommentStyle = ({ comment }) => {
    return (
        <div className="d-flex">
            <div className={`${styles.comment_container} p-3 w-75 m-2 d-flex justify-content-start`}>
                <h6>{comment.text}</h6>
            </div>
            <div>
                <button className="btn btn-danger m-4">Delete</button>
            </div>
        </div>
    );
};

export default CommentStyle;