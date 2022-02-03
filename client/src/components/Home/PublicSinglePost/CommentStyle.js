import React from 'react';
import styles from './Comment.module.css';
import { deleteComment } from '../../../redux/action/Post.action';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../redux/action/Alert.action';
import Moment from 'react-moment';


const CommentStyle = ({ comment, id }) => {
    const { user, isAuthenticated } = useSelector((state => state.authReducer));
    const dispatch = useDispatch();
    const handleCommentDelete = () => {
        if (isAuthenticated) {
            dispatch(deleteComment(id, comment._id));
        } else {
            dispatch(setAlert('Must Be Login To Delete', 'notCreated'))
        }
    }

    return (
        <div className="d-flex">
            <div className={`${styles.comment_container} w-75 p-3 m-2 d-flex justify-content-between`}>
                <div className="">
                    <p>{comment.text}</p>
                </div>
                <div className={`${styles.author}`}>
                    <p>By {comment.name}</p>
                    <p>Posted<Moment format="D MMM YYYY" withTitle>{comment.date}</Moment></p>
                </div>
            </div>
            <div>
                {user !== null ? user._id === comment.user ? <button onClick={handleCommentDelete} className="btn btn-danger m-4">Delete</button> : '' : ''}
            </div>
        </div>
    );
};

export default CommentStyle;