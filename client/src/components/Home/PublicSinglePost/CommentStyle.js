import React, { useEffect } from 'react';
import styles from './Comment.module.css';
import { deleteComment } from '../../../redux/action/Post.action';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../redux/action/Alert.action';
import Moment from 'react-moment';
import blankPhoto from '../../../images/slides/blank.png';


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
    console.log('commentstyler', user, comment.user);

    // let buttonShow = null;
    // if (user === null) {
    //     buttonShow = false;
    //     user._id = null;
    // }else{
    //     buttonShow = user._id === comment.user
    // }

    return (
        <div className="d-flex">
            <div className={`${styles.comment_container} p-3 w-75 m-2 d-flex justify-content-between`}>
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